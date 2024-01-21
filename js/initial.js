import { data_storage as ds} from "./dataStorage.js";
import { setLang } from "./langHandler.js";
import { winSizeCheck , enableWinResizeEvent as enableWinResize} from "./winSizeHandler.js";
import fileCheck from "./fileChecker.js";
import { enableMainNavBar } from "./navBar.js";
import { changePage } from "./pageHandler.js";

async function initial(){
    const {isLoadingSuccess , langData} = await fileCheck;
    
    if (isLoadingSuccess === true){
        if(langData !== null){
            ds.langJSON = langData;
        }
        winSizeCheck();
        enableWinResize();

        setLang(ds.lang);

        document.getElementById("loading").style.display = "none";
        document.getElementById("main_container").style.display = "grid";

        document.getElementById("main_nav_text").innerHTML = ds.selectedLangJSON["webTitle"];
        enableMainNavBar();
        changePage("news");
    }else{
        window.location.href = "../404.html";
    }

}

initial();