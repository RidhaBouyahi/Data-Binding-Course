sap.ui.define(["sap/ui/model/type/Currency"],(Currency)=> {
    "use sctrict"
    return {
        formatStockValue (sUprice,sUstock,sCurrCode) {
            var oCurrency = new Currency();
            return oCurrency.formatValue([sUprice * sUstock , sCurrCode],"string");
        }
    };
    
})