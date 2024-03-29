import { data_storage as ds} from "./dataStorage.js";
import { aboutPage } from "./page/about.js";
import { costCalcPage } from "./page/costCalc.js";
import { menuPage } from "./page/menu.js";
import { newsPage } from "./page/news.js";
import { profilePage } from "./page/profile.js";
import { vitaCalcPage } from "./page/vitaCalc.js";

function pageRouting(){
    const pageRoute = {
        news : function(){
            newsPage();
        },
        profile: function(){
            profilePage();
        },
        cost_calc: function(){
            costCalcPage();
        },
        vita_calc: function(){
            vitaCalcPage();
        },
        menu : function(){
            menuPage();
        },
        about: function(){
            aboutPage();
        },
    }

    const targetPage = pageRoute[ds.currentPage];
    if(targetPage){
        targetPage.apply();
    }else{
        console.log(`cant find ${ds.currentPage}`);
    }

}

function changePage(page){
    ds.previousPage = ds.currentPage;
    ds.currentPage = page;

    if(ds.previousPage !== ds.currentPage){
        pageRouting();
    }
}

function updatePage(title, content){
    document.getElementById("main_title_text").innerHTML = title;
    document.getElementById("main_content_container").innerHTML = content;
}

export {changePage , updatePage};