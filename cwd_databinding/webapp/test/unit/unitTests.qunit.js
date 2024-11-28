/* global QUnit */
// https://api.qunitjs.com/config/autostart/
QUnit.config.autostart = false;

sap.ui.require([
	"dbdemo/cwd_databinding/test/unit/AllTests"
], function (Controller) {
	"use strict";
	QUnit.start();
});