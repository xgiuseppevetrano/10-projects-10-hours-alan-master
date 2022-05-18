const secHTML = document.querySelector(".sec span")
const minHTML = document.querySelector(".minutes span") 
const hourHTML = document.querySelector(".hours span") 
const dayHTML = document.querySelector(".days span") 

secHTML.innerHTML = 60

const capodanno = new Date("january 01, 2023 00:00:00")
const today = new Date();

let diff = capodanno-today;

// let day = Math.floor(diff/(1000*60*60*24))
// let hour = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
// let minute = Math.floor((diff%(1000*60*60))/(1000*60))
// let second = Math.floor((diff%(1000*60))/(1000))







const timer = setInterval(function(){
    diff-=1000
    let day = Math.floor(diff/(1000*60*60*24))
    if(day.toString().length<2){
        dayHTML.innerHTML = `0${day}`
    }else {
        dayHTML.innerHTML = day
    }
    let hour = Math.floor((diff%(1000*60*60*24))/(1000*60*60))
    if(hour.toString().length<2){
        hourHTML.innerHTML = `0${hour}`
    }else {
        hourHTML.innerHTML = hour
    }    
    let minute = Math.floor((diff%(1000*60*60))/(1000*60))
    if(minute.toString().length<2){
        minHTML.innerHTML = `0${minute}`
    }else {
        minHTML.innerHTML = minute
    } 
    let second = Math.floor((diff%(1000*60))/(1000))
    if(second.toString().length<2){
        secHTML.innerHTML = `0${second}`
    }else {
        secHTML.innerHTML = second
    } 
   //console.log(diff,"giorni", day ,"ore", hour,"minute", minute,"second", second)
},1000)

