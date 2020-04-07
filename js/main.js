'use strict';
{
  const timerMin = document.getElementById('timerMin');
  const timerSec = document.getElementById('timerSec');

  const stop = document.getElementById('stop');
  const start = document.getElementById('start');
  const reset = document.getElementById('reset');


  start.addEventListener('click',()=>{
   let intervalID = window.setInterval(Callback,1000);
    //一秒ごとにCallbackを呼び出して処理をしてもらう
    
    let sec = parseInt(timerSec.value, 10);
    let min = parseInt(timerMin.value, 10);
      //parseIntは文字列を整数の10進数に変換する 
    
    function Callback(){
  
     if (sec == 0){
      min--;
      sec = 59;
     } else {
      sec--;
     }
      if (sec == 0 && min == 0){
        clearInterval(intervalID);
        //intervalIDをキャンセルする
      }
      
      timerSec.value = String(sec);
      timerMin.value = String(min);
    }
    
    stop.addEventListener('click',()=>{
      clearInterval(intervalID);
    });
  
    reset.addEventListener('click',()=>{
      clearInterval(intervalID);
      
      timerSec.value = '';
      timerMin.value = '';
  
    });
  });
  
}
