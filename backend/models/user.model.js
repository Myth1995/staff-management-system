const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name: {
        type: String
    },
    passport: {
        type: String
    },
    email: {
        type: String
    },
    department: {
        type: String
    },
    dob: {
        type: String
    },
    contact: {
        type: String
    },
    residential: {
        type: String
    },
    emergency: {
        type: String
    },
    create_date: {
        type: Date
    }
});
module.exports = mongoose.model('User', User);