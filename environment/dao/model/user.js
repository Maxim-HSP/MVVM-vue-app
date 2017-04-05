var mongoose = require("mongoose")
	//定义用户的结构
var UserSchema = new mongoose.Schema({
	username: {
		type: String
	},
	password: {
		type: String
	}
});

//1: 描述model的名称
//2: 描述model的结构
//3: model对应的集合
mongoose.model("users", UserSchema, "users")