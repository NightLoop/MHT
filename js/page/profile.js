import { initialTsc, tscEvent } from "../tsc.js";
import { data_storage as ds, uploadDataEventDistributor } from "../dataStorage.js";
import { setBoolText, setEditableText } from "../editableText.js";
import { setNumLimit } from "../numLimiter.js";
import { updatePage } from "../pageHandler.js";

function profilePage(){
    const lang = ds.selectedLangJSON["profile"];
    const content = `
                    <div id="profile_content">
                        <div id="profile_setup_section" class="profile_section_container">
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["ascExpText"]}</p>
                                <p id="ascExp" class="profile_setup_input valueDisplay editableField" min="0" max="50" dataStorage="pf_exp_reduct">${ds.pf_exp_reduct}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["ascLBText"]}</p>
                                <p id="ascLB" class="profile_setup_input valueDisplay editableField" min="0" max="60" dataStorage="pf_lb_reduct">${ds.pf_lb_reduct}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["ascPracText"]}</p>
                                <p id="ascPrac" class="profile_setup_input valueDisplay editableField" min="0" max="60" dataStorage="pf_train_reduct">${ds.pf_train_reduct}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["bedText"]}</p>
                                <p id="bed" class="profile_setup_input valueDisplay editableField" min="0" max="50" dataStorage="pf_bed_speed">${ds.pf_bed_speed}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["innateText"]}</p>
                                <p id="innate" class="profile_setup_input valueDisplay editableField"  min="0" max="600" dataStorage="pf_innate">${ds.pf_innate}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["sectText"]}</p>
                                <p id="sect" class="profile_setup_input valueDisplay boolField" dataStorage="pf_sect_title">${ds.pf_sect_title}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["vipText"]}</p>
                                <p id="vip" class="profile_setup_input valueDisplay boolField" dataStorage="pf_vip">${ds.pf_vip}</p>
                            </div>
                            <div class="profile_setup_bar profile_input_bar">
                                <p>${lang["frostjadeText"]}</p>
                                <p id="frostjade" class="profile_setup_input valueDisplay boolField" dataStorage="pf_frostjade">${ds.pf_frostjade}</p>
                            </div>
                        </div>

                        <div id="profile_stats_section" class="profile_section_container">
                            <div class="stats_setup_bar profile_input_bar">
                                <p>${lang["strText"]}</p>
                                <p id="str" class="stats_setup_input valueDisplay" dataStorage="pf_str">${ds.pf_str}</p>
                            </div>
                            <div class="stats_setup_bar profile_input_bar">
                                <p>${lang["agiText"]}</p>
                                <p id="agi" class="stats_setup_input valueDisplay" dataStorage="pf_agi">${ds.pf_agi}</p>
                            </div>
                            <div class="stats_setup_bar profile_input_bar">
                                <p>${lang["conText"]}</p>
                                <p id="con" class="stats_setup_input valueDisplay editableField" min="10" max="300" dataStorage="pf_con">${ds.pf_con}</p>
                            </div>
                            <div class="stats_setup_bar profile_input_bar">
                                <p>${lang["intText"]}</p>
                                <p id="int" class="stats_setup_input valueDisplay editableField" min="10" max="300" dataStorage="pf_int">${ds.pf_int}</p>
                            </div>
                        </div>
                        
                        <div id="profile_bonus_section" class="profile_section_container">
                            <div class="bonus_bar profile_input_bar">
                                <p>${lang["basicSpeedText"]}</p>
                                <p id="basicSpeed" class="bonus_section_display valueDisplay" dataStorage="pf_base_train_speed">${ds.pf_base_train_speed}</p>
                            </div>
                            <div class="bonus_bar profile_input_bar">
                                <p>${lang["bonusText"]}</p>
                                <p id="bonus" class="bonus_section_display valueDisplay" dataStorage="pf_speed_bonus">${ds.pf_speed_bonus}</p>
                            </div>
                            <div class="bonus_bar profile_input_bar">
                                <p>${lang["finalSpeedText"]}</p>
                                <p id="finalSpeed" class="bonus_section_display valueDisplay" dataStorage="pf_final_train_speed">${ds.pf_final_train_speed}</p>
                            </div>
                        </div>
                    </div>
                    `;
    
    updatePage(lang["title"],content);
    setEditableText(".editableField");
    setNumLimit(".editableField", "int");
    setBoolText(".boolField");
    uploadDataEventDistributor(".valueDisplay");
    tscEvent(".valueDisplay");
    initialTsc();
}

export {profilePage};