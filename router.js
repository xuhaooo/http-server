const fs = require('fs')
const controller = require('./controller')
const url = require('url')
module.exports = (req, res) => {
	if (req.method === 'GET') {
		if (req.url === '/') {
			controller.index(res)
		} else {
			fs.readFile('./monica.png', (err, data) => {
				res.end(data)
			})
		}
	} else if (req.method === 'POST') {
		let data = '' 
		req.on('data', reqData => {
			data += reqData
		})
		req.on('end', () => {
			controller.user(require('querystring').parse(data), res)
		})
	}
}