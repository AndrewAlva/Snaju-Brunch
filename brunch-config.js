module.exports = {
	files: {
		javascripts: {
			joinTo: 'public/js/app.js',
			order: {
				before: 'app/js/initialize.js'
			}
		},
		stylesheets: {joinTo: 'public/css/app.css'}
	},

	paths: {
		public: 'build'
	},

	npm: {
		enabled: false
	},

	modules: {
		wrapper: false,
		definition: false
	}
}