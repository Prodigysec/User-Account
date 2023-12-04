const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter username']
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        default: 0
    },
    email : {
        type: String,
        required: [true, 'Please enter email'],
        default: 0
    },
    firstName: {
        type: String,
        required: [true, 'Please enter first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter last name']
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Please enter date of birth']
    },
    address: {
        type: String,
        required: [true, 'Please enter address']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Please enter phone number']
    },
    role: {
        type: String,
        required: [true, 'Please enter role']
    },
    active: {
        type: Boolean,
        required: [true, 'Please enter active status']
    }
    
},
{
    timestamps: true
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;