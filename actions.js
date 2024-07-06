
import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sound from "./sound.js"



export function toggleRunning(){
   state.isRunning = document.documentElement.classList.toggle("running")
   
   timer.countDown()
   sound.buttonPressAudio.play()
   sound.kitchenTime.play()
}

export function reset(){
   state.isRunning = false 
   document.documentElement.classList.remove("running")
   timer.updateDisplay()
   sound.buttonPressAudio.play()
   sound.kitchenTime.pause()
}

export function set(){
   el.minutes.setAttribute("contenteditable", true)
   el.minutes.focus()
   
}

export function toggleMusic(){
   
   state.isMute = document.documentElement.classList.toggle("music-on")
   console.log(state)
   if(state.isMute){
      sound.bgAudio.pause()
      
      return
   }
      sound.bdAudio.play()
   
  
}

