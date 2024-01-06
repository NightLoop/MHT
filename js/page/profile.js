import { data_storage as ds } from "../dataStorage.js";
import { setEditableText } from "../editableText.js";
import { setNumLimit } from "../numLimiter.js";
import { updatePage } from "../pageHandler.js";

function profilePage(){
    const lang = ds.selectedLangJSON["profile"];

    const content = `
                    <div id="profile_content">
                        <div id="profile_setup_section">
                            <div class="profile_setup_bar">
                                <p>${lang["ascExpText"]}</p>
                                <p id="ascExp" class="profile_setup_input editableField" min="0" max="50">${ds.pf_exp_reduct}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["ascLBText"]}</p>
                                <p id="ascLB" class="profile_setup_input editableField" min="0" max="60">${ds.pf_lb_reduct}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["ascPracText"]}</p>
                                <p id="ascPrac" class="profile_setup_input editableField" min="0" max="60">${ds.pf_train_reduct}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["bedText"]}</p>
                                <p id="bed" class="profile_setup_input editableField" min="0" max="50">${ds.pf_bed_speed}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["innateText"]}</p>
                                <p id="innate" class="profile_setup_input editableField"  min="0" max="600">${ds.pf_innate}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["sectText"]}</p>
                                <p id="sect" class="profile_setup_input">${ds.pf_sect_title}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["vipText"]}</p>
                                <p id="vip" class="profile_setup_input">${ds.pf_vip}</p>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["frostjadeText"]}</p>
                                <p id="frostjade" class="profile_setup_input">${ds.pf_frostjade}</p>
                            </div>
                        </div>

                        <div id="stats_setup_section">
                            <div class="stats_setup_bar">
                                <p>${lang["strText"]}</p>
                                <p id="str" class="stats_setup_input">${ds.pf_str}</p>
                            </div>
                            <div class="stats_setup_bar">
                                <p>${lang["agiText"]}</p>
                                <p id="agi" class="stats_setup_input">${ds.pf_agi}</p>
                            </div>
                            <div class="stats_setup_bar">
                                <p>${lang["conText"]}</p>
                                <p id="con" class="stats_setup_input editableField" min="0" max="300">${ds.pf_con}</p>
                            </div>
                            <div class="stats_setup_bar">
                                <p>${lang["intText"]}</p>
                                <p id="int" class="stats_setup_input editableField" min="0" max="300">${ds.pf_int}</p>
                            </div>
                        </div>
                        
                        <div id="bonus_section">
                            <div class="bonus_bar">
                                <p>${lang["basicSpeedText"]}</p>
                                <p id="basicSpeed" class="bonus_section_display">${ds.pf_base_train_speed}</p>
                            </div>
                            <div class="bonus_bar">
                                <p>${lang["bonusText"]}</p>
                                <p id="bonus" class="bonus_section_display">${ds.pf_speed_bonus}</p>
                            </div>
                            <div class="bonus_bar">
                                <p>${lang["finalSpeedText"]}</p>
                                <p id="finalSpeed" class="bonus_section_display">${ds.pf_final_train_speed}</p>
                            </div>
                        </div>
                    </div>
                    `;
    
    updatePage(lang["title"],content);
    setEditableText(".editableField");
    setNumLimit(".editableField");
}

export {profilePage};