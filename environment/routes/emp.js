var express = require('express');
var router = express.Router();
var EmpService = require('../service/EmpService.js');

router.get('/getAllEmp', function(req, res, next) {
	EmpService.getAllEmp(function(data) {
		res.send(data);
	})
});

router.get('/getEmpByPage', function(req, res, next) {
	EmpService.getEmpByPage(req.query, function(data) {
		res.send(data);
	})
});

router.get('/delById', function(req, res, next) {
	EmpService.delById(req.query._id, function(data) {
		res.send(data);
	})
});


module.exports = router;