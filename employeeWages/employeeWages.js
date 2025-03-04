// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

// Function to get work hours
const getWorkHours = (empCheck) => empCheck === 1 ? PART_TIME_HOURS : empCheck === 2 ? FULL_TIME_HOURS : 0;

// EmployeePayroll Class
class EmployeePayroll {
    constructor(id, name, salary, gender, startDate) {
        this.dailyRecords = [];
        
        // Validate properties using setter methods
        this.setId(id);
        this.setName(name);
        this.setSalary(salary);
        this.setGender(gender);
        this.setStartDate(startDate);
    }

    // Name validation (Starts with capital, at least 3 chars)
    setName(name) {
        let namePattern = /^[A-Z][a-zA-Z]{2,}$/;
        if (!namePattern.test(name)) {
            throw new Error(" Invalid Name: Name must start with a capital letter and have at least 3 characters.");
        }
        this.name = name;
    }

    // ID validation (Positive number greater than 0)
    setId(id) {
        if (!Number.isInteger(id) || id <= 0) {
            throw new Error(" Invalid ID: Employee ID must be a non-zero positive integer.");
        }
        this.id = id;
    }

    // Salary validation (Positive number greater than 0)
    setSalary(salary) {
        if (isNaN(salary) || salary <= 0) {
            throw new Error(" Invalid Salary: Salary must be a non-zero positive number.");
        }
        this.salary = salary;
    }

    // Gender validation (Only 'M' or 'F')
    setGender(gender) {
        let genderPattern = /^[MF]$/; // Only 'M' or 'F'
        if (!genderPattern.test(gender)) {
            throw new Error(" Invalid Gender: Gender must be 'M' (Male) or 'F' (Female).");
        }
        this.gender = gender;
    }

    // Start Date validation (Cannot be a future date)
    setStartDate(startDate) {
        let date = new Date(startDate);
        let today = new Date();
        if (isNaN(date) || date > today) {
            throw new Error(" Invalid Start Date: Date cannot be in the future.");
        }
        this.startDate = startDate;
    }

    // Method to add daily work details
    addWorkDetails(day, hoursWorked) {
        let wageEarned = hoursWorked * WAGE_PER_HOUR;
        this.dailyRecords.push({ day, hoursWorked, wageEarned });
    }

    // Method to calculate total hours and wages
    getTotalHours() {
        return this.dailyRecords.reduce((total, record) => total + record.hoursWorked, 0);
    }

    getTotalWage() {
        return this.dailyRecords.reduce((total, record) => total + record.wageEarned, 0);
    }

    // Display employee details
    displayEmployeeDetails() {
        console.log(`\n Employee ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: ${this.salary}, Start Date: ${this.startDate}`);
        console.table(this.dailyRecords);
        console.log(`Total Hours Worked: ${this.getTotalHours()}, Total Wage: ${this.getTotalWage()}\n`);
    }
}

// Try-Catch for input validation
try {
    // Create Employee Payroll Data with gender and start date
    let employee = new EmployeePayroll(49, "Deepraj", 50000, "M", "2024-07-04");

    let totalEmpHrs = 0, totalWorkingDays = 0;

    // Loop until max hours or max days
    while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 3);
        let empHrs = getWorkHours(empCheck);
        totalEmpHrs += empHrs;

        // Add daily work details to the employee
        employee.addWorkDetails(totalWorkingDays, empHrs);
    }

    // Display Employee Payroll Data
    employee.displayEmployeeDetails();

    // a. Calculate Total Wage and Total Hours Worked
    console.log("Total Wage using reduce():", employee.getTotalWage());
    console.log("Total Hours using reduce():", employee.getTotalHours());

    // b. Show Full Working Days using forEach()
    console.log("\nFull Working Days:");
    employee.dailyRecords.forEach(record => {
        if (record.hoursWorked === FULL_TIME_HOURS)
            console.log(`Day ${record.day}: Hours ${record.hoursWorked}, Wage ${record.wageEarned}`);
    });

    // c. Show Part Working Days using Map() by reducing to String Array
    const partWorkingDays = employee.dailyRecords
        .filter(record => record.hoursWorked === PART_TIME_HOURS)
        .map(record => `Day ${record.day}`);

    console.log("\nPart Working Days:", partWorkingDays);

    // d. Show No Working Days using Map()
    const noWorkingDays = employee.dailyRecords
        .filter(record => record.hoursWorked === 0)
        .map(record => `Day ${record.day}`);

    console.log("\nNo Working Days:", noWorkingDays);

} catch (error) {
    console.error("\n Error:", error.message);
}
