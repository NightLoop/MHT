import { data_storage as ds} from "./dataStorage.js";

function tsc(){
    const baseSpeed = 36000;
    const conBonus = (50 + parseInt(ds.pf_con)) / 50;
    const basicSpeed = baseSpeed * conBonus;

    const sectTitle = boolSelectionAssign(ds.pf_sect_title, 0.2);
    const vip = boolSelectionAssign(ds.pf_vip, 0.2);
    const frostjade = boolSelectionAssign(ds.pf_frostjade, 1);
    const ascenSpeed = ds.pf_train_reduct / 100;
    const innate = innateLevel2Bonus(ds.pf_innate);
    const bed = ds.pf_bed_speed / 100;
    const totalBonus = (1 + sectTitle + vip + frostjade + ascenSpeed + innate + bed) * 100;

    const finalSpeed = parseInt(basicSpeed * (totalBonus / 100));

    ds.pf_base_train_speed = basicSpeed;
    ds.pf_speed_bonus = totalBonus;
    ds.pf_final_train_speed = finalSpeed;
    document.getElementById("basicSpeed").innerHTML = ds.pf_base_train_speed;
    document.getElementById("bonus").innerHTML = ds.pf_speed_bonus;
    document.getElementById("finalSpeed").innerHTML = ds.pf_final_train_speed;
}

function boolSelectionAssign(dataName, valueIfTrue){
    if(dataName === "true"){
        return valueIfTrue;
    }else{
        return 0;
    }
}

function innateLevel2Bonus(level){
    const innateBonusList = [
        [0, 10, 1],
        [100, 20, 0.5],
        [300, 30, 0.25],
        [600, 37.5, 0]
    ];

    var bonus = 0;

    for(var i = 0; i < innateBonusList.length; i++){
        const[startingLevel, startingBonus, bonusIncreasement] = innateBonusList[i];

        if(level >= startingLevel){
            var increaseCount = parseInt((level - startingLevel) / 10);
            bonus = startingBonus + (increaseCount * bonusIncreasement);
        }
    }

    return bonus / 100;
}

function tscEvent(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("blur", tsc);
    })
}

export {tscEvent};