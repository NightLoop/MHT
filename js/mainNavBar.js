import { setToMenuPage } from "./page/menu.js";
import { setToNewsPage } from "./page/news.js";

export function enableMainNav(){
    mainNavBtnHandler(true);
}

export function disableMainNav(){
    mainNavBtnHandler(false);
}

function mainNavBtnHandler(isEnable){
    if(isEnable === true){
        document.getElementById("main_nav_icon").addEventListener("click", iconBtnFunction);
        document.getElementById("main_nav_menu_btn").addEventListener("click", menuBtnFunction);
    }else{
        document.getElementById("main_nav_icon").removeEventListener("click", iconBtnFunction);
        document.getElementById("main_nav_menu_btn").removeEventListener("click", menuBtnFunction);
    }
}

function iconBtnFunction(event){
    setToNewsPage();
}

function menuBtnFunction(event){
    setToMenuPage();
}