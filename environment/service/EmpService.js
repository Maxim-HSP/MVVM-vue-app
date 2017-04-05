var EmpDAO = require("../dao/EmpDAO.js");

module.exports.getAllEmp = function(callback) {
	EmpDAO.getAllEmp(function(data) {
		callback(data)
	})
}

module.exports.getEmpByPage = function(page, callback) {
	EmpDAO.getEmpByPage(page, function(data) {
		callback(data)
	})
}

module.exports.delById = function(_id, callback) {
	EmpDAO.delById(_id, function(data) {
		callback(data)
	})
}