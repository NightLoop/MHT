function numLimiter(input,min,max){
    const floatInput = parseFloat(input);

    if(floatInput >= min && floatInput <= max){
        return floatInput;
    }else if(floatInput < min){
        return min;
    }else if(floatInput > max){
        return max;
    }else{
        return 0;
    }
}

function setNumLimit(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("blur", function(){
            const min = this.getAttribute("min");
            const max = this.getAttribute("max");
            const value = this.innerHTML;

            this.innerHTML = numLimiter(value, min, max);
        })
    })
}

export {setNumLimit};