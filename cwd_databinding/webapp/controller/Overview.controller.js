sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
], (Controller,formatter) => {
    "use strict";

    return Controller.extend("dbdemo.cwddatabinding.controller.Overview", {
        formatter : formatter,
        onInit() {
        }
    });
});