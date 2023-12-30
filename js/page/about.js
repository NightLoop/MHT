import { updatePage } from "../pageHandler.js";
import { data_storage as ds } from "../dataStorage.js";

function aboutPage(){
    const lang = ds.selectedLangJSON["about"];

    const content = `
                <p style="text-align:center;"><b><u>Author / 作者</u></b></p>
                <p style="text-align:center;">${lang["author"]}</p>
                <p style="text-align:center;"><b><u>Technical Support / 技术辅助</u></b></p>
                <p style="text-align:center;">${lang["mathSupport"]}</p>
                <p style="text-align:center;"><b><u>Special Thanks / 特别感谢</u></b></p>
                <p style="text-align:center;">${lang["specialThanks"]}</p>
                    `;

    updatePage(lang["title"], content);
}

export {aboutPage};