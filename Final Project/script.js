function displayTime(){
    // setting the time period
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let TimePeriod = "AM";
    
    //updating the time period
    if (hour >= 12) {
        TimePeriod = "PM"
    }

    //ensuring a 12-hour format
    if(hour > 12){
        hour = hour - 12
    }
    
    //preventing single digits
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    
    // adding the elements to the DOM by targeting the div's Id
    document.querySelector(".hours").innerText = hour
    document.querySelector(".minutes").innerText = minute
    document.querySelector(".seconds").innerText = second
    document.querySelector(".TimePeriod"). innerText = TimePeriod
    
    
    // Light and dark mode
    const toggle = document.getElementById("switchMode");
    const body = document.querySelector("body");
    const colonOne = document.getElementById("dotOne");
    const colonTwo = document.getElementById("dotTwo");
    const colonThree = document.getElementById("dotThree")

    toggle.addEventListener("click", function(){
    this.classList.toggle("bi-moon")
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background = "#b6a189"
        body.style.color = "black"
        colonOne.style.color = "black"
        colonTwo.style.color = "black"
        colonThree.style.color = "black"
        body.style.transition = "1s"
    }else{
        body.style.background = "black"
        body.style.color = "white"
        colonOne.style.color = "white"
        colonTwo.style.color = "white"
        colonThree.style.color = "white"
        body.style.transition = "1s"
    }
    })

}
setInterval(displayTime, 1000)











































//     document.getElementById("digitalClock").innerText = hour + ":" + minute + ":" + second + "" + timePeriod;

 // updating the time every second

    //time();
    //update();
