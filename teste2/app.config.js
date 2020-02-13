'use strict';
angular
    .module('app.config', [])
    .config(configs);

function configs($locationProvider) {
    /* $locationProvider.html5Mode({ enabled: true, requireBase: false }); */
}