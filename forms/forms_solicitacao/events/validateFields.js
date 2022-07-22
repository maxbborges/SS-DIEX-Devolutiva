function validateForm(form) {
  var wkactivity = getValue('WKNumState');
  // ABERTURA
  if (wkactivity==ACTIVITY.ZERO || wkactivity==ACTIVITY.INICIO){
    if (form.getValue('zfAbrirDevolutiva') == null || form.getValue('zfAbrirDevolutiva') == ""){
      exibirMensagem("Necessário preencher o(s) usuário(s) para abertura!")
    }
    if (form.getValue('taAbrirDevolutiva') == null || form.getValue('taAbrirDevolutiva') == ""){
      exibirMensagem("Necessário preencher o assunto para abertura!")
    }
    if (form.getValue('hidden_proximo_usuario') == null || form.getValue('hidden_proximo_usuario') == ""){
      exibirMensagem("Necessário selecionar ao menos um usuário para encaminhamento!")
    }
  }

  // DEVOLUTIVA
  if (wkactivity==ACTIVITY.GERENCIA){
    if (form.getValue('taDevolutiva') == null || form.getValue('taDevolutiva') == ""){
      exibirMensagem("Necessário preencher o resposta da devolutiva!")
    }
    if (form.getValue('validarDevolutiva') == null || form.getValue('validarDevolutiva') == ""){
      exibirMensagem("Necessário INCLUIR a devolutiva!")
    } 
  }

  if (wkactivity==6){
    if ((form.getValue('rdAbrirDevolutiva') == null || form.getValue('rdAbrirDevolutiva') == "")){
      exibirMensagem("Necessário preencher se as devolutivas foram aceitas!")
    }
    if (form.getValue('rdAbrirDevolutiva')=='nao'){
      if (form.getValue('hidden_proximo_usuario') == null || form.getValue('hidden_proximo_usuario') == ""){
        exibirMensagem("Necessário selecionar ao menos um usuário para encaminhamento!")
      }
      if (form.getValue('taAbrirDevolutiva') == null || form.getValue('taAbrirDevolutiva') == ""){
        exibirMensagem("Necessário preencher o assunto para abertura!")
      }
    }
  }
}

 function exibirMensagem(mensagem){
	// var mobile = form.getMobile() != null && form.getMobile();
	
	// if (mobile) {
	// 	throw mensagem;
	// } else {
		throw "<div class='alert alert-warning' role='alert'>" +
				"<strong>Atenção:</strong> "+mensagem+
			  "</div>"+
			  "<i class='fluigicon fluigicon-tag icon-sm'></i> <font style='font-weight: bold'>Dúvidas?</font> Entre em contato com o departamento de TI.";		
	// } // else if
} // exibirMensagem