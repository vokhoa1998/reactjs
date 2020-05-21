const inputs = document.querySelectorAll('.input');
const funcFocus = function(){
   let parent = this.parentNode.parentNode;
   parent.classList.add('focus')
}
const funcBlur = function(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
}
inputs.forEach(
   input =>{
       input.addEventListener("focus",funcFocus);
       input.addEventListener("blur",funcBlur);
   }
)
   

