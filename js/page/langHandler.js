import { data_storage as ds} from "../dataStorage.js";

export function changeLang(){
    const data = ds.langJSON;
    const typeList = Object.keys(data);

    let currentLangIndex = typeList.indexOf(ds.lang);

    currentLangIndex += 1;

    if(currentLangIndex >= typeList.length){
        currentLangIndex = 0;
    }

    ds.lang = typeList[currentLangIndex];
    ds.selectedLangJSON = ds.langJSON[ds.lang];

    console.log(ds.lang);
}