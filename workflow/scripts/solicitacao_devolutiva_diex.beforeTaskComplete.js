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
		var dataLimite = hAPI.getCardValue("dtAbrirDevolutiva")
		var arrayPrazoConclusao = dataLimite.split("/");
		var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
		var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
		var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano
		var dataDoPrazo = new Date();
		var threadDaSolicitacao = 0;
		var numeroDaSolicitacao = getValue('WKNumProces');
		var responsavelPelaTarefa = hAPI.getCardValue("hidden_proximo_usuario");
		
		dataDoPrazo.setDate(dia);
		dataDoPrazo.setMonth(mes);
		dataDoPrazo.setFullYear(ano);
		
		var horaDoPrazo = (24*60*60) - 1;
		
		hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dataDoPrazo, horaDoPrazo);
		
		hAPI.setCardValue("ipSituacao", 'Aguardando Respostas')
	}

	log.info("## PROCESSO DEVOLUTIVA BTC ##")
}