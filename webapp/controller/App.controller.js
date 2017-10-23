sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"opensap/myapp/model/formatter"
], function(Controller,MessageToast, formatter) {
	"use strict";

	return Controller.extend("opensap.myapp.controller.App", {
		formatter : formatter,
		
		onShowHello:function(){
			//MessageToast.show("Hello openSAP");
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			
			//The array here is the parameter list for the text element. In this case, there is only 1 parameter, which will be used in {0}
			//of helloMsg=Hello {0} in i18n.properties file.
			var sMsg = oBundle.getText("helloMsg", [sRecipient]); 
			MessageToast.show(sMsg);
		}
		

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf view.testView
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf view.testView
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf view.testView
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf view.testView
		 */
		//	onExit: function() {
		//
		//	}

	});

});