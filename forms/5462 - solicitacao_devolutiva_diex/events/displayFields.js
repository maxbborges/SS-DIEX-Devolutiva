function displayFields(form, customHTML) {
	customHTML.append("<script> var ATIVIDADE = "+getValue("WKNumState")+";</script>"); 
	customHTML.append("<script> var FORM_MODE = '" + form.getFormMode() + "';</script>");
	
    var usuario = fluigAPI.getUserService().getCurrent();
	var atividade = getValue('WKNumState');
	var form_mode = form.getFormMode()
	var data = new Date();
	var mes = (data.getMonth()+1);
	var dia = data.getDate()
	if (dia<=9){
        dia = '0'+dia;
    }
    if (mes<=9){
        mes = '0'+mes;
    }
	customHTML.append("<script> var USUARIO = '" + usuario.getFullName() + "';</script>");

	if (atividade==ACTIVITY.ZERO||atividade==ACTIVITY.INICIO){
		form.setValue('ipCadastro',dia+'/'+mes+'/'+data.getFullYear());
		form.setValue('ipSituacao',"Novo");

		 form.setVisibleById('div_01', false);
		 form.setVisibleById('div_02', false);
		 form.setVisibleById('div_03', false);
		 form.setVisibleById('btn_incluir_01', false);
    }

    if (atividade==ACTIVITY.GERENCIA){
		if (form_mode !='MOD'){
			form.setVisibleById('btn_incluir_01', false);
		}
		if(form_mode=="VIEW"){
			form.setVisibleById('div_01', false);
		}
		form.setVisibleById('div_02', false);
		form.setVisibleById('div_03', false);
    } else {
		form.setVisibleById('btn_incluir_01', false);
	}

    if (atividade==ACTIVITY.VALIDAR){
		if (form_mode=='VIEW'){
			form.setVisibleById('div_03', false);
		}
		form.setVisibleById('div_01', false);
    }

    if (atividade==ACTIVITY.FIM){
		form.setVisibleById('div_01', false);
    }
}