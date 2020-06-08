var express = require('express');
var router = express.Router();
var tempsController= require('../controllers/temperaturasController');


router.get('/data',tempsController.temperaturas);
router.get('/allTemps',tempsController.allTemps)
router.get('/temperaturaAnuales',tempsController.temperaturasAnuales)
module.exports = router;
