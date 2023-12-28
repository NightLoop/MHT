import { changePage } from "./pageHandler.js";

function enableMainNavBar(){
    MNBEventHandler(true);
}

function disableMainNavBar(){
    MNBEventHandler(false);
}

function MNBEventHandler(isEnable){
    if(isEnable === true){
        document.getElementById("main_nav_icon").addEventListener("click", iconBtnFunc);
        document.getElementById("main_nav_menu_btn").addEventListener("click", menuBtnFunc);
    }else{
        document.getElementById("main_nav_icon").removeEventListener("click", iconBtnFunc);
        document.getElementById("main_nav_menu_btn").removeEventListener("click", menuBtnFunc);
    }
}

function iconBtnFunc(){
    changePage("news");
}

function menuBtnFunc(){
    changePage("menu");
}

export {enableMainNavBar , disableMainNavBar};