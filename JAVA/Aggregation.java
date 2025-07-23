import java.util.List;
import java.util.Arrays;
class Employee {
    String name;
    Employee(String name) {
        this.name = name;
    }
    String getName() {
        return name;
    }
}
class Department {
    List<Employee> employees;

    Department(List<Employee> employees) {
        this.employees = employees;
    }
    void showEmployees() {
        System.out.println("Employees in the department:");
        for (Employee emp : employees) {
            System.out.println(emp.getName());
        }
    }
}
public class Aggregation {
    public static void main(String[] args) {
        Employee emp1 = new Employee("Harry");
        Employee emp2 = new Employee("Ron");

        Department department = new Department(Arrays.asList(emp1, emp2));
        department.showEmployees();
    }
}

