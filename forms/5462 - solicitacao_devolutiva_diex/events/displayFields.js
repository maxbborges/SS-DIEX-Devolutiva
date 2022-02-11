function displayFields(form, customHTML) {
	customHTML.append("<script> var ATIVIDADE = "+getValue("WKNumState")+";</script>"); 
    // customHTML.append("<script> var USUARIO ="+ getValue("WKUser") + "; </script>");
	// customHTML.append("<script>function getUser(){ return '"+ getValue("WKUser") + "'; }</script>");
	customHTML.append("<script> var FORM_MODE = '" + form.getFormMode() + "';</script>");
	
	// var process = getValue("WKNumProces");
	var activity = getValue('WKNumState');
    // var usuario = getValue('WKUser');


	var usuario = fluigAPI.getUserService().getCurrent();
    form.setValue('current_user_name',usuario.getFullName());
	// var move_type = form.getValue('move_type');
    // var desc_move = form.getValue('desc_move');
	// var historico = form.getValue('Tracking');
	// var nomeAtividade = {
    //     1: 'Inicio',
    //     2: 'Área Responsável',
    //     3: 'Automático',
    //     19: 'Ajustar (GEAD)',
    //     17: 'Fim',
    //     14: 'Auto Atribuir',
    // }

	if (activity == 6) {

    }
    //     var data = new Date();
    //     form.setValue('Tracking', 'Processo iniciado por ' + usuario.getFullName());
    //     // var mes = (data.getMonth()+1);
    //     // if (mes<=9){
    //     //     mes = '0'+mes;
    //     // }
    //     // form.setValue('proc_year', data.getDate()+'/'+mes+'/'+data.getFullYear())
    //     form.setValue('year_save', data.getFullYear());
        
    // } else {
    //     // form.setValue('proc_number', process)
    //     // if (desc_move != '') {
    //     //     historico += ('\nAÇÃO: ' + move_type + '\nDESCRIÇÃO: ' + desc_move+'\n');
    //     // }
    //     // form.setValue('move_type', '');
    //     // form.setValue('desc_move', '');

    //     historico += ('\n\nPROCESSO: ' + process);
    //     historico = historico + '\nUSUARIO: ' + usuario.getFullName();
    //     historico = historico + '\nATIVIDADE: ' + nomeAtividade[activity];
    //     if (desc_move != '') {
    //         historico += ('\nAÇÃO: ' + move_type + '\nDESCRIÇÃO: ' + desc_move);
    //     }
    //     form.setValue('move_type', '');
    //     form.setValue('desc_move', '');
    //     form.setValue('Tracking', historico);
    // }
}