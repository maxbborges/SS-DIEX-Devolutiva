function displayFields(form, customHTML) {
	customHTML.append("<script> var ATIVIDADE = "+getValue("WKNumState")+";</script>"); 
	customHTML.append("<script> var FORM_MODE = '" + form.getFormMode() + "';</script>");
    
	var activity = getValue('WKNumState');
	var data = new Date();
	var mes = (data.getMonth()+1);
    if (mes<=9){
        mes = '0'+mes;
    }
    
	// var usuario = fluigAPI.getUserService().getCurrent();
   
	if(activity==0||activity==3){
		// form.setValue('current_user_name',usuario.getFullName());
    	form.setValue('ipCadastro',data.getDate()+'/'+mes+'/'+data.getFullYear());
    	form.setValue('ipSituacao',"Novo");
	} 
}