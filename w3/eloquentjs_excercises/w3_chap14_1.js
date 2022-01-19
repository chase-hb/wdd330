const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];
  
  let mountains_div = document.getElementById("mountains");

  let new_table = document.createElement("table");
  let new_tr = document.createElement("tr");

  let table_base_text = [
      document.createTextNode("Name"),
      document.createTextNode("Height"),
      document.createTextNode("Place")
  ];

  
  mountains_div.append(new_table);
  new_table.className = "mountain_table";
  new_table.append(new_tr);
  

  for(let i = 0; i < 3; i++){
      let new_th = document.createElement("th");

      new_tr.append(new_th);
      new_th.append(table_base_text[i]);
     
      
  }
  

  
    
  for (each_mountain in MOUNTAINS){
    let mountain_text_node = [
        document.createTextNode(MOUNTAINS[each_mountain].name),
        document.createTextNode(MOUNTAINS[each_mountain].height),
        document.createTextNode(MOUNTAINS[each_mountain].place)
    ];
    
      let new_tr = document.createElement("tr");
      
      new_table.append(new_tr);
      
      for(let i = 0; i < 3; i++){
        let new_td = document.createElement("td");
        new_tr.append(new_td);
        new_td.append(mountain_text_node[i]);
        if (i == 1){
            new_td.setAttribute("style", "text-align: right;")
            console.log("test")
        }

        
        
        
    }
      
    


      
      
  };