public class swapno {
    public static void main(String[] args) {
        int a = 5, b = 10;

        
        System.out.println("Before swapping:");
        System.out.println("a = " + a + ", b = " + b);

        
        a = a + b;
        b = a - b;
        a = a - b;

        
        System.out.println("After swapping:");
        System.out.println("a = " + a + ", b = " + b);
    }
}
