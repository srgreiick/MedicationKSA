import med_list from "../database/med_list.js";

//"r" stands for refined
let r_med_list = med_list.med_list.meds
 //console.log(r_med_list);

// Call addRow function
for (let i = 0; i < r_med_list.length; i++) {
    // console.log(med_list.meds[i].name);
    let med = r_med_list[i].name
    addRow(med);
}

//Create row for medication list.
//Creates a link with the param of a given medication.
// function from https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
function addRow(a) {
    const div = document.createElement('div');
  
    div.className = 'grid-item';
    let params = "?"+a;
    let url = "../html/medication.html"+params;
    console.log(url);

    div.innerHTML = "<a href="+url+">"+a+"</a>";
  
    document.getElementById('grid-container').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};