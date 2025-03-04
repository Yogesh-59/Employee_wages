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
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.gender = gender;
        this.startDate = startDate;
        this.dailyRecords = [];
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
        console.log(`\nEmployee ID: ${this.id}, Name: ${this.name}, Gender: ${this.gender}, Salary: ${this.salary}, Start Date: ${this.startDate}`);
        console.table(this.dailyRecords);
        console.log(`Total Hours Worked: ${this.getTotalHours()}, Total Wage: ${this.getTotalWage()}\n`);
    }
}

// Create Employee Payroll Data with gender and start date
let employee = new EmployeePayroll(101, "John Doe", 50000, "Male", "2024-03-04");

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
