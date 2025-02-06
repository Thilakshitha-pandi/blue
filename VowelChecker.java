import java.util.Scanner;

public class VowelChecker {
public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);
System.out.print("Enter a character: ");
char input = scanner.next().toLowerCase().charAt(0);  // Convert input to lowercase to make the check case-insensitive
if (input == 'a' || input == 'e' || input == 'i' || input == 'o' || input == 'u') {
System.out.println(input + " is a vowel.");
} 
else {
System.out.println(input + " is not a vowel.");
}
scanner.close();
}
}
