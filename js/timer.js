export function createTimer(hour,min,sec,updateFequancyInSec,callingFunction){
    const currentTime = Date.now();
    const targetMillisec = timeToMillisec(hour,min,sec);
    const target = currentTime + targetMillisec;
    const updateSpeed = updateFequancyInSec * 1000;

    const timer = setInterval(() => {
        const currentTime = Date.now();
        console.log(currentTime >= target);
        if(currentTime >= target){
            clearInterval(timer);
            callingFunction();
            return;
        }
    }, updateSpeed);
}

function timeToMillisec(hour,min,sec){
    const time = ( hour * Math.pow( 60 , 2 ) + min * 60 + sec ) * 1000;
    return time;
}