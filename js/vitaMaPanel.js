import { data_storage as ds } from "./dataStorage.js";
import { updateList } from "./page/vitaCalc.js";

function vitaPanel(maType){
    const lang = ds.selectedLangJSON["vitaCalc"];
    const maPanel = document.getElementById("ma_selection_panel");
    const winHeight = parseFloat(document.getElementById("main_container").style.height);
    const winWidth = parseFloat(document.getElementById("main_container").style.width);
    maPanel.style.display = "grid";
    maPanel.style.height = `${winHeight * 0.5}px`;
    maPanel.style.width = `${winWidth * 0.75}px`;

    const dsSelectedList = ds[`vita_${maType}`];
    const maList = ma_diff_list[maType];
    let contentList = "";

    for (const ma in maList){
        if(dsSelectedList.length === 0){
            const output = `<p id="${ma}" class="maSelection" selected="false">${maList[ma].name}</p>`;
            contentList += output;
        }else{
            let isAdded = false;
            for (const selectedMa of dsSelectedList){
                if (selectedMa.name === ma){
                    isAdded = true;
                }
            }

            if(isAdded === true){
                const output = `<p id="${ma}" class="maSelection" selected="true" style="background-color:rgba(0, 0, 0, 0.150);">${maList[ma].name}</p>`;
                contentList += output;
            }else{
                const output = `<p id="${ma}" class="maSelection" selected="false">${maList[ma].name}</p>`;
                contentList += output;
            }
        }
    }

    maPanel.innerHTML = `
                        <div id=ma_panel_title>${lang[`${maType}Title`]}</div>
                        <div id=ma_panel_list>${contentList}</div>
                        <p id=ma_panel_close>Done</p>

    `;
    maSelectDistribite(".maSelection");
    document.getElementById("ma_panel_close").addEventListener("click", () => {maClosePanel(maType)});
}

const ma_diff_list = {
    unarmed : {
        taichi : { name : "shadowboxing" , diff : 1.2 },
        snow : { name : "snowflake catcher" , diff : 1.1 },
        blood : { name : "assassination palm" , diff : 1.1 },
        beggar : { name : "dragon vanquishing" , diff : 1.5 },
        toxic : { name : "toxic fist" , diff : 1.2 },
        iga : { name : "iga taijutsu" , diff : 1.1 },
        jade : { name : "purity palm" , diff : 1.1 },
        shaolin : { name : "dharma fist art" , diff : 1.1 },
        tang : { name : "illusory jade fist" , diff : 1.2 },
        rookie : { name : "rookie punch" , diff : 1.1 },
        wingchun : { name : "wing chun" , diff : 1.1 },
        wanderer : { name : "seven sided punch" , diff : 1.5 },
        goldsnake : { name : "goldsnake's stride palm" , diff : 1.4 },
        yang : { name : "yang finger" , diff : 1.2 },
        snowlord : { name : "snow lord's yang palm" , diff : 2 },
        buddha : { name : "buddha's palm" , diff : 2 },
        nether : { name : "ultimate nether claw" , diff : 1.8 },
        ethervoid : { name : "ethervoid palm" , diff : 1.7 },
        advbeggar : { name : "uber art of dragon vanquishing" , diff : 2 },
        advshaolin : { name : "vajra palm" , diff : 1.8 },
        advtoxic : { name : "venom fist" , diff : 1.8 },
        sixdivine : { name : "six divine pulses" , diff : 2 },
        gloompalm : { name : "gloom palm" , diff : 2}
    },
    blade : {
        taichi : { name : "deceitful scimitar art" , diff : 1.1 },
        blood : { name : "bloodreaver scimitar art" , diff : 1.2 },
        iga : { name : "kawa kaede single slash" , diff : 1.3 },
        shaolin : { name : "benevolent scimitar art" , diff : 1.1 },
        imperial : { name : "spring beneath scimitar art" , diff : 1.2 },
        swine : { name : "swine cutter scimitar art" , diff : 1.2 },
        wanderer : { name : "windfury scimitar art" , diff : 1.4 },
        flame : { name : "flamebrand scimitar art" , diff : 1.4 },
        universal : { name : "universal split scimitar art" , diff : 1.2 },
        snowdrink : { name : "snowdrinker scimitar art" , diff : 1.7 },
        adviga : { name : "shadow triflow" , diff : 1.8 },
        cruelblade : { name : "cruelblade scimitar art" , diff : 2 },
        advblood : { name : "bloodfiend scimitar art" , diff : 1.8 },
        xblade : { name : "extermination cross blade" , diff : 2 }
    },
    sword : {
        taichi : { name : "tai chi sword art" , diff : 1.5 },
        snow : { name : "frost briingers sword art" , diff : 1.2 },
        jade : { name : "jade pavilion sword art" , diff : 1.4 },
        fruit : { name : "forbidden fruit sword art" , diff : 1.2 },
        lotus : { name : "lotus sword art" , diff : 1.2 },
        peotic : { name : "poetic sword art" , diff : 1.4 },
        goldsnake : { name : "goldsnake sword art" , diff : 1.5 },
        taoist : { name : "true taoist sword art" , diff : 1.2 },
        warding : { name : "spirit warding sword art" , diff : 2 },
        advtaichi : { name : "yin yang sword art" , diff : 2 },
        meteora : { name : "butterfly meteora" , diff : 1.8 },
        advjade : { name : "jade pavilion's pure sword art" , diff : 1.8 },
        advsnow : { name : "snowfall sword art" , diff : 1.8 },
        ninerecluse : { name : "nine recluse sword art" , diff : 2 }
    },
    staff : {
        beggar : { name : "low blow staff art" , diff : 1.5 },
        shaolin : { name : "monk staff art" , diff : 1.2 },
        taichi : { name : "octo-trigram staff art" , diff : 1.1 },
        gangster : { name : "gangster staff art" , diff : 1.2 },
        bromance : { name : "bromance staff art" , diff : 1.2 },
        nightdemon : { name : "night demon staff art" , diff : 1.5 },
        yue : { name : "yue's spear art" , diff : 1.4 },
        overlord : { name : "overlord spear art" , diff : 1.8 },
        blazing : { name : "blazing spear art" , diff : 2 },
        monkey : { name : "monkey king staff art" , diff : 2 }
    },
    throw : {
        toxic : { name : "toxic throwing weapon" , diff : 1.4 },
        tang : { name : "secret technique of tang sect" , diff : 1.2 },
        stone : { name : "stone throw" , diff : 1.1 },
        goldsnake : { name : "goldsnake dart art" , diff : 1.4 },
        highroller : { name : "highroller's flying card" , diff : 1.4 },
        advtang : { name : "uber secret technique of tang sect" , diff : 1.4 },
        draconis : { name : "draconis octave finger" , diff : 2 },
        lilli : { name : "lil' li's flying dagger" , diff : 2 },
        sewing : { name : "sewing needle style" , diff : 2 }
    },
    whip : {
        jade : { name : "blossom whip art" , diff : 1.2 },
        fatherhood : { name : "fatherhood whip art" , diff : 1.3 },
        volatile : { name : "volatile whip art" , diff : 1.2 },
        dragon : { name : "dancing dragon whip art" , diff : 1.3 },
        queen : { name : "queen's whip art" , diff : 1.5 },
        horsetail : { name : "red horsetail whisk" , diff : 1.5 },
        imperial : { name : "moonshadow whip art" , diff : 1.4 },
        divine : { name : "divine queen whip art" , diff : 2 },
        boa : { name : "white boa whip art" , diff : 1.8 }
    },
    levi : {
        snow : { name : "zero gravity" , diff : 1.3 },
        taichi : { name : "cloud step" , diff : 1.2 },
        blood : { name : "bloodshadow step" , diff : 1.1 },
        beggar : { name : "free roam" , diff : 1.1 },
        toxic : { name : "toxic phantom" , diff : 1.1 },
        jade : { name : "butterfly dance" , diff : 1.3 },
        shaolin : { name : "water walking" , diff : 1.1 },
        iga : { name : "art of shadow shield" , diff : 1.1 },
        grass : { name : "grasshopping" , diff : 1.1 },
        wanderer : { name : "windwalk" , diff : 1.2 },
        tang : { name : "phantom step" , diff : 1.3 },
        imperial : { name : "flyfish levi" , diff : 1.4 },
        dc : { name : "divine celerity" , diff : 1.4 },
        angelic : { name : "angelic thread" , diff : 1.4 }
    }
}

function maClosePanel(maType){
    const maList = document.querySelectorAll(".maSelection");
    const dsSelectedList = ds[`vita_${maType}`];
    const selectedMA = [];

    if(dsSelectedList.length === 0){
        maList.forEach(target => {
            if (target.getAttribute("selected") === "true"){
                selectedMA.push({"name" : target.id, "level" : 1, "vita" : 0});
            }
        });
    }else{
        maList.forEach(target => {
            if (target.getAttribute("selected") === "true"){
                let isAdded = false;
                let maLevel = 1;
                let maVita = 0;
                for (const dsMa of dsSelectedList){
                    if(dsMa.name === target.id){
                        isAdded = true;
                        maLevel = dsMa.level;
                        maVita = dsMa.vita;
                    }
                }

                if(isAdded === true){
                    selectedMA.push({"name" : target.id, "level" : maLevel, "vita" : maVita});
                }else{
                    selectedMA.push({"name" : target.id, "level" : maLevel, "vita" : maVita});
                }
            }
        });
    }

    ds[`vita_${maType}`] = selectedMA;
    updateList(maType);
    document.getElementById("ma_selection_panel").style.display = "none";
}

function maSelectFunction(event){
    const isSelected = event.target.getAttribute("selected");
    if (isSelected === "false"){
        event.target.setAttribute("selected", "true");
        event.target.style.backgroundColor = "rgba(0, 0, 0, 0.150)";
    }else{
        event.target.setAttribute("selected", "false");
        event.target.style.backgroundColor = "";
    }
}

function maSelectDistribite(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("click", function(event){
            maSelectFunction(event);
        });
    });
}

export { vitaPanel , ma_diff_list };