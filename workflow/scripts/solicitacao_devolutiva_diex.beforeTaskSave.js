function beforeTaskSave(colleagueId,nextSequenceId,userList){
    
    
    log.info("## PROCESSO DEVOLUTIVA 1 ##")
    if (getValue("WKNumState")==4){
        var devolutiva = hAPI.getCardValue("taDevolutiva");
        var taListaDevolutivas = hAPI.getCardValue("taListaDevolutivas");
        var user = hAPI.getCardValue("current_user_name");
        log.info(devolutiva)
        log.info(taListaDevolutivas)
        log.info(user)
        if (taListaDevolutivas && taListaDevolutivas!="" && taListaDevolutivas != undefined){
            taListaDevolutivas=taListaDevolutivas+"<br><br><h4>"+user+"</h4><i>"+devolutiva+"</i>"
        } else {
            taListaDevolutivas="<h4>"+user+"</h4><br><i>"+devolutiva+"</i>"
        }

        hAPI.setCardValue("taDevolutiva", '')
        hAPI.setCardValue("taListaDevolutivas", taListaDevolutivas)
    }


    log.info("## FIM PD 1 ##")
}