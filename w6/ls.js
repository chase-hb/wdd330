



function read_from_ls(key){
    return localStorage.getItem(key);
}


function write_to_ls(key, item){
    localStorage.setItem(key, item);
}


export {read_from_ls, write_to_ls}