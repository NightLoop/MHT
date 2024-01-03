import { data_storage as ds } from "../dataStorage.js";
import { updatePage } from "../pageHandler.js";

function profilePage(){
    const lang = ds.selectedLangJSON["profile"];

    const content = `
                    <div id="profile_content">
                        <div id="basic_setup_section">
                            <div class="profile_setup_bar">
                                <p>${lang["ascExpText"]}</p>
                                <input id="ascExp" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["ascLBText"]}</p>
                                <input id="ascLB" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["ascPracText"]}</p>
                                <input id="ascPrac" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["bedText"]}</p>
                                <input id="bed" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["innateText"]}</p>
                                <input id="innate" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["sectText"]}</p>
                                <input id="sect" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["vipText"]}</p>
                                <input id="vip" class="profile_setup_input"/>
                            </div>
                            <div class="profile_setup_bar">
                                <p>${lang["frostjadeText"]}</p>
                                <input id="frostjade" class="profile_setup_input"/>
                            </div>
                        </div>

                        <div id="stats_section">
                        </div>
                        
                        <div id="bonus_section">
                        </div>
                    </div>
                    `;
    
    updatePage(lang["title"],content);
}

export {profilePage};