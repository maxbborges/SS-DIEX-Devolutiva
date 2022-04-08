function beforeTaskComplete(colleagueId,nextSequenceId,userList){
	log.info("## PROCESSO DEVOLUTIVA ##")
	var activity = getValue("WKNumState")
	if(activity!=8){
		var lista_proximo_usuario = hAPI.getCardValue("hidden_lista_proximo_usuario");
		var proximo_usuario = hAPI.getCardValue("hidden_proximo_usuario");
		
		lista_proximo_usuario=lista_proximo_usuario.replace(proximo_usuario+',','')
		lista_proximo_usuario=lista_proximo_usuario.replace(proximo_usuario,'')
	
		hAPI.setCardValue("hidden_lista_proximo_usuario", lista_proximo_usuario)
	
		var arrayProximo =lista_proximo_usuario.split(',')
		hAPI.setCardValue("hidden_proximo_usuario", arrayProximo[0])
	}

	if (nextSequenceId==6){
		hAPI.setCardValue("current_user_name", '')
		hAPI.setCardValue("ipSituacao", 'Validar')
	}
	
	if (nextSequenceId==13){
		hAPI.setCardValue("ipSituacao", 'Finalizada')
	}

	if (nextSequenceId==4){
		hAPI.setCardValue("ipSituacao", 'Aguardando Respostas')
	}
	log.info("COMPETE:")
	log.info(colleagueId)
	log.info(userList)
	log.info("## FIM PD##")
}