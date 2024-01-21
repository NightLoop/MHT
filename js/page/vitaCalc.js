import { data_storage as ds} from "../dataStorage.js";
import { updatePage } from "../pageHandler.js";
import { vitaPanel } from "../vitaMaPanel.js";

function vitaCalcPage(){
    const lang = ds.selectedLangJSON["vitaCalc"];

    const content = `
                    <div id="vita_calc_content">
                        <div id="vita_ma_section">
                            <div id="unarmed_section" class="vitaMaSectionBar">
                                <p>${lang["unarmedTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_unarmed_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_unarmed}</p>
                                </div>
                            </div>
                            <div id="blade_section" class="vitaMaSectionBar">
                                <p>${lang["bladeTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_blade_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_blade}</p>
                                </div>
                            </div>
                            <div id="sword_section" class="vitaMaSectionBar">
                                <p>${lang["swordTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_sword_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_sword}</p>
                                </div>
                            </div>
                            <div id="staff_section" class="vitaMaSectionBar">
                                <p>${lang["staffTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_staff_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_staff}</p>
                                </div>
                            </div>
                            <div id="whip_section" class="vitaMaSectionBar">
                                <p>${lang["whipTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_whip_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_whip}</p>
                                </div>
                            </div>
                            <div id="throw_section" class="vitaMaSectionBar">
                                <p>${lang["throwTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_throw_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_throw}</p>
                                </div>
                            </div>
                            <div id="levi_section" class="vitaMaSectionBar">
                                <p>${lang["leviTitle"]}</p>
                                <div></div>
                                <div>
                                    <p>${lang["totalVitaText"]}</p>
                                    <p id="vita_levi_btn" class="vitaMaAddBtn">+</p>
                                    <p>${ds.vita_total_levi}</p>
                                </div>
                            </div>
                        </div>
                        <div id="vita_ma_display">
                        </div>
                        <div id="ma_selection_panel">
                        </div>
                    </div>
                    `;

    updatePage(lang["title"], content);
    vitaPanelEvent(".vitaMaAddBtn");
}

function vitaPanelEvent(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        const type = target.id.split("_")[1];
        target.addEventListener("click", function(){vitaPanel(type);});
    })
}

export { vitaCalcPage };