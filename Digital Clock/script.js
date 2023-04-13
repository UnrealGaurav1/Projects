function displayTime(){
    let dateTime = new Date()
    let hrs = dateTime.getHours()
    let mins = dateTime.getMinutes()
    let secs = dateTime.getSeconds()
    let session = document.getElementById('session')


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = mins;
    document.getElementById('seconds').innerHTML = secs;



    if(hrs >= 12){
        session.innerHTML = 'PM'
    }else{
        session.innerHTML = 'AM'
    }
    
    if(hrs > 12){
        hrs -= 12
    }
}
setInterval(displayTime, 1000)


