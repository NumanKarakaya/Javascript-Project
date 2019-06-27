 function displayTime(){
var currentTime=new Date();
var hours=currentTime.getHours();
var minutes=currentTime.getMinutes();
var seconds=currentTime.getSeconds();
var clockdiv=document.getElementById('clock');
setTimeout("displayTime()", 1000);
clockdiv.innerText=hours+":"+minutes+":"+seconds;

    }
  
    

    displayTime();