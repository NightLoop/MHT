import { data_storage as ds} from "../dataStorage.js";
import { changePage, updatePage } from "../pageHandler.js";

export function menuPage(){
    const lang = ds.selectedLangJSON["menu"];

    const content = `
                    <div id="menu_content">
                        <a id="profile_btn" class="menuBtn">${lang["profileBtnText"]}</a>
                        <a id="cost_calc_btn" class="menuBtn">${lang["costCalcBtnText"]}</a>
                        <a id="vita_calc_btn" class="menuBtn">${lang["vitaCalcBtnText"]}</a>
                        <a id="vita_plan_btn" class="menuBtn">${lang["vitaPlanBtnText"]}</a>
                        <a id="lang_btn" class="menuBtn">${lang["langBtnText"]}</a>
                        <a id="about_btn" class="menuBtn">${lang["aboutBtnText"]}</a>
                    </div>
                    `;

    updatePage(lang["title"], content);
    enableMenuBtns();
}

function enableMenuBtns(){
    document.getElementById("profile_btn").addEventListener("click", () => {
        changePage("profile");
    });
    document.getElementById("cost_calc_btn").addEventListener("click", () => {
        changePage("cost_calc");
    });
    document.getElementById("vita_calc_btn").addEventListener("click", () => {
        changePage("vita_calc");
    });
    document.getElementById("vita_plan_btn").addEventListener("click", () => {
        changePage("vita_plan");
    });
    document.getElementById("lang_btn").addEventListener("click", () => {
        changePage("lang");
    });
    document.getElementById("about_btn").addEventListener("click", () => {
        changePage("about");
    });
}