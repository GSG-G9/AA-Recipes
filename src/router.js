const express = require('express');
const { getBySearch } = require('./controller');

const router = express.Router();


router.get('/search', getBySearch);

module.exports = router;
