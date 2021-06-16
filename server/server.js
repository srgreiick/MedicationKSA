const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("./frontend"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT,()=>{
 console.log("PORT "+PORT+" has been overthrown");
}); 