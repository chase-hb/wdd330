import {qs, ontouch} from "./utilities.js";
import {read_from_ls, write_to_ls} from "./ls.js"


ontouch(qs(".todo_button"), list_builder);
ontouch(qs(".todo_button"), connected);

let todo_list_section = qs(".todo_list");

let todolist = [];


function connected(){
    console.log("--todo.js connected--");
}

function list_builder(){
    let form_text = qs(".todo_text").value;

    let new_li = document.createElement("li");
    let new_text = document.createTextNode(form_text);

    
    new_li.append(new_text);
    todo_list_section.append(new_li);

    write_to_ls(form_text, form_text);
    qs(".todo_text").value = "";
}

function list_restore(){
    let keys = Object.keys(localStorage);
    

    

    
    for(let key in keys){
        let form_text = read_from_ls(key);
        let new_li = document.createElement("li");
        let new_text = document.createTextNode(form_text);
        new_li.append(new_text);
        todo_list_section.append(new_li);
    }
    
}


export {connected, list_builder, list_restore};
