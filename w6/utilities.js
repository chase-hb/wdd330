function qs(selector){
    return document.querySelector(selector);
}


function ontouch(element_selector, callback_function){
    element_selector.addEventListener("touchend", callback_function)
    element_selector.addEventListener("click", callback_function)

}

function ute_connected(){
    console.log("--utilities.js connected--");
}

export {qs, ontouch, ute_connected}