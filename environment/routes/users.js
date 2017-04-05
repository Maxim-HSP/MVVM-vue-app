var express = require('express');
var router = express.Router();
var UserService = require('../service/UserService.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('hahahah');
});

//req: 请求对象, 封装页面传递的数据
router.get("/login", function(req, res) {
	UserService.login(req.query, function(data) {
        console.log(req.query);
		if (eval(data)) {
			req.session.username = req.query.username;
			res.cookie("username", "lis", {
				maxAge: 1000 * 60 * 60
			})
		}
		res.send(data)
	})
})
router.get("/", function(req, res) {
	if (req.session.username) {
		res.send("true")
	} else {
		res.send("false")
	}
})


router.get("/reg", function(req, res) {
	UserService.reg(req.query, function(data) {
		res.send(data)
	})
})

router.get("/isUse", function(req, res) {
	UserService.isUse(req.query, function(data) {
		res.send(data)
	})
})

module.exports = router;