/*global define */
define(function (require) {
    'use strict';

    var router = require('plugins/router');

    return {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Home', moduleId: 'viewmodels/home', nav: true },
                { route: 'tasks', title: 'Task List', moduleId: 'viewmodels/tasks', nav: true }
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});