// javascript date objects

// new Date()
// new Date(date string)
// new Date(year , month)
// new Date(year , month , day)
// new Date(year , month , day , hours)
// new Date(year , month , day , hours , minutes)
// new Date(year , month , day , hours , minutes , second)
// new Date(milliseconds)

// {
//     const dates = new Date();
//     console.log(dates);
// }

// {
//     const dates = new Date("2023-07-14");
//     console.log(dates);
// }

// {
//     const dates = new Date(2028 , 6);
//     console.log(dates);
// }

// {
//     const dates = new Date(2025 , 5 , 26);
//     console.log(dates);
// }

// {
//     const dates = new Date(2028 , 7 , 23 , 5);
//     console.log(dates);
// }

// {
//     const dates = new Date(2025 , 8 , 5 , 5 , 56);
//     console.log(dates);
// }

// {
//     const dates = new Date(2026 , 5 , 25 , 5 , 55 , 2);
//     console.log(dates);
// }

// {
//     const dates = new Date(20000000);
//     console.log(dates);
// }

// javascript ISO standerd time

// {
//     const dates = new Date(2026 , 5 , 25 , 5 , 55 , 2);
//     console.log(dates.toString());
//     console.log(dates.toDateString());
//     console.log(dates.toUTCString());
//     console.log(dates.toISOString());
// }

// javascript Date formets

// ISO Date , Short Date , Long Date

// ISO Date

// {
//     const dates = new Date("2025");
//     console.log(dates);
// }

// // Shote Date

// {
//     const dates = new Date("12/26/2025");
//     console.log(dates);
// }

// // Long Date

// {
//     const dates = new Date("april 26 2025");
//     console.log(dates);
// }

// {
//     const dates = new Date("26 april 2025");
//     console.log(dates);
// }

// Date Input - Parsing Dates

// {
//     let msec = Date.parse("March 21, 2012");
//     console.log(msec);
// }

// javascript Get Date Mehods

// getFullYear()
// getmonth()
// getDate()
// getDay()
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()
// getTime()

// {
    // const dates = new Date();
    // console.log(dates);
    // let getYear = dates.getFullYear();
    // let getmonth = dates.getMonth();
    // let getdate = dates.getDate();
    // let getday = dates.getDay();
    // let gethours = dates.getHours();
    // let getminutes = dates.getMinutes();
    // let getseconds = dates.getSeconds();
    // let getmilliseconds = dates.getMilliseconds();
    // let gettime = dates.getTime();

    // console.log(getYear);
    // console.log(getmonth);
    // console.log(getdate);
    // console.log(getday);
    // console.log(gethours);
    // console.log(getminutes);
    // console.log(getseconds);
    // console.log(getmilliseconds);
    // console.log(gettime);
// }

// javascript set Date Methods

// setDate()
// setFullYear()
// setHours()
// setMilliseconds()
// setMinutes()
// setMinutes()
// setMonth()
// setSeconds()
// setTime()

// {
//     const dates = new Date();
//     dates.setFullYear(2025);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMonth(5);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setHours(5);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMinutes(5);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setSeconds(5);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setMilliseconds(1000000);
//     console.log(dates);
// }

// {
//     const dates = new Date();
//     dates.setTime(5);
//     console.log(dates);
// }