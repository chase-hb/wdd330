//This script makes the request to Github's REST API



let user_json = {};
let user_repos = [];


async function api_request(username){
    let url = "https://api.github.com/users/" + username;
    const user_response = await fetch(url, { 
            headers: {
                "Accept" : "application/vnd.github.v3+json"
        }});
    if (user_response.ok == false){
        alert("Username not found");
        console.log(user_response.status);
    }
    else{
        let json_response = await user_response.json();
        for(let key in json_response){
        
            user_json[key] = json_response[key];
        }
    }
    
    
    url = user_json.repos_url

    let repo_response = await fetch(url, { 
        headers: {
            "Accept" : "application/vnd.github.v3+json"
    }});
    if (repo_response.ok == false){
        alert("Repositories could not be retrieved");
        console.log(repo_response.status);
    }
    else{
        let json_response = await repo_response.json();
        for(let key in json_response){
            user_repos[key] = json_response[key];
        }
    }
    
    
}


export {api_request, user_json, user_repos};

