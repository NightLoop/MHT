import { createTimer } from "./timer.js"
import { updatePage } from "./pageHandler.js"

function initialPage(){
    let title = "Loading...";
    let content = "";

    const srcList = {
        "../pic/" : ["icon.ico", "icon.png"],
        "../js/" : ["bgSizeHandler.js", "news.js", "pageHandler.js", "timer.js"],
        "../css/" : ["background.css", "mainContainer.css", "util.css"]
    };

    for (const list in srcList){
        for (const file of srcList[list]){
            fetch(`${srcList[list]}${file}`)
            .then(() => {content += `${file} loaded <br>`})
            .catch((() => {content += `${file} not found <br>`}))
            .then(() => {updatePage(title, content)})
        }
    }
}

initialPage();