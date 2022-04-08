import { api_request, user_json, user_repos } from "./api.js";


//This script sorts and filters the data received from the API


let user_data = {};



// function api_call(username){
//     api_request(username);
    

// }
async function data_sort(username){
    user_data = {};
    await api_request(username);

    await user_data_sort();
    await repo_data_sort();
    
    

}


async function user_data_sort(){
    
    
    user_data["name"] = user_json.name
    user_data["profile_picture"] = user_json.avatar_url;
    user_data["bio"] = user_json.bio;
    user_data["blog"] = user_json.blog;
    user_data["followers"] = user_json.followers;
    user_data["github_url"] = user_json.html_url;

    
}

async function repo_data_sort(){
    //sorts by newest repo
    

    //time to beat is Unix epoch beginning
    let number1 = {created_at:"1970-01-01"};
    let number2 = {created_at:"1970-01-01"};
    let number3 = {created_at:"1970-01-01"};
    let number4 = {created_at:"1970-01-01"};


    //loop to compare the creation date of every repo
    for (let i=0; i < user_repos.length; i++){
        
        let repo_birth = Date.parse(user_repos[i].created_at);
        
        if (repo_birth > Date.parse(number1.created_at)){

            number4 = number3;
            number3 = number2;
            number2 = number1;
            number1 = user_repos[i];

        } else if (repo_birth > Date.parse(number2.created_at)){
            
            number4 = number3;
            number3 = number2;
            number2 = user_repos[i];
            

        } else if (repo_birth > Date.parse(number3.created_at)){

            number4 = number3;
            number3 = user_repos[i];

        } else if (repo_birth > Date.parse(number4.created_at)){

            number4 = user_repos[i];

        }
    }

    let repo_list = [number1, number2, number3, number4]

    user_data["repos"] = repo_list;
    // user_data["repo2"] = number2;
    // user_data["repo3"] = number3;
    // user_data["repo4"] = number4;


    



}

export {data_sort, user_data};