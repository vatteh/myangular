module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'browserify'],
        files: [
            './src/**/*.js',
            './test/**/*.spec.js'
        ],
        preprocessors: {
            './test/**/*.js': ['jshint', 'browserify'],
            './src/**/*.js': ['jshint', 'browserify']
        },
        browsers: ['PhantomJS'],
        browserify: {
            debug: true
        }
    });
};
