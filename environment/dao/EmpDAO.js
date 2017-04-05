var mongoose = require("mongoose")
module.exports.getAllEmp = function(callback) {
	var EmpModel = mongoose.model("emp");
	EmpModel.find(function(err, data) {
		callback(data);
	})
}

module.exports.getEmpByPage = function(page, callback) {
	var EmpModel = mongoose.model("emp");
	EmpModel.count(function(err, data) {
		page.count = data;
		page.maxPage = Math.ceil(page.count / page.eachPage);
		EmpModel
			.find()
			.skip((page.curPage - 1) * page.eachPage)
			.limit(~~page.eachPage)
			.sort({
            //1升序，2降序
				_id: 1
			})
			.exec(function(err, data) {
				page.data = data;
				callback(page)
			})
	})
}

module.exports.delById = function(_id, callback) {
	var EmpModel = mongoose.model("emp");
	EmpModel.remove({
		_id: _id
	}, function(err, data) {
		callback("true")
	})
}