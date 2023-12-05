import { setToMenuPage } from "./page/menu.js";
import { setToNewsPage } from "./page/news.js";

export function updatePage(title, content){
    document.getElementById("main_title").innerHTML = title;
    document.getElementById("main_content_container").innerHTML = content;
}

const pageStateMachine = {
    currentPage: "news",
    historyPage: "",
    pageRouting: {
        news: {
            loadPage : function() {
                setToNewsPage();
            }
        },
        menu: {
            loadPage : function() {
                setToMenuPage();
            }
        },
        profile: {
            loadPage : function() {
                
            }
        },
        about: {
            loadPage : function() {
                
            }
        },
    },
    callPage(pageName, actionName, ...payload){
        this.changePage(pageName);
        const targetPage = this.pageRouting[this.currentPage];

        if(targetPage){
            const action = this.pageRouting[this.currentPage][actionName];
            
            if(action){
                action.apply(this, ...payload);
            }else{
    
            }

        }else{
            console.log(`cant find ${pageName}`);
        }


    },
    changePage(pageName){
        this.historyPage = this.currentPage;
        this.currentPage = pageName;
    },
}

export let pageManament = Object.create(pageStateMachine);