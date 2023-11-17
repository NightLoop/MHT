function setBodySize(){
    document.body.style.height = `${window.innerHeight}px`;
    document.body.style.width = `${window.innerWidth}px`;
}

function setMainSize(){
    const height = parseFloat(document.body.style.height);
    const width = parseFloat(document.body.style.width);
    const target = document.getElementById("main_container");

    target.style.minWidth = "320px";

    //check is current aspect 16:9
    if(Math.abs(height / width - 9 / 16) < 0.01){
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

//backup plan if window size not set to max view
setBodySize();
//resize screen to 16:9
setMainSize();

//auto update when resize
window.addEventListener('resize', setBodySize);
window.addEventListener('resize', setMainSize);
window.addEventListener('load', setBodySize);
window.addEventListener('load', setMainSize);