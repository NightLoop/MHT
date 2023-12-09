import { pageManament, updatePage } from "../pageHandler.js";

export function setToMenuPage(){
    const title = "Menu";
    const content = `
                    <div id="menu_content">
                        <a id="profile_btn" class="menuBtn">Profile</a>
                        <a id="cost_calc_btn" class="menuBtn">Cost Calculator</a>
                        <a id="vita_calc_btn" class="menuBtn">Vitalia Calculator</a>
                        <a id="vita_plan_btn" class="menuBtn">Vitalia Planner</a>
                        <a id="lang_btn" class="menuBtn">Language</a>
                        <a id="about_btn" class="menuBtn">About</a>
                    </div>
                    `;

    updatePage(title, content);
    enableMenuBtns();
}

function enableMenuBtns(){
    document.getElementById("profile_btn").addEventListener("click", () => {
        pageManament.callPage("profile", "loadPage");
    });
    document.getElementById("cost_calc_btn").addEventListener("click", () => {
        pageManament.callPage("costCalc", "loadPage");
    });
    document.getElementById("vita_calc_btn").addEventListener("click", () => {
        pageManament.callPage("vitaCalc", "loadPage");
    });
    document.getElementById("vita_plan_btn").addEventListener("click", () => {
        pageManament.callPage("vitaPlan", "loadPage");
    });
    document.getElementById("lang_btn").addEventListener("click", () => {
        pageManament.callPage("lang", "loadPage");
    });
    document.getElementById("about_btn").addEventListener("click", () => {
        pageManament.callPage("about", "loadPage");
    });
}