import { user_repos } from "./api.js"
import {user_data} from "./data.js"


//This script handles html building

let user_header = document.querySelector("#user_data_header")
let repo_header = document.querySelector("#user_repo_header")
let user_list = document.querySelector(".user_data_list")
let repo_list = document.querySelector(".user_repo_list")



async function html_populate(){
    user_list.innerHTML = "";
    repo_list.innerHTML = "";

    await user_populate();
    await repo_populate();
    document.querySelector("#username").value = "";
}



async function user_populate(){
    user_header.setAttribute("class", "user_header")

    let user_data_objects = ["profile_picture", "name", "bio", "blog", "followers", "github_url"]
    for(let index in user_data_objects){
        let data = user_data[user_data_objects[index]];
        
        if (user_data_objects[index] === "profile_picture"){

        let new_img = document.createElement("img");
        new_img.setAttribute("src", data)
        let new_li = document.createElement("li");
        new_li.appendChild(new_img);
        user_list.appendChild(new_li);

            
        }
        else{
            //Add a title to each data point. 
            //Take the title from the data objects and make it more readable.
            let title = user_data_objects[index].replace("_", " ");
            let title_split = title.split(" ");
            for(let i = 0; i < title_split.length; i++){
                title_split[i] = title_split[i][0].toUpperCase() + title_split[i].substring(1);

            }


            let new_li = document.createElement("li");
            let li_class = user_data_objects[index];
            let li_title = title_split.join(" ");
            
            new_li.setAttribute( "class", li_class)
            new_li.innerText =  li_title + ": " + data;
            
            if (user_data_objects[index] === "github_url"){
                let new_a = document.createElement("a");
                new_a.innerText = data.name;
                new_a.setAttribute("href", data.github_url);
                new_li.innerText = "";
                new_li.appendChild(new_a);
            }
            user_list.appendChild(new_li);
        }
    }
}



async function repo_populate(){
    repo_header.setAttribute("class", "repo_header");

    for(let i = 0; i < user_data.repos.length; i++){
        let current_repo = user_data.repos[i];
        let new_li = document.createElement("li");
        let new_a = document.createElement("a");
        let li_class = "repo_" + (i + 1).toString();
        let li_title = (i + 1).toString() + ". ";

        new_li.setAttribute( "class", li_class)
        new_li.innerText = li_title;
        new_a.innerText = current_repo.name;
        new_a.setAttribute("href", current_repo.html_url);
        new_li.appendChild(new_a);
        repo_list.appendChild(new_li);
    }
}

let user_nodes = user_list.childNodes;
let repo_nodes = repo_list.childNodes;


async function document_clear(){
    
    for (let i = 0; i < user_list.childNodes.length; i++) {
        
    }
    for (let i = 0; i < repo_list.childNodes.length; i++) {
        repo_nodes[i].remove();
     }

}

export {html_populate, document_clear};