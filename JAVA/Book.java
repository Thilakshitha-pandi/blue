import java.util.Scanner;
public class Book {
    String title;
    String author;
    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }
    public void display() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Title:");
        String title = sc.nextLine();
        System.out.println("Enter Author:");
        String author = sc.nextLine();
        Book obj = new Book(title, author);
        obj.display();
    }
}
