async function loadFile(){
    let isLoadingSuccess = false;
    let failCount = 0;
    let langFile = {};
    const srcList = {
        "../img" : {
            "/ico/" : ["icon.ico"],
            "/png/" : ["icon.png"],   
        },
        "../js" : {
            "/" : ["winSizeHandler.js", "dataStorage.js", "langHandler.js", "pageHandler.js", "navBar.js", "editableText.js", "numLimiter.js", "langTypeHandler.js", "tsc.js", "cc.js"],
            "/page/" : ["menu.js", "news.js", "profile.js", "costCalc.js", "about.js","vitaCalc.js"],
        },
        "../css" : {
            "/" : ["default.css", "mainContainer.css", "news.css", "menu.css", "profile.css", "costCalc.css","vitaCalc.css"],
        },
        "../json" : {
            "/" : ["lang.json"],
        }
    };

    for (const src in srcList){
        switch (src){
            case "../img":
                for(const subPath in srcList[src]){
                    for(const filePath of srcList[src][subPath]){
                        const result = await checkImg(list2Path(src, subPath, filePath));
                        if (result === "error" || result === "failed"){
                            failCount += 1;
                        }
                    }
                
                }
                break;

            case "../js":
                for(const subPath in srcList[src]){
                    for(const filePath of srcList[src][subPath]){
                        const result = await loadScript(list2Path(src, subPath, filePath));
                        if (result === "error" || result === "failed"){
                            failCount += 1;
                        }
                    }
                }
                break;

            case "../css":
                for(const subPath in srcList[src]){
                    for(const filePath of srcList[src][subPath]){
                        const result = await loadCss(list2Path(src, subPath, filePath));
                        if (result === "error" || result === "failed"){
                            failCount += 1;
                        }
                    }
                }
                break;

            case "../json":
                for(const subPath in srcList[src]){
                    for(const filePath of srcList[src][subPath]){
                        const {result , data} = await loadJSON(list2Path(src, subPath, filePath));
                        if (result === "error" || result === "failed"){
                            failCount += 1;
                        }
                        langFile = data;
                    }
                }
                break;

            default:
                console.log(`${src} not in list`);
                failCount += 1;
                break;
        }
    }

    if(failCount === 0){
        isLoadingSuccess = true;
    }

    return {isLoadingSuccess : isLoadingSuccess , langData : langFile};
}

async function checkImg(file){
    try{
        console.log(`Loading and verifing ${file.split("/").pop()}`);
        const responce = await fetch(file);
        if(responce.ok){
            console.log(`${file.split("/").pop()} successfully loaded`);
            return "success";
        }else{
            console.log(`fail to load ${file.split("/").pop()}`);
            return "failed";
        }
    }catch (error){
        console.log(`${file.split("/").pop()} not found`);
        return "error";
    }
}

async function loadScript(file){
    try{
        console.log(`Loading and verifing ${file.split("/").pop()}`);
        const responce = await fetch(file);
        if(responce.ok){
            let script = document.createElement("script");
            script.src = file;
            script.type = "module";
            document.body.appendChild(script);
            console.log(`${file.split("/").pop()} successfully loaded`);
            return "success";
        }else{
            console.log(`fail to load ${file.split("/").pop()}`);
            return "failed";
        }
    }catch (error){
        console.log(`${file.split("/").pop()} not found`);
        return "error";
    }
}

async function loadCss(file){
    try{
        console.log(`Loading and verifing ${file.split("/").pop()}`);
        const responce = await fetch(file);
        if(responce.ok){
            let css = document.createElement("link");
            css.rel = "stylesheet";
            css.href = file;
            document.head.appendChild(css);
            console.log(`${file.split("/").pop()} successfully loaded`);
            return "success";
        }else{
            console.log(`fail to load ${file.split("/").pop()}`);
            return "failed";
        }
    }catch(error){
        console.log(`${file.split("/").pop()} not found`);
        return "error";
    }
}

async function loadJSON(file){
    try{
        console.log(`Loading and verifing ${file.split("/").pop()}`);
        const responce = await fetch(file);
        if(responce.ok){
            const resJson = await responce.json();
            console.log(`${file.split("/").pop()} successfully loaded`);
            return {result : "success" , data: resJson};
        }else{
            console.log(`fail to load ${file.split("/").pop()}`);
            return {result : "failed" , data: null};
        }
    }catch(error){
        console.log(`${file.split("/").pop()} not found`);
        return {result : "error" , data: null};
    }
}

function list2Path(header, subPath, filePath){
    return (`${header}${subPath}${filePath}`);
}

export default loadFile();