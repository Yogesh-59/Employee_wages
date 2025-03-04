// Constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;
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
let empHrs=0;
for (let day =0; day < NUM_OF_WORKING_DAYS; day++){
    let empCheck = Math.floor(Math.random() * 3);
    empHrs += getWorkHours(empCheck);
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Working Hours: " + empHrs);

let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    totalEmpHrs += getWorkHours(empCheck);
}
let totalWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Working Days: " + totalWorkingDays);