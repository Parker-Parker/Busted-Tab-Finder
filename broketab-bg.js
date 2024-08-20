
let lastPressed = 0.0;

onPress = (eventx) => {
    
    timeNow = Date.now();

    // if (timeNow -lastPressed>1000){
    //     const md_link = "\n[" + eventx.title +"]"+"("+eventx.url+")";
    //     navigator.clipboard.writeText(md_link);
    //     browser.tabs.executeScript({ file: "/markdown.js" })
    // }
    // else{
    //     console.log("DORUBLE KORICKU")
    //     let md_link = "\n";
    //     browser.tabs.query({currentWindow : true}).then(
    //         (result) => {
    //             result.forEach((tab) => {
    //                 md_link += "[" + tab.title +"]"+"("+tab.url+")\n"
    //             });
                
    //             navigator.clipboard.writeText(md_link);
    //             // console.log(md_link)
    //         }
    //     )
    // }

    

    browser.tabs.query({title: ""}).then(
        (result) => {

            let windowId  = 0
            let tabId     = 0

            if (result.length > 0)  {
                console.log("ONE FOUND!")
                console.log(result)

                let t = 0
                while(t< result.length) {
                    windowId  = result[t].windowId
                    tabId     = result[t].id
                    t++
                    if (tabId != browser.tabs.TAB_ID_NONE)   {
                        t = result.length
                    }
                }

                if (tabId != browser.tabs.TAB_ID_NONE && tabId !=  0)   {
                    browser.windows.update(windowId, {focused:true})
                    browser.tabs.update(tabId,{active:true})
                }
            }
            else{
                browser.tabs.query({active: false}).then(
                    (result2) => {
                        if (result2.length > 0)  {            
                            let t = 0
                            while(t< result2.length) {
                                windowId  = result2[t].windowId
                                tabId     = result2[t].id
                                t++
                                if (tabId != browser.tabs.TAB_ID_NONE)   {
                                    t = result2.length
                                }
                            }
                        }
                        if (tabId != browser.tabs.TAB_ID_NONE && tabId !=  0)   {
                            browser.windows.update(windowId, {focused:true})
                            browser.tabs.update(tabId,{active:true})
                        }
                    }
                )
                console.log("None found!")
                console.log(result)

            }

            // if (tabId != browser.tabs.TAB_ID_NONE)   {
            //     browser.windows.update(windowId, {focused:true})
            //     browser.tabs.update(tabId,{active:true})
            // }



        }
    )





    lastPressed = timeNow;


}

browser.browserAction.onClicked.addListener(onPress)