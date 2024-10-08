const express = require('express');
const { insertVoucher, getVouchers } = require('../controllers/voucherController');

const router = express.Router();

router.post('/add', insertVoucher);
router.get('/getdata', getVouchers);

module.exports = router;
