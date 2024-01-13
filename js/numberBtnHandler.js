import { initialCC } from "./cc.js";
import { data_storage as ds} from "./dataStorage.js";

function numberBtnHandler(isPlus, event){
    const targetId = event.target.getAttribute("target");
    const step = parseFloat(event.target.getAttribute("step"));
    const min = parseFloat(document.getElementById(targetId).getAttribute("min"));
    const max = parseFloat(document.getElementById(targetId).getAttribute("max"));
    const dataLoc = document.getElementById(targetId).getAttribute("dataStorage");
    const currentValue = parseFloat(ds[dataLoc]);

    if(isPlus === true){
        if(currentValue < max){
            const newValue = (currentValue + step).toFixed(2);
            ds[dataLoc] = parseFloat(newValue);
            document.getElementById(targetId).innerHTML = ds[dataLoc];
        }
    }else if(isPlus === false){
        if(currentValue > min){
            const newValue = (currentValue - step).toFixed(2);
            ds[dataLoc] = parseFloat(newValue);
            document.getElementById(targetId).innerHTML = ds[dataLoc];
        }
    }
}

function numBtnEventDistributor(className, isPlus){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("mousedown", function(event){
            toggleInterval(event, true, isPlus);
        });
        target.addEventListener("mouseup", function(event){
            toggleInterval(event, false);
        });
        target.addEventListener("touchstart", function(event){
            toggleInterval(event, true, isPlus);
        });
        target.addEventListener("touchend", function(event){
            toggleInterval(event, false);
        });
    });
}

function numBtnToggle(isPlus, target){
    numberBtnHandler(isPlus, target);
    initialCC();
}

function toggleInterval(event, isStart, isPlus){

    if(isStart === true){
        numBtnToggle(isPlus, event);
        if(ds.ma_intervalID === null){
            ds.ma_intervalID = setInterval(() => numBtnToggle(isPlus, event), 100);
        }
    }else{
        clearInterval(ds.ma_intervalID);
        ds.ma_intervalID = null;
    }
}

export { numBtnEventDistributor };