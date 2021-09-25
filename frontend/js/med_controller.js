import med_list from "../database/med_list.js";
console.log("From Med Controller line 1");

//window.location.search gets us the param
//from the url (created in med_list_controller.js)
let med_qstring = window.location.search.substring(1)
console.log(med_qstring);

//condenses referance
let medication = med_list.med_list.meds

//loops over medications until one matching
//html substring is found (everything after "?")
//in the url
for (let i = 0; i < medication.length; i++) {
    if (medication[i].name == med_qstring) {
        console.log(medication[i]);
        medication = medication[i];
        addContent(medication);
    }
    else{
        console.log("no match");
    }
}

//Populates content based on substring crossed 
//against the medication database
function addContent(a) {
    const div = document.createElement('div');
    div.innerHTML = "<div>"+a.name+"</div><div>"+a.amount+"</div>";
  
    document.getElementById('medication').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};