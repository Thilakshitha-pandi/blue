interface Playable {
  void play();
}
class Guitar implements Playable {
  public void play() {
    System.out.println("Playing Guitar");
  }
}
class Piano implements Playable {
  public void play() {
    System.out.println("Playing Piano");
  }
} 
public class Interface {
  public static void main (String[] args){
    Playable obj1 = new Guitar();
    Playable obj2 = new Piano();
    obj1.play();
    obj2.play();
  }
}
