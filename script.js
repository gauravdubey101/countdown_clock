const daysE = document.getElementById('days');
const hoursE = document.getElementById('hours');
const minsE = document.getElementById('mins');
const secsE = document.getElementById('seconds');






const newYears = '1 jan 2022';


function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate-currentDate)/1000;
    const days = Math.floor(totalSeconds/3600/24);
    const  hours = Math.floor(totalSeconds/3600)%24;
    const mins = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;

    /* console.log(totalSeconds);
 */
    console.log(days,hours,mins,seconds);

    daysE.innerHTML = days;
     hoursE.innerHTML = formateTime(hours);
   minsE.innerHTML = formateTime(mins);
   secsE.innerHTML = formateTime(seconds); 
    

}

function formateTime(time){
    return time <10?`0${time}`:time;
}


countdown();


setInterval(countdown,1000);

