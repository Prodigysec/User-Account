if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/userRoute');

const app = express();
app.use(express.json());

// Middleware for CORS
app.use(cors()); // Allow all origins with defatult of CORS(*)

// Allow specific origins
// app.use(
//     cors({
//         origin: 'http://localhost:5173',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//         credentials: true
//     })
// )

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
