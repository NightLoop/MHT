import { data_storage as ds} from "../dataStorage.js";
import { changePage, updatePage } from "../pageHandler.js";

function newsPage(){
    const lang = ds.selectedLangJSON["news"];

    const content = `
                    <div id="news_content">
                    
                        <p>${lang["information1"]}</p>
                        <p>${lang["information2"]}</p>
                        <p>${lang["toMenuGuide"]}</p>
                    
                        <a id="news_to_menu_btn" style="text-align:center;" ><b>${lang["menuBtnText"]}</b></a>

                        <p style="text-align:center;">
                        ${lang["updateListHeader"]}
                        </p>

                        <p style="text-align:center;"><b><u>v4.1b</u></b></p>
                        ${lang["v4.1b"]}

                        <p style="text-align:center;"><b><u>v4.0b</u></b></p>
                        ${lang["v4.0b"]}
                    
                        <p style="text-align:center;"><b><u>v3.9b</u></b></p>
                        ${lang["v3.9b"]}

                        <p style="text-align:center;"><b><u>v3.8b</u></b></p>
                        ${lang["v3.8b"]}

                        <p style="text-align:center;"><b><u>v3.7b</u></b></p>
                        ${lang["v3.7b"]}

                        <p style="text-align:center;"><b><u>v3.5b</u></b></p>
                        ${lang["v3.5b"]}
                    
                        <p style="text-align:center;"><b><u>v3.1b</u></b></p>
                        ${lang["v3.1b"]}
                    
                        <p style="text-align:center;"><b><u>v3.0b</u></b></p>
                        ${lang["v3.0b"]}
                    
                        <p style="text-align:center;"><b><u>v2.5b</u></b></p>
                        ${lang["v2.5b"]}
                    
                        <p style="text-align:center;"><b><u>v2.3b</u></b></p>
                        ${lang["v2.3b"]}
                    
                        <p style="text-align:center;"><b><u>v2.0b</u></b></p>
                        ${lang["v2.0b"]}
                    
                        <p style="text-align:center;"><b><u>v1.2b</u></b></p>
                        ${lang["v1.2b"]}
                    
                        <p style="text-align:center;"><b><u>V1.0b</u></b></p>
                        ${lang["v1.0b"]}

                        <p style="text-align:center;"><b><u>Beta</u></b></p>
                        ${lang["Beta"]}
                    
                        <p style="text-align:center;"><b><u>Alpha</u></b></p>
                        ${lang["Alpha"]}
                    
                        <p><br/><br/></p>

                        <p style="text-align:center;">${lang["pageEnd"]}</p>
                    </div>
                    `;

    updatePage(lang["title"],content);
    enableNewsToMenuBtn();
}

function enableNewsToMenuBtn(){
    document.getElementById("news_to_menu_btn").addEventListener("click", () => {
        changePage("menu");
    });
}

export {newsPage};