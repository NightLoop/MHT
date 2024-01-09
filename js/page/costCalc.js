import { data_storage as ds } from "../dataStorage.js";
import { updatePage } from "../pageHandler.js";

function costCalcPage(){
    const lang = ds.selectedLangJSON["costCalc"];

    const content = `
                    <div id="cost_calc_content">
                        <div id="cost_calc_panel">
                            <div id="ma_diff_bar">
                                <p>${lang["maDiffText"]}</p>
                                <a class="plusBtn"> + </a>
                                <p id="ma_diff_input">${ds.ma_diff}</p>
                                <a class="minusBtn"> - </a>
                            </div>
                            <div id="start_level_bar">
                                <p>${lang["startLevelText"]}</p>
                                <a class="plusBtn"> + </a>
                                <p id="ma_diff_input">${ds.ma_start_level}</p>
                                <a class="minusBtn"> - </a>
                            </div>
                            <div id="end_level_bar">
                                <p>${lang["endLevelText"]}</p>
                                <a class="plusBtn"> + </a>
                                <p id="ma_diff_input">${ds.ma_end_level}</p>
                                <a class="minusBtn"> - </a>
                            </div>
                            <div id="cost_summary_bar">
                            </div>
                        </div>
                        <div id="cost_list_panel">

                        </div>
                    </div>
                    `;

    updatePage(lang["title"], content);
}

export { costCalcPage };