const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to User Account App');
});

app.post('/user', async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.get('/users', async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.get('/user/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.put('/user/:id', async(req, res) => {
    try {
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!user) {
            return res.status(404).json({message: `cannot find user with id ${id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

mongoose.connect('mongodb://127.0.0.1:27017/useraccount')
.then(() => {
    app.listen(3000, () => {
        console.log(`User account app is running on port 3000`)
    });
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});
