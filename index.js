const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes/index');
const port = process.env.PORT || 4000;

//Configuration

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router(app);

app.listen(port, (error) => {
    if (error) {
        console.error('Server Error');
        return;
    }
    console.log(`Server running on ${port}`);
})