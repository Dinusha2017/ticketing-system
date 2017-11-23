const mongoose = require('mongoose');

const UserSchema=new Schema({
    nicNo: {
            type: String,
            unique: true,
            required: true,
            trim: true
    },
    name: {
        type: String,
        required: [true, 'Name is required!'],
        trim: true
    },
    address: {
        type: String,
        required: [true, 'Address is required!'],
        trim: true
    },
    tel: {
        type: String,
        required: [true, 'Tel is required!'],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        trim: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;