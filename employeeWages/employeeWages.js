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

// a. Calculate total wage using Array reduce method
const totalWageCalculated = dailyWages.reduce((total, daily) => total + daily.wage, 0);
console.log("\nTotal Wage Calculated (using reduce): " + totalWageCalculated);

// b. Show the day along with daily wage using Array map
const dailyWageMap = dailyWages.map((daily) => `Day ${daily.day}: Wage ${daily.wage}`);
console.log("\nDaily Wage Map:");
console.table(dailyWageMap);

// c. Show days when full-time wage of 160 was earned using filter
const fullTimeWageDays = dailyWages.filter((daily) => daily.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nDays with Full-Time Wage (160):");
console.table(fullTimeWageDays);

// d. Find the first occurrence when full-time wage was earned using find
const firstFullTimeWageDay = dailyWages.find((daily) => daily.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nFirst Full-Time Wage Day:");
console.table(firstFullTimeWageDay);

// e. Check if every element of full-time wage is truly holding full-time wage
const isEveryFullTimeWage = dailyWages.every((daily) => daily.wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nIs every day a full-time wage day? " + isEveryFullTimeWage);

// f. Check if there is any part-time wage
const isAnyPartTimeWage = dailyWages.some((daily) => daily.wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nIs there any part-time wage day? " + isAnyPartTimeWage);

// g. Find the number of days the employee worked
const workedDays = dailyWages.filter((daily) => daily.workHours > 0).length;
console.log("\nNumber of days the employee worked: " + workedDays);