const proxySetting = {
	'/api/': {
		target: 'https://api.uomg.com',
		changeOrigin: true,
	},
}

module.exports = proxySetting