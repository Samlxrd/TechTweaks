const { Router } = require('express');
const router = Router();
require('dotenv').config();

router.get('/', (req, res) => {
    console.log(process.env.PORT);
})

module.exports = router;