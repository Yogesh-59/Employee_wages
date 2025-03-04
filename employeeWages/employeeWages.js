// Constants
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

// Function to get work hours based on employee attendance type
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

// Array to store daily wages
let dailyWages = [];

// Main program
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = empHrs * WAGE_PER_HOUR;
    
    // Store daily wage
    dailyWages.push({ day: totalWorkingDays, workHours: empHrs, wage: dailyWage });

    console.log(`Day ${totalWorkingDays}: Worked ${empHrs} hours, Earned ${dailyWage}`);
}

// Calculate total wage
let totalWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("\nTotal Working Days: " + totalWorkingDays);
console.log("Total Working Hours: " + totalEmpHrs);
console.log("Total Employee Wage: " + totalWage);

// Display stored daily wages
console.log("\nDaily Wages Record:");
console.table(dailyWages);
