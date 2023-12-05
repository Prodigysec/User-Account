const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to User Account App');
});

app.use('/users', userRoute);

mongoose.connect('mongodb://127.0.0.1:27017/useraccount')
.then(() => {
    app.listen(3000, () => {
        console.log(`User account app is running on port 3000`)
    });
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
