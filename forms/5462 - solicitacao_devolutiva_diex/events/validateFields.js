function validateForm(form) {
  var wkactivity = getValue('WKNumState');
  if (wkactivity==0 || wkactivity==1 || wkactivity==3){
    if (form.getValue('zfAbrirDevolutiva') == null || form.getValue('zfAbrirDevolutiva') == ""){
      exibirMensagem("Necessário preencher o usuários para abertura!")
    }
    if (form.getValue('taAbrirDevolutiva') == null || form.getValue('taAbrirDevolutiva') == ""){
      exibirMensagem("Necessário preencher o assunto para abertura!")
    }
    // if (form.getValue('dtAbrirDevolutiva') == null || form.getValue('dtAbrirDevolutiva') == ""){
    //   exibirMensagem(forn,"erro!")
    // } 
  }

  if (wkactivity==4){
    if (form.getValue('taDevolutiva') == null || form.getValue('taDevolutiva') == ""){
      exibirMensagem("Necessário preencher o resposta da devolutiva!")
    } 
  }

  if (wkactivity==6){
    // if ($('[name="rdAbrirDevolutiva"]:checked').val())
    if (form.getValue('rdAbrirDevolutiva') == null || form.getValue('rdAbrirDevolutiva') == ""){
      exibirMensagem("Necessário preencher se as devolutivas foram aceitas!")
    }
    if (form.getValue('taAbrirDevolutiva') == null || form.getValue('taAbrirDevolutiva') == ""){
      exibirMensagem("Necessário preencher o assunto para abertura!")
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