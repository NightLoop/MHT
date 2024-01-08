const data_storage = {
    winHeight: "0px",
    winWidth: "0px",

    lang: "en",
    langJSON: [],
    selectedLangJSON: [],

    currentPage: "",
    previousPage: "",

    pf_exp_reduct: 0,
    pf_lb_reduct: 0,
    pf_train_reduct: 0,
    pf_bed_speed: 0,
    pf_innate: 0,
    pf_sect_title: false,
    pf_vip: false,
    pf_frostjade: false,
    pf_str: 0,
    pf_agi: 0,
    pf_con: 0,
    pf_int: 0,
    pf_base_train_speed: 0,
    pf_speed_bonus: 0,
    pf_final_train_speed: 0,

    ma_diff: 0,
    ma_start_level: 0,
    ma_end_level: 0,
    ma_exp_cost: 0,
    ma_train_cost: 0,
    ma_train_time:0,
    ma_tael_cost: 0,
    ma_cost_list: {},
}

function uploadData(dataLocation, value){
    const ds = data_storage;
    try{
        ds[dataLocation] = value;
    }catch(error){
        console.log(error);
    }
}

function uploadDataEventDistributor(className){
    const targetList = document.querySelectorAll(className);

    targetList.forEach(target => {
        target.addEventListener("blur", function(){
            const dataLocation = this.getAttribute("dataStorage");
            const value = this.innerHTML;
            uploadData(dataLocation, value);
        })
    })
}

export {data_storage, uploadData, uploadDataEventDistributor};