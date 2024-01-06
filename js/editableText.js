function setEditableText(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("click", function(){
            this.contentEditable = true;
            this.focus();
            this.style.color = "black";
        })

        target.addEventListener("blur", function(){
            this.contentEditable = false;
            this.style.color = "rgba(0, 0, 0, 0.300)";
        })
    })
}

export {setEditableText};