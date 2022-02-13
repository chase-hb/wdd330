



function read_from_ls(key){
    
    let read_from_storage = localStorage.getItem(key);
    let value = JSON.parse(read_from_storage);
    return value;
}


function write_to_ls(key, item){
    localStorage.setItem(key, JSON.stringify(item));
}

function remove_from_ls(key){
    localStorage.removeItem(key);
    
}

function ls_connected(){
    console.log("--ls.js connected--");
}

export {read_from_ls, write_to_ls, remove_from_ls, ls_connected}