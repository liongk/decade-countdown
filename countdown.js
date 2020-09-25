const newDecade = '1 Jan 2030'

function countdown(){
    const countdownDate = new Date(newDecade)
    const currentDate = new Date()

    var timeleft = countdownDate - currentDate; //(in ms)

    var years = Math.floor(timeleft/(1000*60*60*24*365));

    var days = Math.floor((timeleft%(1000*60*60*24*365))/(1000*60*60*24));
    //remainding time in days

    var hours = Math.floor((timeleft%(1000*60*60*24))/(1000*60*60));
    //time left after year and day divison, in hours

    var minutes = Math.floor((timeleft%(1000*60*60))/(1000*60));

    document.getElementById('years').innerHTML = years
    document.getElementById('days').innerHTML = days
    document.getElementById('hours').innerHTML = hours
    document.getElementById('min').innerHTML = minutes

}

countdown()

setInterval(countdown, 1000)
