import med_list from "../database/med_list.js";
console.log("From Med Controller line 1");

let medication_f_list = window.location.search.substring(1)
console.log(medication_f_list);

//
let medication = med_list.med_list.meds

for (let i = 0; i < medication.length; i++) {
    if (medication[i].name == medication_f_list) {
        console.log(medication[i]);
        medication = medication[i];
        addContent(medication);
    }
    else{
        console.log("nope");
    }
}

function addContent(a) {
    const div = document.createElement('div');
    div.innerHTML = "<div>"+a.name+"</div><div>"+a.amount+"</div>";
  
    document.getElementById('medication').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};