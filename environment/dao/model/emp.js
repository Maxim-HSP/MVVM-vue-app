var mongoose = require("mongoose")
	//定义用户的结构
var EmpSchema = new mongoose.Schema({
	empName: {
		type: String
	},
	sal: {
		type: String
	},
	job: {
		type: String
	}
});

//1: 描述model的名称
//2: 描述model的结构
//3: model对应的集合
mongoose.model("emp", EmpSchema, "emp")
