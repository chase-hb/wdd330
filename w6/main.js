console.log("--main.js connected--");

import {todo_connected, add_todo, list_restore, remove_todo} from "./todo.js";
import {ontouch, qs} from "./utilities.js"


list_restore();
todo_connected();

