"use strict";

const test = (()=>{
    const init =()=>{
        console.log("test:init");
    }
    return {
        init:init,
    }
})();
window.addEventListener("load", ()=>{test.init();});
