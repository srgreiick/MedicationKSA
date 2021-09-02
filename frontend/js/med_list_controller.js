console.log("From Med List Controller Line 1");

addRow();

function addRow() {
    const div = document.createElement('div');
  
    div.className = 'row';
  
    div.innerHTML = `
    <div>TEST</div>
    `;
  
    document.getElementById('content').appendChild(div);
    console.log("From addRow Function in Med List Controller");
};