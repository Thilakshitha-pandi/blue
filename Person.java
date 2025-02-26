public class Person {
String name;
int age;
public void introduce(String name,int age){
  this.name=name;
  this.age=age;
System.out.println("Welcom all I am");
System.out.println(name);
System.out.println("and I am " +age+" year's old");
}
public static void main(String[] args){
Person obj = new Person();
obj.introduce("Thilakshitha",17);
}
} 
