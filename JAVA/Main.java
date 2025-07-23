class Employee {
  private int id;
  private int salary;
  private static int mini_salary = 30000; 
  public Employee(int id, int salary) {
    this.id = id;
    this.salary = salary;
  }
  public int getSalary() {
    return salary;
  }
  public void setSalary(int newSalary) {
    if (newSalary >= mini_salary) {
      this.salary = newSalary;
    } else {
      System.out.println("Error: salary cannot be below " + mini_salary);
    }
  }
  public int getID() {
    return id;
  }
}
public class Main { 
  public static void main(String[] args) {
    Employee emp = new Employee(101, 250000);
    System.out.println("Salary: " + emp.getSalary());
    emp.setSalary(28000); 
    System.out.println("Salary: " + emp.getSalary());
    emp.setSalary(35000); 
    System.out.println("Salary: " + emp.getSalary());
  }
}
