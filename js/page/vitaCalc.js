import { data_storage as ds} from "../dataStorage.js";
import { updatePage } from "../pageHandler.js";

function vitaCalcPage(){
    const lang = ds.selectedLangJSON["vitaCalc"];

    const content = `WIP`;

    updatePage(lang["title"], content);
}

export { vitaCalcPage };