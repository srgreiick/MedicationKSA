//test log
console.log("From Med List Controller Line 1");

//Call addRow function
addRow();

//Added content from js
// function from https://stackoverflow.com/questions/17650776/add-remove-html-inside-div-using-javascript
function addRow() {
    const div = document.createElement('div');
  
    div.className = 'row';
  
    div.innerHTML = `
    <div>TEST</div>
    `;
  
    document.getElementById('content').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};