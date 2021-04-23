/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"JobApp/web/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});