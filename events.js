import state from "./state.js"
import {controls} from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import {updateDisplay} from "./timer.js"

export function registerControls(){
   controls.addEventListener("click", e =>{
      const action = e.target.dataset.action
      if(typeof actions[action] != "function"){
         return
      }
      
      actions[action]()
      
   })
}

export function setMinutes(){
   el.minutes.addEventListener("focus", ()=>{
      el.minutes.textContent = ""
   })
   el.minutes.addEventListener("keypress", (e) => {
      /\d/.test(e.key)
   })
   el.minutes.addEventListener("blur", (e)=>{
      let time = event.currentTarget.textContent
      time = time > 60 ? 60 : time
      
      state.minutes = time 
      state.seconds = 0 
      
      updateDisplay()
      el.mimutes.removeAttribute("contenteditable")
   })
   
}