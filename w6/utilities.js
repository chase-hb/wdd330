function qs(selector){
    return document.querySelector(selector);
}


function ontouch(element_selector, callback_function){
    element_selector.addEventListener("touchend", callback_function)
    element_selector.addEventListener("click", callback_function)

}


export {qs, ontouch}