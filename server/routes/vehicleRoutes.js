const express = require('express');
const { insertVehicle, getGatepassData } = require('../controllers/vehicleController');

const router = express.Router();

router.post('/insert', insertVehicle);
router.get('/gatepass', getGatepassData);

module.exports = router;
