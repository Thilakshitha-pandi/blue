class UserSessionTracker {
  constructor(inactivityTimeout = 5 * 60 * 1000) { // default 5 minutes
    this.activeUserIds = new Set();      // Store unique user IDs
    this.userMetadata = new WeakMap();   // User object -> metadata (weak ref)
    this.userObjects = new Map();        // userId -> user object (strong ref for cleanup)
    this.inactivityTimeout = inactivityTimeout;
  }

  addUser(user) {
    if (!user || !user.id) throw new Error("User must have 'id'");

    this.activeUserIds.add(user.id);
    this.userObjects.set(user.id, user);
    this.userMetadata.set(user, { lastActivity: Date.now() });
    console.log(`User ${user.id} added.`);
  }

  removeUser(user) {
    if (!user || !user.id) return;

    this.activeUserIds.delete(user.id);
    this.userMetadata.delete(user);
    this.userObjects.delete(user.id);
    console.log(`User ${user.id} removed.`);
  }

  updateActivity(user) {
    if (this.userMetadata.has(user)) {
      this.userMetadata.set(user, { lastActivity: Date.now() });
      console.log(`User ${user.id} activity updated.`);
    } else {
      console.warn(`User ${user.id} not found.`);
    }
  }

  cleanupInactiveUsers() {
    const now = Date.now();

    for (const [userId, user] of this.userObjects.entries()) {
      const metadata = this.userMetadata.get(user);

      if (!metadata) {
        // User object probably GC'd, remove strong references
        this.userObjects.delete(userId);
        this.activeUserIds.delete(userId);
        console.log(`User ${userId} cleaned up (no metadata).`);
        continue;
      }

      if (now - metadata.lastActivity > this.inactivityTimeout) {
        this.userObjects.delete(userId);
        this.activeUserIds.delete(userId);
        this.userMetadata.delete(user);
        console.log(`User ${userId} cleaned up due to inactivity.`);
      }
    }
  }
}

// --- Demo ---

const tracker = new UserSessionTracker(3000); // 3 seconds timeout

function createUser(id) {
  return { id };
}

let user1 = createUser("user1");
let user2 = createUser("user2");

tracker.addUser(user1);
tracker.addUser(user2);

setTimeout(() => {
  tracker.updateActivity(user1);  // user1 active again after 1s
}, 1000);

setTimeout(() => {
  tracker.cleanupInactiveUsers(); // user2 should be cleaned after 4s
}, 4000);

setTimeout(() => {
  // Remove reference to user1 to allow GC
  user1 = null;

  // Clean up again after 7s, user1 should also be cleaned up
  tracker.cleanupInactiveUsers();

  console.log("Final active user IDs:", Array.from(tracker.activeUserIds));
}, 7000);
