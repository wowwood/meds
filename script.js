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
    const date = new Date()
    const dayOfWeek = date.getDay()
    console.log(dayOfWeek)
    const day = days[dayOfWeek]
    document.body.style.background = day.color;
    const text = document.getElementById("day");
    text.innerHTML = `${day.name}` 
  });