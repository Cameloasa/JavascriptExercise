/*1.Write a JavaScript program to display the current day and time in the following 
format. 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy*/

//function
function displayCurrentDate() {
    //declare a new date
    const now = new Date();
    //use get method
    //padStart method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. In this case, it pads the string with '0' until the length is 2. So, if the string is '9', padStart(2, '0') will turn it into '09'.
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
    
    const yyyy = now.getFullYear();
    
    console.log(`${mm}-${dd}-${yyyy}`);
    console.log(`${mm}/${dd}/${yyyy}`);
    console.log(`${dd}-${mm}-${yyyy}`);
    console.log(`${dd}/${mm}/${yyyy}`);
}


/*function displayCurrentDate() {
    const now = new Date();
    const dd = String(now.getDate()).padStart(2, '0');
    const mm = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = now.getFullYear();

    const formattedDate = `${mm}-${dd}-${yyyy}`;
    const formattedDateSlash = `${mm}/${dd}/${yyyy}`;
    const formattedDateDayFirst = `${dd}-${mm}-${yyyy}`;
    const formattedDateDayFirstSlash = `${dd}/${mm}/${yyyy}`;

    console.log(formattedDate);
    console.log(formattedDateSlash);
    console.log(formattedDateDayFirst);
    console.log(formattedDateDayFirstSlash);
}*/

//2. Write a JavaScript program to determine whether a given year is a leap year.
/*function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}*/

// % 4 === 0, % 100 !== =, % 400 === 0
function isLeapYear(year){
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false

//3. Write a JavaScript program to find out if 1st January will be a Sunday between 
//2014 and 2050. 

