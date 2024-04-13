const months =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll(".deadline-format .item-number");

// To get current date ===>  let futureDate = new Date()
//            year, month, date/day, hours, minutes, seconds    
let futureDate = new Date(2024, 3, 16, 23, 59, 59);
// let futureDate = new Date(2024, 3, 10, 17, 31, 59);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

let month = futureDate.getMonth();
month = months[month];

const date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()];

// ==== OR ====

// let weekday = futureDate.getDay();
// weekday = weekdays[weekday];


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}`;


// future time in milliseconds (ms)
const futureTime = futureDate.getTime();


// setting up the function to get the remaining time (using arrow function).
const getRemainingTime = () => {
    const today = new Date().getTime();
    // To get the remaining time (substract the current time (today) from future time (Deadline time)).
    const t = futureTime - today;

    // 1s = 1000ms
    // 1min = 60s
    // 1hr = 60mins
    // 1day = 24hrs

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;


    // Calculate all values

    // // To get the remaining number of days, divide the remaining time (t) with the milliseconds in a day (oneDay) and round it down to the nearest integer using Math.floor() method
    // let days = t/oneDay;
    // days = Math.floor(days);
    // // console.log(days);

    // // to get the remaining time in millisecond after getting the number of remaining days
    // // The remainder of the division, after dividing time(t) by the milliseconds in a day (oneDay) 
    // const daysRemainder = t%oneDay;
    // // console.log(daysRemainder);


    // // To get the remaining number of hours, divide the remaining time (daysRemainder) with the milliseconds in an hour (oneHour) and round it down to the nearest integer using Math.floor() method
    // let hours = daysRemainder/oneHour;
    // hours = Math.floor(hours);
    // // console.log(hours);


    // // To get the remaining time in millisecond after getting the number of remaining hours
    // // The remainder of the division, after dividing remaining time(daysRemainder) by the milliseconds in an hour (oneHour) 
    // const hoursRemainder = daysRemainder%oneHour;
    // // console.log(hoursRemainder);


    // // To get the remaining number of minutes, divide the remaining time (hoursRemainder) by the milliseconds in a minute (oneMinute) and round it down to the nearest integer using Math.floor() method
    // let minutes = hoursRemainder/oneMinute;
    // minutes = Math.floor(minutes);
    // // console.log(minutes);

    
    // // to get the remaining time in millisecond after getting the number of remaining minutes
    // // The remainder of the division, after dividing remaining time(hoursRemainder) by the milliseconds in a minute (oneMinute)
    // const minutesRemainder = hoursRemainder%oneMinute;
    // // console.log(minutesRemainder);

    
    // // To get the remaining number of seconds, divide the remaining time (minutesRemainder) with the milliseconds in a second (oneSecond) and round it down to the nearest integer using Math.floor() method
    // let seconds = minutesRemainder/oneSecond;
    // seconds = Math.floor(seconds);
    // // console.log(seconds);

    

    // Calculate all values

    // To get the remaining days
    let days = t / oneDay;
    days = Math.floor(days);
    
    // To get the remaining hours
    let hours = Math.floor((t % oneDay) / oneHour);

    // To get the remaining minutes
    let minutes = Math.floor((t % oneHour) / oneMinute);

    // To get the remaining seconds
    let seconds = Math.floor((t % oneMinute) / oneSecond);
    // ======  OR ======
    // let seconds = Math.floor((t % oneMinute) / 1000);


    // set values array
    const values = [days, hours, minutes, seconds];

    const format = (item) => {
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach((item, index) =>{
        item.innerHTML = format(values[index]);
    });

    if (t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h2 class="text-danger fw-bold text-uppercase"> sorry, this giveaway has expired </h2>`;
    }
}

// setting countdown
let countdown = setInterval(getRemainingTime, 1000)


getRemainingTime();