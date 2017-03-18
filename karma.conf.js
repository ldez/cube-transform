// Karma configuration
module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    files: [{
        pattern: 'src/**/*.js',
        watched: false
      },
      {
        pattern: 'test/**/*.spec.js',
        watched: false
      }
      // each file acts as entry point for the webpack configuration
    ],

    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
      'src/**/*.js': ['webpack', 'coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'coverage'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Coverage Reporter configuration
    coverageReporter: {
      reporters: [
        // File output
        {
          type: 'html',
          dir: 'coverage/',
          // supprime les dossiers spécifiques à chaque browser
          subdir: '.'
        },
        // Console output
        {
          type: 'text'
        }
      ]
    },

    webpack: {
      // karma watches the test entry points
      // (you don't need to specify the entry option)
      // webpack watches dependencies

      // webpack configuration
      //        entry: path.resolve(__dirname, config.main),
      devtool: 'source-map',
      output: {
        library: process.env.NAME,
        libraryTarget: process.env.TARGET,
        path: __dirname,
        filename: 'build/cube-transform.js'
      },
      module: {
        loaders: [
          {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
    },

    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    }
  });
};
