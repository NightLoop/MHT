function numLimiter(input,min,max, FloatOrInt){
    const floatInput = parseFloat(input);

    if(FloatOrInt == "float"){
        if(floatInput >= min && floatInput <= max){
            return floatInput;
        }else if(floatInput < min){
            return min;
        }else if(floatInput > max){
            return max;
        }else{
            return 0;
        }
    }else if(FloatOrInt == "int"){
        if(floatInput >= min && floatInput <= max){
            return parseInt(floatInput);
        }else if(floatInput < min){
            return min;
        }else if(floatInput > max){
            return max;
        }else{
            return 0;
        }
    }
}

function setNumLimit(className, FloatOrInt){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("blur", function(){
            const min = this.getAttribute("min");
            const max = this.getAttribute("max");
            const value = this.innerHTML;

            this.innerHTML = numLimiter(value, min, max, FloatOrInt);
        })
    })
}

export {setNumLimit};