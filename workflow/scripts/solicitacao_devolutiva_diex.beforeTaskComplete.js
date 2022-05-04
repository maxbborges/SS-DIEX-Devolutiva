function beforeTaskComplete(colleagueId,nextSequenceId,userList){
	log.info("## PROCESSO DEVOLUTIVA BTC ##")

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

	log.info("## PROCESSO DEVOLUTIVA BTC ##")
}