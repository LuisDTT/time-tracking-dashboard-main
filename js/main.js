const btnList = document.querySelectorAll(".user-card__date-btn");

btnList.forEach(btn=>btn.addEventListener("click",(e)=>{
    btnList.forEach(btn=>btn.classList.remove("user-card__date-btn--active"));
    btn.classList.add("user-card__date-btn--active");
   
}));

const workElement = document.querySelector("#workTimeFrames");
const playElement = document.querySelector("#playTimeFrames");
const studyElement = document.querySelector("#studyTimeFrames");
const exerciseElement = document.querySelector("#exerciseTimeFrames");
const socialElement = document.querySelector("#socialTimeFrames");
const selfcareElement = document.querySelector("#selfcareTimeFrames");

let request = fetch("../data.json");
request
        .then(res=>res.json())
        .then(res=>{
            document.querySelector("#btnDaily").addEventListener("click",()=>{
                dailyTimeFrames(res);
            })
            document.querySelector("#btnWeekly").addEventListener("click",()=>{
                weeklyTimeFrames(res);
            })
            document.querySelector("#btnMonthly").addEventListener("click",()=>{
                monthlyTimeFrames(res);
            })
        })

const dailyTimeFrames = (res)=>{
    
    workElement.children[0].textContent = `${res[0].timeframes.daily.current}hrs`;
    workElement.children[1].textContent = `Last Week - ${res[0].timeframes.daily.previous}hrs`;

    playElement.children[0].textContent = `${res[1].timeframes.daily.current}hrs`;
    playElement.children[1].textContent = `Last Week - ${res[1].timeframes.daily.previous}hrs`;

    studyElement.children[0].textContent = `${res[2].timeframes.daily.current}hrs`;
    studyElement.children[1].textContent = `Last Week - ${res[2].timeframes.daily.previous}hrs`;

    exerciseElement.children[0].textContent = `${res[3].timeframes.daily.current}hrs`;
    exerciseElement.children[1].textContent = `Last Week - ${res[3].timeframes.daily.previous}hrs`;

    socialElement.children[0].textContent = `${res[4].timeframes.daily.current}hrs`;
    socialElement.children[1].textContent = `Last Week - ${res[4].timeframes.daily.previous}hrs`;

    selfcareElement.children[0].textContent = `${res[5].timeframes.daily.current}hrs`;
    selfcareElement.children[1].textContent = `Last Week - ${res[5].timeframes.daily.previous}hrs`;

}

const weeklyTimeFrames = (res)=>{
    
    workElement.children[0].textContent = `${res[0].timeframes.weekly.current}hrs`;
    workElement.children[1].textContent = `Last Week - ${res[0].timeframes.weekly.previous}hrs`;

    playElement.children[0].textContent = `${res[1].timeframes.weekly.current}hrs`;
    playElement.children[1].textContent = `Last Week - ${res[1].timeframes.weekly.previous}hrs`;

    studyElement.children[0].textContent = `${res[2].timeframes.weekly.current}hrs`;
    studyElement.children[1].textContent = `Last Week - ${res[2].timeframes.weekly.previous}hrs`;

    exerciseElement.children[0].textContent = `${res[3].timeframes.weekly.current}hrs`;
    exerciseElement.children[1].textContent = `Last Week - ${res[3].timeframes.weekly.previous}hrs`;

    socialElement.children[0].textContent = `${res[4].timeframes.weekly.current}hrs`;
    socialElement.children[1].textContent = `Last Week - ${res[4].timeframes.weekly.previous}hrs`;

    selfcareElement.children[0].textContent = `${res[5].timeframes.weekly.current}hrs`;
    selfcareElement.children[1].textContent = `Last Week - ${res[5].timeframes.weekly.previous}hrs`;

}

const monthlyTimeFrames = (res)=>{
    
    workElement.children[0].textContent = `${res[0].timeframes.monthly.current}hrs`;
    workElement.children[1].textContent = `Last Week - ${res[0].timeframes.monthly.previous}hrs`;

    playElement.children[0].textContent = `${res[1].timeframes.monthly.current}hrs`;
    playElement.children[1].textContent = `Last Week - ${res[1].timeframes.monthly.previous}hrs`;

    studyElement.children[0].textContent = `${res[2].timeframes.monthly.current}hrs`;
    studyElement.children[1].textContent = `Last Week - ${res[2].timeframes.monthly.previous}hrs`;

    exerciseElement.children[0].textContent = `${res[3].timeframes.monthly.current}hrs`;
    exerciseElement.children[1].textContent = `Last Week - ${res[3].timeframes.monthly.previous}hrs`;

    socialElement.children[0].textContent = `${res[4].timeframes.monthly.current}hrs`;
    socialElement.children[1].textContent = `Last Week - ${res[4].timeframes.monthly.previous}hrs`;

    selfcareElement.children[0].textContent = `${res[5].timeframes.monthly.current}hrs`;
    selfcareElement.children[1].textContent = `Last Week - ${res[5].timeframes.monthly.previous}hrs`;

}


