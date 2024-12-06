

const express = require("express");

const app = express();


const mongoose = require('mongoose');
const path = require("path");

const Chat = require("./models/chat")
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

// index Route
app.get("/chats",async(req,res)=>{
  let chats = await  Chat.find();
  console.log(chats);
  res.send("working")
})



app.get("/", (req, res) => {

    res.render("index.ejs",{chats})

})
app.listen(8080, () => {
    console.log("working")
});