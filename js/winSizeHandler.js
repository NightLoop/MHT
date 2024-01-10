import {data_storage as ds} from "./dataStorage.js";

//set background size to max screen
function setBackgroundSize(isHeightChange, isWidthChange){
    if(isHeightChange){
        document.body.style.height = `${window.innerHeight}px`;
        ds.winHeight = document.body.style.height;
    }
    if(isWidthChange){
        document.body.style.width = `${window.innerWidth}px`;
        ds.winWidth = document.body.style.width;
    }
    setWorkspaceSize();
}

//set workspace to 16:9
function setWorkspaceSize(){
    const height = parseFloat(ds.winHeight);
    const width = parseFloat(ds.winWidth);
    const target = document.getElementById("main_container");

    target.style.minWidth = "320px";

    //check is current aspect 16:9
    if(Math.abs(height / width - 9 / 16) < 0){
        target.style.height = `${height}px`;
        target.style.width = `${width}px`;
    }else{
        if(parseFloat(height / 16) > parseFloat(width / 9)){
            target.style.height = `${width / 9 * 16}px`;
            target.style.width = `${width}px`;
        }else{
            target.style.height = `${height}px`;
            target.style.width = `${height / 16 * 9}px`
        }
    }
}

//compare is size modified
function winSizeCheck(){
    let isHeightChange = false;
    let isWidthChange = false;
    if(window.innerHeight !== ds.winHeight){
        isHeightChange = true;
    }
    if(window.innerWidth !== ds.winWidth){
        isWidthChange = true;
    }
    if(isHeightChange === true || isWidthChange === true){
        setBackgroundSize(isHeightChange, isWidthChange);
    }
}
//resize event
function enableWinResizeEvent(){
    window.addEventListener('resize', winSizeCheck);
    window.addEventListener('load', winSizeCheck);
}

export {winSizeCheck , enableWinResizeEvent};