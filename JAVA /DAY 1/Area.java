import java.util.Scanner;
public class Area{
public static void main (String[] agrs){
Scanner sc =new Scanner(System.in);
System.out.println("enter len:");
int len = sc.nextInt();
System.out.println("enter bre:");
int bre = sc.nextInt();
int rectangle=len*bre;
System.out.println("area of rectangle: "+rectangle);
}
}
