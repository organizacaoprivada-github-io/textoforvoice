(()=>{class UndoRedojs{constructor(cooldown){if(!cooldown||isNaN(cooldown)||cooldown<=0)this.cooldown=1
else this.cooldown=cooldown
this.stack=['']
this.currentIndex=0
this.cooldownState=0}
record(data,force){if(this.currentIndex===this.stack.length-1){if((this.cooldownState>=this.cooldown||this.cooldownState===0)&&force!==true){this.stack.push(data)
this.currentIndex++
this.cooldownState=1}else if(this.cooldownState<this.cooldown&&force!==true){this.current(data)
this.cooldownState++}else if(force===true){this.stack.push(data)
this.currentIndex++
this.cooldownState=this.cooldown}}else if(this.currentIndex<this.stack.length-1){if(force!==true){this.stack.length=this.currentIndex+1
this.stack.push(data)
this.currentIndex++
this.cooldownState=1}else if(force===true){this.stack.length=this.currentIndex+1
this.stack.push(data)
this.currentIndex++
this.cooldownState=this.cooldown}}}
undo(readOnly){if(this.currentIndex>0){if(readOnly!==true){this.currentIndex--
return this.stack[this.currentIndex]}else{return this.stack[this.currentIndex-1]}}}
redo(readOnly){if(this.currentIndex<this.stack.length-1){if(readOnly!==true){this.currentIndex++
return this.stack[this.currentIndex]}else{return this.stack[this.currentIndex+1]}}}
current(data){if(data)this.stack[this.currentIndex]=data
return this.stack[this.currentIndex]}}
if(typeof module!=='undefined'&&typeof module.exports!=='undefined'){module.exports=UndoRedojs}
if(typeof window==='object'){window.UndoRedojs=UndoRedojs}})()