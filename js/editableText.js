function setEditableText(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("click", function(){
            this.contentEditable = true;
            if(this.innerHTML === "0" || this.innerHTML === 0){
                this.innerHTML = "";
            }
            this.focus();
            this.style.color = "black";
        })

        target.addEventListener("blur", function(){
            this.contentEditable = false;
            this.style.color = "rgba(0, 0, 0, 0.300)";
        })

        target.addEventListener('keydown', function(event){
            if (event.key === 'Enter') {
              this.blur();
            }
          })
    })
}

function setBoolText(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("click", function(){
            this.contentEditable = true;
            this.focus();
            const currentValue = this.innerHTML;
            if(currentValue === "true"){
                this.innerHTML = "false";
                this.contentEditable = false;
                this.blur();
            }else if(currentValue === "false"){
                this.innerHTML = "true";
                this.contentEditable = false;
                this.blur();
            }else{
                this.innerHTML = "false";
                this.contentEditable = false;
                this.blur();
            }
        })
    })
}

export {setEditableText, setBoolText};