
console.log("Hello World");

let medBtn = document.getElementById("medication_btn");

medBtn.onclick = doSomething;

function doSomething(){
    console.log("From Medication BTN");
    window.location.href = "./html/medication.html";
};

let practiceBtn = document.getElementById("practice_btn");

practiceBtn.onclick = doSomething;

function doSomething(){
    console.log("From Practice BTN");
    // window.location.href = "./html/practice.html";
};
