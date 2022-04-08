
let user_json = {};
let user_repos = [];


async function api_request(username){
    let url = "https://api.github.com/users/" + username;
    const user_response = await fetch(url, { 
            headers: {
                "Accept" : "application/vnd.github.v3+json"
        }});

    let json_response = await user_response.json();
    for(let key in json_response){
        
        user_json[key] = json_response[key];
    }
    
    url = user_json.repos_url

    let repo_response = await fetch(url, { 
        headers: {
            "Accept" : "application/vnd.github.v3+json"
    }});
        
    json_response = await repo_response.json();
    for(let key in json_response){
        user_repos[key] = json_response[key];
    }
    
}


export {api_request, user_json, user_repos};

