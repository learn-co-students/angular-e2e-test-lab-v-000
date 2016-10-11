exports.config = {
	seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
	specs: ['spec/server.js', 'spec/**/*.spec.js'],
	capabilities: {
        'browserName': 'firefox'
  },
	rootElement: '.app'
};