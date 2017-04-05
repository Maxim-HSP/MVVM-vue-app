var mongoose = require("mongoose");

module.exports.login = function(user, callback) {

	var UserModel = mongoose.model("users");
	UserModel.find({
		username: user.username,
		password: user.password
	}, function(err, data) {
		callback(data);
	})

}

module.exports.reg = function(user, callback) {
	var UserModel = mongoose.model("users");
	//错误优先
	new UserModel(user).save(function(err, data) {
		callback(data)
	})
}


module.exports.isUse = function(user, callback) {
	var UserModel = mongoose.model("users");
	UserModel.count(user, function(err, data) {
		if (data === 0) {
			callback("false")
		} else {
			callback("true")
		}
	})
}