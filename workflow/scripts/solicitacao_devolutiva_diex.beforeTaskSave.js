function beforeTaskSave(colleagueId,nextSequenceId,userList){
    log.info("## PROCESSO DEVOLUTIVA 1 ##")
    
    var activity = getValue("WKNumState")
    var cardNProcesso = hAPI.getCardValue("ipNumForm");

    if (cardNProcesso==null||cardNProcesso==''){
        hAPI.setCardValue("ipNumForm", getValue("WKNumProces"))
    }

    if (activity==4){
        var devolutiva = hAPI.getCardValue("taDevolutiva");
        var taListaDevolutivas = hAPI.getCardValue("taListaDevolutivas");
        var user = hAPI.getCardValue("current_user_name");

        if (taListaDevolutivas && taListaDevolutivas!="" && taListaDevolutivas != undefined){
            taListaDevolutivas=taListaDevolutivas+"<br><br><h4>"+user+"</h4><i>"+devolutiva+"</i>"
        } else {
            taListaDevolutivas="<h4>"+user+"</h4><br><i>"+devolutiva+"</i>"
        }

        hAPI.setCardValue("taDevolutiva", '')
        hAPI.setCardValue("taListaDevolutivas", taListaDevolutivas)
    }

    if (nextSequenceId==4){
        hAPI.setCardValue("current_user_name", userList.toString())
    }

    log.info("## FIM PD 1 ##")
}