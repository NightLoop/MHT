import { updatePage } from "../pageHandler.js"

export function setToNewsPage(){
    const title = "News";
    const context = `
                    Hi guys, this webpage is main to help you to have better experience in meme heroes with the tools provided.
                    </br></br>
                    Currently the develop progress for this webpage will be greatly affect due to limited time I have for developing this webpage.
                    </br></br>
                    --------------------
                    </br>
                    List of updates
                    </br>
                    --------------------
                    </br></br>
                    <b>v3.5</b>
                    IMPORTANT!! on 19/11/2023, this webpage will be down again to shift the cloud service to github hosting.
                    </br>
                    <b>v3.1</b>
                    Rework on the whole UI and reimplement all the tools codes.
                    </br>
                    <b>v3.0</b>
                    Fixed bug which causing the webpage keep refresh, and planing to rework on the UI and reimplement background codes.
                    </br>
                    <b>v2.5</b>
                    IMPORTANT!! on 10/10/2023, this webpage will be down until futher notice!
                    </br>
                    <b>v2.3</b>
                    Vitalia planner is up and stable, whooray!!!!
                    </br>
                    <b>v2.0</b>
                    Vitalia planner is up and running, still have some bug need to fix....
                    </br>
                    <b>v1.2</b>
                    Modify the exp calculation, as of my own testing, it should be slightly more accurate than previous version.
                    </br>
                    <b>V1.0</b>
                    Whooray!!! The first stable (currently?) version is out, no further tools will be added as of current plan until all tools is stable and good to go.
                    </br>
                    <b>Beta</b>
                    Added vitalia calculator and fixed huge lag when using exp calculator, and added better UI.
                    </br>
                    <b>Alpha</b>
                    Finally able to setup the server properly, now the tools is up and running, whooray!!
                     `;

    updatePage(title, context);
    const contentContainerStyle = document.getElementById("main_content_container").style;
    contentContainerStyle.display = "grid";
    contentContainerStyle.overflow = "scroll";
}