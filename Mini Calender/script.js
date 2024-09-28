const monthEl=document.getElementById("month-name");
const weekDay=document.getElementById("week-day");
const DayNumber=document.getElementById("day-number");
const Year=document.getElementById("year");

const date= new Date();
const month=date.getMonth();

monthEl.innerText=date.toLocaleString("en",{
    month:"long"
});
weekDay.innerText=date.toLocaleString("en",{
    weekday:"long"
});
DayNumber.innerText=date.getDate();

Year.innerText=date.getFullYear();