const express = require('express');
const { getBySearch } = require('./controller');

const router = express.Router();

// router.get('/food', apiData);
router.post('/search', getBySearch);

module.exports = router;
