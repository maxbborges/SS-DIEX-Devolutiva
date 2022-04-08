function displayFields(form, customHTML) {
	customHTML.append("<script> var ATIVIDADE = "+getValue("WKNumState")+";</script>"); 
    // customHTML.append("<script> var USUARIO ="+ getValue("WKUser") + "; </script>");
	// customHTML.append("<script>function getUser(){ return '"+ getValue("WKUser") + "'; }</script>");
	customHTML.append("<script> var FORM_MODE = '" + form.getFormMode() + "';</script>");
}