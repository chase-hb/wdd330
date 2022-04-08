import { api_request, user_json, user_repos } from "./api.js";



let user_data = {}



// function api_call(username){
//     api_request(username);
    

// }
async function data_sort(username){

    await api_request(username);

    user_data_sort();
    repo_data_sort();

}


function user_data_sort(){

    console.log(user_json);
    
    
    user_data["name"] = user_json.name
    user_data["profile_picture"] = user_json.avatar_url;
    user_data["bio"] = user_json.bio;
    user_data["blog"] = user_json.blog;
    user_data["followers"] = user_json.followers;
    user_data["github_url"] = user_json.html_url;

    console.log(user_data);
    
}

function repo_data_sort(){

}

export {data_sort, user_data};