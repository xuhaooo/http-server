const fs = require('fs')
module.exports = {
	index(res) {
		fs.readFile('./index.html', 'utf-8', (err, data) => {
			res.write(data)
			res.end()
		})
	},
	user(postData, res) {
		// post 业务逻辑
		console.log(postData)
	}
}