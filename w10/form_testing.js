function form_processor(){
    let username = document.querySelector(".username").value;
    let header = document.querySelector(".heading");
    if (username.length < 3){
        alert("Username needs to be longer than 3 characters!")
    }
    else{
        header.textContent = "User found: " + username;
    }
    
    
    
}