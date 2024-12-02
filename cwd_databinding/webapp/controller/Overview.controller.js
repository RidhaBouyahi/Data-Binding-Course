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
        },
        onItemSelected(oEvent) {
            var oSelectedItem = oEvent.getSource(); 
            var obindingCtx = oSelectedItem.getBindingContext("products");
            var sPath = obindingCtx.getPath();
            var oProductDetailPanel = this.byId("productDetailsPanel");
            oProductDetailPanel.bindElement({path : sPath, model : "products"});
        }
    });
});