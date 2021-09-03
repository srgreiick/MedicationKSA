let med_list = {
    meds: [
     { name: "Adenosine", amount:1 },
     { name: "Atropine", amount:1 }]
};

for (let i = 0; i < med_list.meds.length; i++) {
    console.log(med_list.meds[i].name);
    let med = med_list.meds[i].name
    addRow(med);
}

// console.log(med_list.meds[]);
//test log
console.log("From Med List Controller Line 1");


// let med = "Epinepherine 1:10"

//Call addRow function



//Create row for medication list
// function from https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
function addRow(a) {
    const div = document.createElement('div');
  
    div.className = 'grid-item';

    div.innerHTML = "<div>"+a+"</div>";
  
    document.getElementById('grid-container').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};