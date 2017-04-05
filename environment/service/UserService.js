var UserDAO = require("../dao/UserDAO.js");

module.exports.login = function(user, cb) {
	UserDAO.login(user, function(data) {
        
		if (data.length == 1) {
			cb("true")
		} else {
			cb("false")

		}
	})

};

module.exports.reg = function(user, cb) {

	UserDAO.reg(user, function(data) {
		if (data) {
			cb("true")
		} else {
			cb("false")
		}
	})

};

module.exports.isUse = function(user, cb) {

	UserDAO.isUse(user, function(data) {
		cb(data)
	})

};