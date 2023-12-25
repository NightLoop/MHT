import { data_storage as ds } from "./dataStorage.js";

export function setLang(langType){
    switch(langType){
        case "en":
            if(ds.lang !== "en" || ds.selectedLangJSON == ""){
                ds.selectedLangJSON = ds.langJSON["en"];
                ds.lang = "en";
            }
            break;

        case "cn":
            if(ds.lang !== "cn" || ds.selectedLangJSON == ""){
                ds.selectedLangJSON = ds.langJSON["cn"];
                ds.lang = "cn";
            }
            break;

        default:
            ds.selectedLangJSON = ds.langJSON["en"];
            ds.lang = "en";
            break;
    }
}