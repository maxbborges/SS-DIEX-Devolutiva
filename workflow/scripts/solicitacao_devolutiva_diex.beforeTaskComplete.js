function beforeTaskComplete(colleagueId,nextSequenceId,userList){
	log.info("## PROCESSO DEVOLUTIVA ##")
	if(getValue("WKNumState")!=8){
		var lista_proximo_usuario = hAPI.getCardValue("hidden_lista_proximo_usuario");
		var proximo_usuario = hAPI.getCardValue("hidden_proximo_usuario");
		
		lista_proximo_usuario=lista_proximo_usuario.replace(proximo_usuario+',','')
		lista_proximo_usuario=lista_proximo_usuario.replace(proximo_usuario,'')
	
		hAPI.setCardValue("hidden_lista_proximo_usuario", lista_proximo_usuario)
	
		var arrayProximo =lista_proximo_usuario.split(',')
		hAPI.setCardValue("hidden_proximo_usuario", arrayProximo[0])
	}
	log.info("## FIM PD##")
}