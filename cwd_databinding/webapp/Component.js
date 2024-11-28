sap.ui.define([
    "sap/ui/core/UIComponent",
    "dbdemo/cwddatabinding/model/models"
], (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("dbdemo.cwddatabinding.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            //One-Way Data Binding for the model data
            this.getModel("data").setDefaultBindingMode("OneWay");

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});