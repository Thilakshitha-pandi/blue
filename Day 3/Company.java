class Company {
    static String companyName = "Tech Solutions";
    String employeeName;

    Company(String employeeName) {
        this.employeeName = employeeName;
    }

    void displayDetails() {
        System.out.println("Company Name: " + companyName);
        System.out.println("Employee Name: " + employeeName);
    }

    public static void main(String[] args) {
        Company emp1 = new Company("Harry potter");
        Company emp2 = new Company("Ginny Weasley");

        emp1.displayDetails();
        emp2.displayDetails();

        companyName = "Innovative Tech";
        emp1.displayDetails();
        emp2.displayDetails();
    }
}
