function afterTaskCreate(colleagueId){
	log.info("## PROCESSO DEVOLUTIVA ATC ##")
	
	var atividade = getValue('WKCurrentState');
	log.info("Atividade: "+ atividade)
	
	if (atividade == 4){
		if (hAPI.getCardValue("rdAbrirDevolutiva")=='nao'){
			var arrayPrazoConclusao = (hAPI.getCardValue("dtNovoPrazo")).split("/");
		} else {
			var arrayPrazoConclusao = (hAPI.getCardValue("dtAbrirDevolutiva")).split("/");
		}
		
		var dia = arrayPrazoConclusao[0]; // Posição 0 do array é o dia
		var mes = arrayPrazoConclusao[1] - 1; // Posição 1 do array é o mês (Subtraímos 1 porque na data do Javascript o mês vai de 0 a 11)
		var ano = arrayPrazoConclusao[2]; // Posição 2 do array é o ano

		var threadDaSolicitacao = 0;
		var numeroDaSolicitacao = getValue('WKNumProces');
		var responsavelPelaTarefa = colleagueId
		var horaDoPrazo = (24*60*60) - 1;
		
		var dataDoPrazo = new Date();
		dataDoPrazo.setDate(dia);
		dataDoPrazo.setMonth(mes);
		dataDoPrazo.setFullYear(ano);
		
		hAPI.setDueDate(numeroDaSolicitacao, threadDaSolicitacao, responsavelPelaTarefa, dataDoPrazo, horaDoPrazo);
	}
}