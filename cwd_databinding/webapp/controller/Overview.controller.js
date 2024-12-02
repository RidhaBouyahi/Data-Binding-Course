sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter",
    "../model/formatterValue"
], (Controller,formatter,formatterValue) => {
    "use strict";

    return Controller.extend("dbdemo.cwddatabinding.controller.Overview", {
        formatter : formatter,
        formatterValue : formatterValue,
        onInit() {
        }
    });
});