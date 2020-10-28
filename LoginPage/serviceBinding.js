function initModel() {
	var sUrl = "/ES5EPM/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}