const express = require('express');
const app = express();
const router = require('./routes/index');
const port = process.env.PORT;

//Configuration
router(app);
app.listen(port, (error) => {
    if (error) {
        console.error('Server Error');
        return;
    }
    console.log('Server running on port', 3000);
})