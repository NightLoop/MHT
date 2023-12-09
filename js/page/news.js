import { pageManament, updatePage } from "../pageHandler.js"

export function setToNewsPage(){
    const title = "News";
    const context = `
                    <div id="news_content">
                    
                    <p>Hi guys, this webpage is main to help you to have better experience in meme heroes with the tools provided.</p>
                    <p>Currently the develop progress for this webpage will be greatly affect due to limited time I have for developing this webpage.</p>
                    <p>Click the "Menu" button below or "≡" at the bottom right conner to access menu page. </p>
                    
                    <a id="news_to_menu_btn" style="text-align:center;" ><b> Menu </b></a>

                    <p style="text-align:center;">
                        --------------------
                        <br/><b>List of updates</b><br/>
                        --------------------
                    </p>
                    
                    <p style="text-align:center;"><b><u>v3.5</u></b></p>
                    IMPORTANT!! on 19/11/2023, this webpage will be down again to shift the cloud service to github hosting.
                    
                    <p style="text-align:center;"><b><u>v3.1</u></b></p>
                    Rework on the whole UI and reimplement all the tools codes.
                    
                    <p style="text-align:center;"><b><u>v3.0</u></b></p>
                    Fixed bug which causing the webpage keep refresh, and planing to rework on the UI and reimplement background codes.
                    
                    <p style="text-align:center;"><b><u>v2.5</u></b></p>
                    IMPORTANT!! on 10/10/2023, this webpage will be down until futher notice!
                    
                    <p style="text-align:center;"><b><u>v2.3</u></b></p>
                    Vitalia planner is up and stable, whooray!!!!
                    
                    <p style="text-align:center;"><b><u>v2.0</u></b></p>
                    Vitalia planner is up and running, still have some bug need to fix....
                    
                    <p style="text-align:center;"><b><u>v1.2</u></b></p>
                    Modify the exp calculation, as of my own testing, it should be slightly more accurate than previous version.
                    
                    <p style="text-align:center;"><b><u>V1.0</u></b></p>
                    Whooray!!! The first stable (currently?) version is out, no further tools will be added as of current plan until all tools is stable and good to go.
                    
                    <p style="text-align:center;"><b><u>Beta</u></b></p>
                    Added vitalia calculator and fixed huge lag when using exp calculator, and added better UI.
                    
                    <p style="text-align:center;"><b><u>Alpha</u></b></p>
                    Finally able to setup the server properly, now the tools is up and running, whooray!!
                    
                    <p><br/><br/></p>

                    <p style="text-align:center;">(O3O)r ····· ♡ <br/> This is end of news, nothing more but a heart for you</p>
                    </div>
                    `;

    updatePage(title, context);
    enableNewsToMenuBtn();
}

function enableNewsToMenuBtn(){
    document.getElementById("news_to_menu_btn").addEventListener("click", () => {
        pageManament.callPage("menu", "loadPage")
    });
}