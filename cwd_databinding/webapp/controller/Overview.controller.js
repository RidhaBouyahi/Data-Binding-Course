sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/m/ObjectAttribute", "../model/formatter", "../model/formatterValue"
], (Controller, ObjectAttribute, formatter, formatterValue) => {
    "use strict";

    return Controller.extend("dbdemo.cwddatabinding.controller.Overview", {
        formatter: formatter,
        formatterValue: formatterValue,
        onInit() {},
        onItemSelected(oEvent) {
            var oSelectedItem = oEvent.getSource();
            var obindingCtx = oSelectedItem.getBindingContext("products");
            var sPath = obindingCtx.getPath();
            var oProductDetailPanel = this.byId("productDetailsPanel");
            oProductDetailPanel.bindElement({path: sPath, model: "products"});
        },
        productListFactory(sId, oContext) {
            let oUIControl;

            // Decide based on the data which dependent to clone
            if (oContext.getProperty("UnitsInStock") === 0 && oContext.getProperty("Discontinued")) { // The item is discontinued, so use a StandardListItem
                oUIControl = this.byId("productSimple").clone(sId);
            } else { // The item is available, so we will create an ObjectListItem
                oUIControl = this.byId("productExtended").clone(sId);

                // The item is temporarily out of stock, so we will add a status
                if (oContext.getProperty("UnitsInStock") < 1) {
                    oUIControl.addAttribute(new ObjectAttribute({
                        text: {
                            path: "i18n>outOfStock"
                        }
                    }));
                }
            }

            return oUIControl;
        }
    });
});
