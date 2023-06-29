let stop= document.querySelector(".stop");
let progressBar= document.querySelector(".ProgressBar");
let countdown= document.querySelector(".countdown")
let add =document.querySelector(".add")
let startMinutes= 2
let startTime= startMinutes*60

let time= startMinutes*60

const updateCounter= ()=>{

        if (time == 0){
            intervalManager(false)
            intervalId=0
        }

        let minutes = Math.floor(time/60)
        let seconds= time%60
        seconds = seconds<10? "0"+seconds  : seconds
        minutes = minutes<10? "0"+minutes : minutes

        countdown.innerHTML= `${minutes}:${seconds}`

        let progress=   (time/startTime)*100

        progressBar.style.background= `conic-gradient(
            #4d5bf9 ${progress*3.6}deg,
            #cadcff ${progress*3.6}deg  
        )`
        time--
    }

let intervalId =0
    const intervalManager= (flag)=>{
        if (flag){
            intervalId= setInterval(updateCounter,1000)

        } 
        else{
            clearInterval(intervalId)
        }
    }




stop.addEventListener("click",function(){
    time=0
    progressBar.style.background= `conic-gradient(
        #4d5bf9 ${0*3.6}deg,
        #cadcff ${0*3.6}deg  
    )`
})

add.addEventListener("click",function(){
    time= time+10
    startTime=time
    if (intervalId==0){
    intervalManager(true)}
    
})
intervalManager(true);





