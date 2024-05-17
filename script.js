const days = [
    {color:"#eb34cf", name:"Sunday"},
    {color:"#eb8f34", name:"Monday"},
    {color:"#ebcf34", name:"Tuesday"},
    {color:"#80eb34", name:"Wednesday"},
    {color:"#349eeb", name:"Thursday"},
    {color:"#34ebbd", name:"Friday"},
    {color:"#aa1ee6", name:"Saturday"},
]

document.addEventListener("DOMContentLoaded", function(event) { 
    // Elements
    const main = document.getElementById("main")
    const before = document.getElementById("before")
    const yesterdayText = document.getElementById("yesterdayText")
    const text = document.getElementById("day");
    const next = document.getElementById("next")
    const tomorrowText = document.getElementById("tomorrowText")


    const date = new Date()
    const dayOfWeek = date.getDay()
    console.log(dayOfWeek)
    const day = days[dayOfWeek]
    let previousDayNum = dayOfWeek - 1
    if(previousDayNum < 0){
        previousDayNum = 6
    }
    let nextDayNum = dayOfWeek + 1
    if(nextDayNum > 6){
        nextDayNum = 0
    }

    // Set yesterdays color
    const previousDay = days[previousDayNum]
    before.style.background = previousDay.color
    yesterdayText.innerHTML = `${previousDay.name}`

    // Set todays color
    main.style.background = day.color;
    text.innerHTML = `${day.name}`

    // Set tomorrows color
    const nextDay = days[nextDayNum]
    next.style.background = nextDay.color
    tomorrowText.innerHTML = `${nextDay.name}`
  });