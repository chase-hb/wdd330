import { data_sort, user_data} from "./data.js";
import {html_populate, document_clear} from "./document.js"





document.querySelector("#search").addEventListener("click", user_search)
if (screen.width < 990){
    document.querySelector("#search").addEventListener("touchend", user_search)
}






async function user_search(){
    let username = document.querySelector("#username").value;
    
    
    await data_sort(username);
    await html_populate();
}



