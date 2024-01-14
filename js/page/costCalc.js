import { ccEvent, initialCC } from "../cc.js";
import { data_storage as ds, uploadDataEventDistributor } from "../dataStorage.js";
import { setEditableText } from "../editableText.js";
import { setNumLimit } from "../numLimiter.js";
import { numBtnEventDistributor } from "../numberBtnHandler.js";
import { updatePage } from "../pageHandler.js";

function costCalcPage(){
    const lang = ds.selectedLangJSON["costCalc"];

    const content = `
                    <div id="cost_calc_content">
                        <div id="cost_calc_panel">
                            <div id="ma_diff_bar" class="maInputBar">
                                <p>${lang["maDiffText"]}</p>
                                <a class="plusBtn" target="ma_diff" step="0.1"> + </a>
                                <p id="ma_diff" class="maInputDisplay  maFloatInput" min="1" max="2" dataStorage="ma_diff">${ds.ma_diff}</p>
                                <a class="minusBtn" target="ma_diff" step="0.1"> - </a>
                            </div>
                            <div id="start_level_bar" class="maInputBar">
                                <p>${lang["startLevelText"]}</p>
                                <a class="plusBtn" target="ma_start_level" step="1"> + </a>
                                <p id="ma_start_level" class="maInputDisplay maIntInput" min="1" max="600" dataStorage="ma_start_level">${ds.ma_start_level}</p>
                                <a class="minusBtn" target="ma_start_level" step="1"> - </a>
                            </div>
                            <div id="end_level_bar" class="maInputBar">
                                <p>${lang["endLevelText"]}</p>
                                <a class="plusBtn" target="ma_end_level" step="1"> + </a>
                                <p id="ma_end_level" class="maInputDisplay  maIntInput" min="1" max="600" dataStorage="ma_end_level">${ds.ma_end_level}</p>
                                <a class="minusBtn" target="ma_end_level" step="1"> - </a>
                            </div>
                            <div id="cost_summary_panel">
                                <div id="exp_cost_bar" class="costSummaryBar">
                                    <p>${lang["expCostText"]}</p>
                                    <p id="ma_exp_cost_display">${ds.ma_exp_cost}</p>
                                </div>
                                <div id="practice_cost_bar" class="costSummaryBar">
                                    <p>${lang["practiceCostText"]}</p>
                                    <p id="ma_train_cost_display">${ds.ma_train_cost}</p>
                                </div>
                                <div id="tael_cost_bar" class="costSummaryBar">
                                    <p>${lang["taelCostText"]}</p>
                                    <p id="ma_tael_cost_display">${ds.ma_tael_cost}</p>
                                </div>
                            </div>
                        </div>

                        <div id="profile_stats_display">
                            <div>
                                <p>${ds.selectedLangJSON["profile"]["ascExpText"]}</p>
                                <p>${ds.pf_exp_reduct}</p>
                            </div>
                            <div>
                                <p>${ds.selectedLangJSON["profile"]["intText"]}</p>
                                <p>${ds.pf_int}</p>
                            </div>
                        </div>

                        <div id="cost_list_panel">
                        </div>

                        <div id="cost_list_display">
                            <p>${lang.totalExpCost}</p>
                            <p id="addTOListBtn">+</p>
                            <p id="ma_list_total_cost">${ds.ma_cost_list_total_cost}</p>
                        </div>
                    </div>
                    `;

    updatePage(lang["title"], content);
    setEditableText(".maInputDisplay");
    setNumLimit(".maIntInput", "int");
    setNumLimit(".maFloatInput", "float");
    uploadDataEventDistributor(".maInputDisplay");
    ccEvent(".maInputDisplay");
    numBtnEventDistributor(".plusBtn", true);
    numBtnEventDistributor(".minusBtn", false);
    document.getElementById("addTOListBtn").addEventListener("click", addTOList);
    document.getElementById("cost_list_panel").innerHTML = pushList2HTML();
    updateTotalCost2HTML;
    listRemoveBtnEvent();
    initialCC();
}

function addTOList(){
    const startLevel = ds.ma_start_level;
    const endLevel = ds.ma_end_level;
    const diff = ds.ma_diff;
    const expCost = ds.ma_exp_cost;

    const listID = `ID${ds.ma_cost_list.length}`;

    const content = `
                    <div>
                        <p>${ds.selectedLangJSON["costCalc"]["startLevelText"]}</p>
                        <p>${startLevel}</p>
                        <p>${ds.selectedLangJSON["costCalc"]["endLevelText"]}</p>
                        <p>${endLevel}</p>
                        <p>${ds.selectedLangJSON["costCalc"]["maDiffText"]}</p>
                        <p>${diff}</p>
                        <p>${ds.selectedLangJSON["costCalc"]["expCostText"]}</p>
                        <p class="listIndividualCost">${expCost}</p>
                        <a class="listRemoveBtn" listID="${listID}">-</a>
                    </div>
                    `;

    ds.ma_cost_list.push({[listID] : content});
    document.getElementById("cost_list_panel").innerHTML = pushList2HTML();
    updateTotalCost2HTML();
    listRemoveBtnEvent();
}

function listRemoveBtnEvent(){
    const list = document.querySelectorAll(".listRemoveBtn");
    
    list.forEach(target => {
        target.addEventListener("click", function(event){
            const index = ds.ma_cost_list.findIndex(obj => event.target.getAttribute("listID") in obj);
            if(index > -1){
                ds.ma_cost_list.splice(index, 1);
            }
            event.target.parentElement.remove();
            updateTotalCost2HTML();
        });
    });
}

function pushList2HTML(){
    let htmlContent = "";

    for (const listItem of ds.ma_cost_list){
        for (const value in listItem){
            htmlContent += listItem[value];
        }
    }

    return htmlContent;
}

function updateTotalCost2HTML(){
    let totalCost = 0;

    const targetList = document.getElementsByClassName("listIndividualCost");
    for (const target of targetList){
        totalCost += parseFloat(target.innerHTML);
    }

    ds.ma_cost_list_total_cost = totalCost;
    document.getElementById("ma_list_total_cost").innerHTML = ds.ma_cost_list_total_cost;
}

export { costCalcPage };