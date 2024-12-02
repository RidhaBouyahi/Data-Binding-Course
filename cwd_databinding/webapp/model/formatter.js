sap.ui.define([
    "sap/m/library"
], (mobileLibrary) => {
    "use strict";

    return {
        formatMail(sFirstName, sLastName) {
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            return mobileLibrary.URLHelper.normalizeEmail(
                `${sFirstName}.${sLastName}@example.com`,
                oBundle.getText("mailSubject", [sFirstName]),
                oBundle.getText("mailBody")
            )
        }

    };
});