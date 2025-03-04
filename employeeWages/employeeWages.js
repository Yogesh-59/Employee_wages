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

// Map to store day-wise wages
let dailyWagesMap = new Map();

// Main program
let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs < MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHrs = getWorkHours(empCheck);
    
    totalEmpHrs += empHrs;
    let dailyWage = empHrs * WAGE_PER_HOUR;
    
    // Store day and daily wage in the Map
    dailyWagesMap.set(totalWorkingDays, dailyWage);

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

// Compute total wage using the Map
let totalWageFromMap = 0;
for (let wage of dailyWagesMap.values()) {
    totalWageFromMap += wage;
}
console.log("\nTotal Wage Calculated (using Map): " + totalWageFromMap);

// a. Show the day along with daily wage using Map
const dailyWageMapArray = Array.from(dailyWagesMap).map(([day, wage]) => `Day ${day}: Wage ${wage}`);
console.log("\nDaily Wage Map:");
console.table(dailyWageMapArray);

// b. Show days when full-time wage of 160 was earned using filter
const fullTimeWageDays = Array.from(dailyWagesMap).filter(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nDays with Full-Time Wage (160):");
console.table(fullTimeWageDays);

// c. Find the first occurrence when full-time wage was earned using find
const firstFullTimeWageDay = Array.from(dailyWagesMap).find(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nFirst Full-Time Wage Day:");
console.table(firstFullTimeWageDay);

// d. Check if every element of full-time wage is truly holding full-time wage
const isEveryFullTimeWage = Array.from(dailyWagesMap).every(([day, wage]) => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nIs every day a full-time wage day? " + isEveryFullTimeWage);

// e. Check if there is any part-time wage
const isAnyPartTimeWage = Array.from(dailyWagesMap).some(([day, wage]) => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log("\nIs there any part-time wage day? " + isAnyPartTimeWage);

// f. Find the number of days the employee worked
const workedDays = Array.from(dailyWagesMap).filter(([day, wage]) => wage > 0).length;
console.log("\nNumber of days the employee worked: " + workedDays);