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

// Map to store day-wise wages and hours
let dailyWagesMap = new Map();
let dailyHoursMap = new Map();

// Main program
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = empHrs * WAGE_PER_HOUR;
    
    // Store day, daily wage, and daily hours in the Maps
    dailyWagesMap.set(totalWorkingDays, dailyWage);
    dailyHoursMap.set(totalWorkingDays, empHrs);

    console.log(`Day ${totalWorkingDays}: Worked ${empHrs} hours, Earned ${dailyWage}`);
}

// Calculate total wage
let totalWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("\nTotal Working Days: " + totalWorkingDays);
console.log("Total Working Hours: " + totalEmpHrs);
console.log("Total Employee Wage: " + totalWage);

// Display stored daily wages using Map
console.log("\nDaily Wages Record (Map):");
for (let [day, wage] of dailyWagesMap) {
    console.log(`Day ${day}: Wage ${wage}`);
}

// a. Calculate Total Wage and Total Hours Worked using Arrow Functions
const totalWageFromMap = Array.from(dailyWagesMap.values()).reduce((total, wage) => total + wage, 0);
const totalHoursFromMap = Array.from(dailyHoursMap.values()).reduce((total, hours) => total + hours, 0);

console.log("\nTotal Wage Calculated (using Map): " + totalWageFromMap);
console.log("Total Hours Worked (using Map): " + totalHoursFromMap);

// b. Show Full Working Days, Part Working Days, and No Working Days using Arrow Functions
const fullWorkingDays = Array.from(dailyHoursMap).filter(([day, hours]) => hours === FULL_TIME_HOURS);
const partWorkingDays = Array.from(dailyHoursMap).filter(([day, hours]) => hours === PART_TIME_HOURS);
const noWorkingDays = Array.from(dailyHoursMap).filter(([day, hours]) => hours === 0);

console.log("\nFull Working Days:");
console.table(fullWorkingDays);

console.log("\nPart Working Days:");
console.table(partWorkingDays);

console.log("\nNo Working Days:");
console.table(noWorkingDays);