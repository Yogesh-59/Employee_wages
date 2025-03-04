// Constants
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

// Function to get work hours
const getWorkHours = (empCheck) => empCheck === 1 ? PART_TIME_HOURS : empCheck === 2 ? FULL_TIME_HOURS : 0;

// Array to store daily records as objects
let dailyRecords = [];

let totalEmpHrs = 0, totalWorkingDays = 0;

// Loop until max hours or max days
while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkHours(empCheck);
    totalEmpHrs += empHrs;

    // Store day-wise data as an object
    dailyRecords.push({ day: totalWorkingDays, hoursWorked: empHrs, wageEarned: empHrs * WAGE_PER_HOUR });
}

// Display all records
console.log("\nDaily Records (Day, Hours Worked, Wage Earned):");
console.table(dailyRecords);

// a. Calculate Total Wage and Total Hours Worked using reduce()
const totalWage = dailyRecords.reduce((total, record) => total + record.wageEarned, 0);
const totalHours = dailyRecords.reduce((total, record) => total + record.hoursWorked, 0);

console.log("\nTotal Working Days:", totalWorkingDays);
console.log("Total Hours Worked:", totalHours);
console.log("Total Employee Wage:", totalWage);

// b. Categorize Full Working Days, Part Working Days, and No Working Days using filter()
const fullWorkingDays = dailyRecords.filter(record => record.hoursWorked === FULL_TIME_HOURS);
const partWorkingDays = dailyRecords.filter(record => record.hoursWorked === PART_TIME_HOURS);
const noWorkingDays = dailyRecords.filter(record => record.hoursWorked === 0);

console.log("\nFull Working Days:");
console.table(fullWorkingDays);

console.log("\nPart Working Days:");
console.table(partWorkingDays);

console.log("\nNo Working Days:");
console.table(noWorkingDays);
