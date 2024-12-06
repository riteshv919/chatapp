const mongoose = require('mongoose');


const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        require : true
    },
    to: {
        type: String,
    },
    msg: {

        type: String,
        maxLength: [50,'Message cannot exceed 50 characters'],
    },


    created_at: {
        type: Date,
        require : true,

    }
})

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;