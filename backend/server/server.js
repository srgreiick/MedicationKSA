const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use(express.static("../../frontend"));
app.use(express.static("./index.html"));

app.listen(PORT,()=>{
 console.log("PORT "+PORT+" has been overthrown");
}); 