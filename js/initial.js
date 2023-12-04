import { createTimer } from "./timer.js"
import { updatePage } from "./pageHandler.js"
import { enableMainNav, disableMainNav } from "./mainNavBar.js";
import { setToNewsPage } from "./page/news.js";

async function initialPage(){
    let title = "Loading...";
    let content = "";

    const srcList = {
        "../pic/" : ["icon.ico", "icon.png"],
        "../js/" : ["bgSizeHandler.js", "pageHandler.js", "timer.js"],
        "../js/page/" : ["news.js"],
        "../css/" : ["background.css", "mainContainer.css", "util.css"]
    };

    const compountedSrcList = [];

    for (const list in srcList){
        for (const file of srcList[list]){
            compountedSrcList.push(`${list}${file}`);
        }
    }

    let failLoad = 0;

    for (const file of compountedSrcList){
        const response = await fetch(file);
        if(response.ok){
            console.log(`${file.split("/")[2]} is loaded successfully`);
        }else{
            console.log(`${file.split("/")[2]} has failed to load`);
            failLoad += 1;
        }
    }
    
    if(failLoad == 0){
        document.getElementById("main_container").style.display = "grid";
        enableMainNav();
        setToNewsPage();
    }


}

initialPage();