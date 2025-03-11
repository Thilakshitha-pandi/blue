interface Playable {
    void play();
}

abstract class Guitar implements Playable {
    public void play() {
        System.out.println("Playing Guitar");
    }
}

abstract class Piano implements Playable {
    public void play() {
        System.out.println("Playing Piano");
    }
}

class GuitarEx extends Guitar {
}

class PianoEx extends Piano {
}

public class Interface {
    public static void main(String[] args) {
        Playable obj1 = new GuitarEx();
        Playable obj2 = new PianoEx();
        obj1.play();
        obj2.play();
    }
}
