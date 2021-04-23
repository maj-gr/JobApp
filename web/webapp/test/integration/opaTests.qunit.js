/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"JobApp/web/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});