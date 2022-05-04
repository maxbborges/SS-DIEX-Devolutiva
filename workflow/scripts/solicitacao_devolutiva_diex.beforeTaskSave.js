function beforeTaskSave(colleagueId,nextSequenceId,userList){
    log.info("## PROCESSO DEVOLUTIVA BTS ##")
    
    // var activity = getValue("WKNumState")
    var cardNProcesso = hAPI.getCardValue("ipNumForm");

    if (cardNProcesso==null||cardNProcesso==''){
        hAPI.setCardValue("ipNumForm", getValue("WKNumProces"))
    }

    log.info("## FIM PROCESSO DEVOLUTIVA BTS ##")
}