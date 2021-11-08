const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mainSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{ 
        type: String,
        default: "",
        required: true
    },
    firstname: {
        type: String,
        required: true 
    },
    lastname: {
        type: String,
        required: true 
    },
    email: {
        type: String,
        required: true,
        unique:true
    }
});

module.exports = {
    mainUser: mongoose.model("user", mainSchema),
}