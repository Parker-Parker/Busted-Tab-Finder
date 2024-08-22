
let lastPressed = 0.0;

onPress = (eventx) => {
    
    timeNow = Date.now();
    let dclick = false;
    if (timeNow -lastPressed>1000){
        // single click
        dclick = false
    }
    else{
        console.log("DORUBLE KORICKU")
        dclick = true
    }

    

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
                console.log("None found!")
                console.log(result)
                
                if(dclick){

                    browser.tabs.query({title: "Tab crash reporter"}).then(
                        (tcrresult) => {

                            windowId  = 0
                            tabId     = 0
                
                            if (tcrresult.length > 0)  {
                                console.log("ONE FOUND!")
                                console.log(tcrresult)
                
                                let t = 0
                                while(t< tcrresult.length) {
                                    windowId  = tcrresult[t].windowId
                                    tabId     = tcrresult[t].id
                                    t++
                                    if (tabId != browser.tabs.TAB_ID_NONE)   {
                                        t = tcrresult.length
                                    }
                                }
                
                                if (tabId != browser.tabs.TAB_ID_NONE && tabId !=  0)   {
                                    browser.windows.update(windowId, {focused:true})
                                    browser.tabs.update(tabId,{active:true})
                                }
                            }
                            else{
                                console.log("None found!")
                                console.log(tcrresult)


                                browser.tabs.query({title: "Server Not Found"}).then(
                                    (snfresult) => {

                                        windowId  = 0
                                        tabId     = 0
                            
                                        if (snfresult.length > 0)  {
                                            console.log("ONE FOUND!")
                                            console.log(snfresult)
                            
                                            let t = 0
                                            while(t< snfresult.length) {
                                                windowId  = snfresult[t].windowId
                                                tabId     = snfresult[t].id
                                                t++
                                                if (tabId != browser.tabs.TAB_ID_NONE)   {
                                                    t = snfresult.length
                                                }
                                            }
                            
                                            if (tabId != browser.tabs.TAB_ID_NONE && tabId !=  0)   {
                                                browser.windows.update(windowId, {focused:true})
                                                browser.tabs.update(tabId,{active:true})
                                            }
                                        }
                                        else{
                                            console.log("None found!")
                                            console.log(snfresult)
                                            //search for empty tabs
                                            browser.tabs.query({title: "New Tab"}).then(
                                                (ntresult) => {
                        
                                                    windowId  = 0
                                                    tabId     = 0
                                        
                                                    if (ntresult.length > 0)  {
                                                        console.log("ONE FOUND!")
                                                        console.log(ntresult)
                                        
                                                        let t = 0
                                                        while(t< ntresult.length) {
                                                            windowId  = ntresult[t].windowId
                                                            tabId     = ntresult[t].id
                                                            t++
                                                            if (tabId != browser.tabs.TAB_ID_NONE)   {
                                                                t = ntresult.length
                                                            }
                                                        }
                                        
                                                        if (tabId != browser.tabs.TAB_ID_NONE && tabId !=  0)   {
                                                            browser.windows.update(windowId, {focused:true})
                                                            browser.tabs.update(tabId,{active:true})
                                                        }
                                                    }
                                                    else{
                                                        console.log("None found!")
                                                        console.log(ntresult)
                        
                                                    }
                                                }
                        
                                            )


                                        }
                                    }

                                )


                            }
                        }

                    )




                }
                    
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