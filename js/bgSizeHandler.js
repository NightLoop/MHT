function setBodySize(isHeightChange, isWidthChange){
    if(isHeightChange){
        document.body.style.height = `${window.innerHeight}px`;
    }
    if(isWidthChange){
        document.body.style.width = `${window.innerWidth}px`;
    }
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

function updateBgSize(){
    let isHeightChange = false;
    let isWidthChange = false;

    if(parseFloat(document.body.style.height) !== parseFloat(window.innerHeight)){
        isHeightChange = true;
        console.log("updating height");
    }
    if(parseFloat(document.body.style.width) !== parseFloat(window.innerWidth)){
        isWidthChange = true;
        console.log("updating width");

    }

    setBodySize(isHeightChange, isWidthChange);
    setMainSize();
}

//auto update when resize
function enableBgSizeEvent(){
    window.addEventListener('resize', updateBgSize);
    window.addEventListener('load', updateBgSize);
}

function initialBgSize(){
    setBodySize(true, true);
    setMainSize();
    enableBgSizeEvent();
}

initialBgSize();