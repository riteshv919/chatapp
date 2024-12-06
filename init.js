const mongoose = require('mongoose');
const Chat = require("./models/chat")


main().then((res)=>{
    console.log("connection success")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let allChats = ([

    {
        from: "ritesh",
        to: "rohit",
        msg: "send me your notes",
    },
    {
        from: "rohit",
        to: "ritesh",
        msg: "Sure, I’ll send them to you.",
    },
    {
        from: "ritesh",
        to: "anil",
        msg: "Can you help with the project?",
    },
    {
        from: "anil",
        to: "ritesh",
        msg: "Yes, let’s discuss it tomorrow.",
    },
    {
        from: "ritesh",
        to: "rahul",
        msg: "Are you coming to the meeting?",
    },
    {
        from: "rahul",
        to: "ritesh",
        msg: "Yes, I'll be there at 5 PM.",
    },
    {
        from: "rohit",
        to: "anil",
        msg: "Did you complete the report?",
    },
    {
        from: "anil",
        to: "rohit",
        msg: "Not yet, I need more data from the team.",
    },
    {
        from: "rahul",
        to: "anil",
        msg: "Can you review my code?",
    },
    {
        from: "anil",
        to: "rahul",
        msg: "Sure, I'll check it tonight.",
    },



]);

Chat.insertMany(allChats);