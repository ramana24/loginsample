sap.ui.define([
	"sap/ui/core/mvc/Controller",
		"sap/m/MessageBox",
			"sap/m/MessageToast"
], function (Controller,MessageBox,MessageToast) {
	"use strict";

	return Controller.extend("ux.LoginPage.controller.View1", {
		onInit: function () {

		},
		
		onLogin:function(oControlEvent){
	
		
		var oUser = this.getView().byId("userid").getValue();
		var oPwd= this.getView().byId("pwd").getValue();
		
	
		
		if(oUser === oPwd) {
			MessageBox.success("Thank you. You are logged in !");
		}
		else{
			MessageBox.error("Dear" + oUser + "Entered values are incorrect");
		}
		
		}
	});
});