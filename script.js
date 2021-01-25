const dayE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('mins');
const secsE = document.getElementById('seconds');






const newYears = '1 jan 2022';


function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const  hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    /* console.log(totalSeconds);
 */
    /* console.log(days,hours,minutes,seconds); */

    dayE.innerHTML = days;
    hoursE.innerHTML = hours;
    minsE.innerHTML = mins;
    secsE.innerHTML = seconds;
    

}
countdown();

setInterval(countdown,1000);

