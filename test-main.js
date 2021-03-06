'use strict';

var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function (path) {
    return path.replace(/^\/base\/app\//, '').replace(/^\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        allTestFiles.push(pathToModule(file));
    }
});
require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/app',
    paths: {
        'durandal': '../bower_components/durandal/js',
        'jquery': '../bower_components/jquery/jquery',
        'knockout': '../bower_components/knockout.js/knockout',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'knockout-mapping': '../bower_components/knockout-mapping/knockout.mapping'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    },
    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff mocha, as it is asynchronous
    callback: window.__karma__.start
});
