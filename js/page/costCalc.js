import { ccEvent } from "../cc.js";
import { data_storage as ds, uploadDataEventDistributor } from "../dataStorage.js";
import { setEditableText } from "../editableText.js";
import { setNumLimit } from "../numLimiter.js";
import { updatePage } from "../pageHandler.js";

function costCalcPage(){
    const lang = ds.selectedLangJSON["costCalc"];

    const content = `
                    <div id="cost_calc_content">
                        <div id="cost_calc_panel">
                            <div id="ma_diff_bar" class="maInputBar">
                                <p>${lang["maDiffText"]}</p>
                                <a class="plusBtn"> + </a>
                                <p class="maInputDisplay  maFloatInput" min="1" max="2" dataStorage="ma_diff">${ds.ma_diff}</p>
                                <a class="minusBtn"> - </a>
                            </div>
                            <div id="start_level_bar" class="maInputBar">
                                <p>${lang["startLevelText"]}</p>
                                <a class="plusBtn"> + </a>
                                <p class="maInputDisplay maIntInput" min="1" max="600" dataStorage="ma_start_level">${ds.ma_start_level}</p>
                                <a class="minusBtn"> - </a>
                            </div>
                            <div id="end_level_bar" class="maInputBar">
                                <p>${lang["endLevelText"]}</p>
                                <a class="plusBtn"> + </a>
                                <p class="maInputDisplay  maIntInput" min="1" max="600" dataStorage="ma_end_level">${ds.ma_end_level}</p>
                                <a class="minusBtn"> - </a>
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
                                <div id="time_cost_bar" class="costSummaryBar">
                                    <p>${lang["timeCostText"]}</p>
                                    <p id="ma_train_time_display">${ds.ma_train_time}</p>
                                </div>
                            </div>
                        </div>
                        <div id="cost_list_panel">

                        </div>
                    </div>
                    `;

    updatePage(lang["title"], content);
    setEditableText(".maInputDisplay");
    setNumLimit(".maIntInput", "int");
    setNumLimit(".maFloatInput", "float");
    uploadDataEventDistributor(".maInputDisplay");
    ccEvent(".maInputDisplay");
}

export { costCalcPage };