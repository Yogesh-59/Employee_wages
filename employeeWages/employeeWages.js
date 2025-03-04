// Constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Function to get work hours based on employee attendance and type
function getWorkHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// Main program
let emp = Math.floor(Math.random() * 3); // Randomly generate 0, 1, or 2
if (emp === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is Present");

    // Get work hours
    let empHrs = getWorkHours(emp);

    // Calculate wage
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee Work Hours: " + empHrs);
    console.log("Employee Wage: " + empWage);
}