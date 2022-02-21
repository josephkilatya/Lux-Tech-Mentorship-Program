//program to check if a year is a leap year


/* A year is leap year if the following conditions are satisfeid:
* 1. The year is multiple 0f 400'
* 2. The yaer is multiple of 4 and not a multiple of 400
*/
    function checkLeapYear(year){
        if((year % 4 == 0) && (year % 100 !=0) || (year % 400 == 0)){
        console.log(year+" is a year.");
        }

    else{
        console.log(year+" is not a leap yaer.");
        }
    }
//take input from user
let  year = prompt("Enter A Year");

//calling our function
checkLeapYear(year);