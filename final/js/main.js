import { data_sort} from "./data.js";
import {html_populate} from "./document.js"
import { api_request, user_json, user_repos } from "./api.js";




document.querySelector("#search").addEventListener("click", user_search)


function user_search(){
    
    let username = document.querySelector("#username").value;
    data_sort(username);
}



