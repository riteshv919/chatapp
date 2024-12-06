const mongoose = require('mongoose');
const Chat = require("./models/chat")


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}
