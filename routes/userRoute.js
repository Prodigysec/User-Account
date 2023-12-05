const express = require('express');
const User = require('../models/userModel');

const router = express.Router();


router.post('/register', async(req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/', async(req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.get('/:id', async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.put('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!user) {
            return res.status(404).json({message: `cannot find user with id ${id}`})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const deleted = await User.findByIdAndDelete(id);
        if (deleted) {
            return res.status(200).json({message: `user with id ${id} deleted`});
        }
        res.status(404).json({message: `user with id ${id} not found`});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;