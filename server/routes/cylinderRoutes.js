const express = require('express');
const { insertCylinder, getCylinders, getCylinderInfo, cylinderOutward } = require('../controllers/cylinderController');


const router = express.Router();

router.post('/insert', insertCylinder);
router.get('/outward', getCylinders);
router.get('/outward-info', getCylinderInfo);
router.post('/outward-submit', cylinderOutward);

module.exports = router;
