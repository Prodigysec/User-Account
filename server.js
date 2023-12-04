const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to User Account App');
});

app.listen(3000, () => {
    console.log(`User account app is running on port 3000`)
})