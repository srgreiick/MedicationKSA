//test log
console.log("From Med List Controller Line 1");


//Call addRow function
addRow();


//Create row for medication list
// function from https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
function addRow() {
    const div = document.createElement('div');
  
    div.className = 'grid-item';
  
    div.innerHTML = `
    <div>TEST</div>
    `;
  
    document.getElementById('grid-container').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};