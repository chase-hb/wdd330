import {qs, ontouch, ute_connected} from "./utilities.js";
import {read_from_ls, write_to_ls, remove_from_ls, ls_connected} from "./ls.js"

ute_connected();
ls_connected();



ontouch(qs(".todo_button"), add_todo);

//These next few event listeners needed to be added differently since they're added dynamically.
//It wouldn't work to add it directly because they don't exist yet.
ontouch(qs('body'), function(event) {
    if (event.target.className.toLowerCase() == 'remove_button') {
      remove_todo(event.target);
    }
  });


//checkbox changes class depending on whether it is checked or not, 
//also decides if it should be displayed when checked or un-checked by comparing "current state"
  ontouch(qs('body'), function(event) {
    if (event.target.checked == true) {
      event.target.className = "checked";
      if (current_state == "active"){
        event.target.parentElement.style.display = "none";

        }
    }
    else if (event.target.type == "checkbox" && event.target.checked == false) {
        event.target.className = "not_checked";
        console.log("stupid");
        if (current_state == "completed"){
        event.target.parentElement.style.display = "none";

        }
        
      }
    
  });


let current_state = "all";
let not_checked_class = document.getElementsByClassName('not_checked');
let checked_class = document.getElementsByClassName('checked');


// button to show active/uncompleted tasks
  ontouch(qs('.active'), active_button);

  function active_button(){
      console.log("dumb")
    qs('.active').style.border = "2px solid black";
    qs('.all').style.border = "none";
    qs('.completed').style.border = "none";
    current_state = "active";

    for(let i = 0; i < checked_class.length; i++){
        checked_class[i].parentNode.style.display = "none";

    }
    for(let i = 0; i < not_checked_class.length; i++){
        not_checked_class[i].parentNode.style.display = "";
    }
  }


// button to show completed tasks
  ontouch(qs('.completed'), completed_button);

  function completed_button(){
    qs('.completed').style.border = "2px solid black";
    qs('.active').style.border = "none";
    qs('.all').style.border = "none";
    current_state = "completed";

        
    for(let i = 0; i < checked_class.length; i++){
        checked_class[i].parentNode.style.display = "";

    }
    for(let i = 0; i < not_checked_class.length; i++){
        not_checked_class[i].parentNode.style.display = "none";
    }
  }
    
    
    
    

  

  ontouch(qs('.all'), all_button)
    
  function all_button(){
    qs('.all').style.border = "2px solid black";
    qs('.active').style.border = "none";
    qs('.completed').style.border = "none";
    current_state = "all";


    for(let i = 0; i < checked_class.length; i++){
        checked_class[i].parentNode.style.display = "";

    }
    for(let i = 0; i < not_checked_class.length; i++){
        not_checked_class[i].parentNode.style.display = "";
    }
  }  
   



let todo_list_section = qs(".todo_list");


function todo_connected(){
    console.log("--todo.js connected--");
}

function add_todo(){
    let form_text = qs(".todo_text").value;

    //Can't add empty task
    if (form_text == null || form_text == ""){
        alert("You can't add an empty task.")
        return
    }

    let new_li = document.createElement("li");
    let new_text = document.createTextNode(form_text);
    let new_remove_button = document.createElement("input");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "not_checked";

    
    new_remove_button.type = "button";
    new_remove_button.value = "X";
    new_remove_button.className = "remove_button";
    

    new_li.append(checkbox);
    new_li.append(new_text);
    new_li.append(new_remove_button);
    todo_list_section.append(new_li);

    write_to_ls(form_text, form_text);
    qs(".todo_text").value = "";
}

function remove_todo(this_node){
    this_node.parentElement.remove();
    remove_from_ls(this_node.previousSibling.nodeValue);
}

function list_restore(){
    
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let form_text = read_from_ls(key);
        let new_li = document.createElement("li");
        let new_text = document.createTextNode(form_text);
        let new_remove_button = document.createElement("input");
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.className = "not_checked";


        new_remove_button.type = "button";
        new_remove_button.value = "X";
        new_remove_button.className = "remove_button";
        
        new_li.append(checkbox);
        new_li.append(new_text);
        new_li.append(new_remove_button);

        todo_list_section.append(new_li);
      }
    
}


export {todo_connected, add_todo, list_restore, remove_todo};
