const express = require('express')
const router = express.Router();


router.post('/api/somar',ControllerApi.Somar)
router.post('/api/sub',ControllerApi.Subtrair)

module.exports = router;

