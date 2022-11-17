$(document).ready(function () {
    init();
    loadMasks()
});

function init(){
    if(FORM_MODE == "VIEW"){
        carregaTabelas()
    }
    
    console.log("OK")
}

function carregaTabelas(){
    filtroNome=$('[name="filtroNomes"]').text()
    filtroData=$('[name="filtroData"]').text()
    filtroDataLimite=$('[name="filtroDataLimite"]').text()
    filtroStatus=$('[name="filtroStatus"]').text()
    let constraints=[]

    if (filtroNome!='' && filtroNome!=null && filtroNome!='\xa0' && filtroNome!='Selecione um nome'){
        constraints.push(DatasetFactory.createConstraint("current_user_name", filtroNome, filtroNome, ConstraintType.MUST))
    }
    if (filtroData!='' && filtroData!=null  && filtroData!='\xa0'){
        constraints.push(DatasetFactory.createConstraint("dtAbrirDevolutiva", filtroData, filtroData, ConstraintType.MUST))
    }

    if (filtroStatus!='' && filtroStatus!=null  && filtroStatus!='\xa0' && filtroStatus!='Selecione um status'){
        if (filtroStatus=='Não Finalizada'){
            constraints.push(DatasetFactory.createConstraint("ipSituacao", 'Finalizada', "Finalizada", ConstraintType.MUST_NOT))
        } else {
            constraints.push(DatasetFactory.createConstraint("ipSituacao", filtroStatus, filtroStatus, ConstraintType.MUST))
        }
    }

    console.log(constraints)

    let dataset = (DatasetFactory.getDataset("DSSolicitacaoDeDevolutiva", null, constraints, null)).values

    setTimeout(()=>{
        var linhasTabela = $('.table tbody tr');
        if (dataset.length==0){
            FLUIGC.toast({
                title: '',
                message: 'Nenhuma devolutiva encontrada',
                type: 'danger'
            });
        }

        for(i=0;i<dataset.length;i++){
            if(filtroDataLimite!='' && filtroDataLimite!='\xa0'){
                if (comparaDatas(filtroDataLimite,dataset[i].dtAbrirDevolutiva)==false)
                    continue;
            }

            if (filtroStatus!='Finalizada'){
                constraints=[DatasetFactory.createConstraint("processTaskPK.processInstanceId", dataset[i].ipNumForm, dataset[i].ipNumForm, ConstraintType.MUST)]
                let status = (DatasetFactory.getDataset("processTask", ['status','processTaskPK.colleagueId'], constraints, null)).values
                if(status[status.length-1].status==4){
                    if(filtroStatus!='' && filtroStatus!=null  && filtroStatus!='\xa0'){
                        continue;
                    }
                    dataset[i].ipSituacao='Cancelado'
                }
                console.log(status[status.length-1]['processTaskPK.colleagueId'])
                if(status[status.length-1]['processTaskPK.colleagueId']!='Pool:Group:DIEX'&&status[status.length-1]['processTaskPK.colleagueId']!='System:Auto'){
                    constraints=[DatasetFactory.createConstraint("colleaguePK.colleagueId", status[status.length-1]['processTaskPK.colleagueId'], status[status.length-1]['processTaskPK.colleagueId'], ConstraintType.MUST)]
                    let colleagues = (DatasetFactory.getDataset("colleague", ['colleagueName'], constraints, null)).values
                    dataset[i].current_user_name=colleagues[colleagues.length-1].colleagueName
                } else {
                    dataset[i].current_user_name="Secretárias"
                }
            }

            if (dataset[i].rdAbrirDevolutiva!=''){
                dataset[i].dtAbrirDevolutiva=dataset[i].dtNovoPrazo
            }
            
            wdkAddChild('tbDevolutivas')
            console.log(dataset[i])
            $('[name="column2_1___'+(i+1)+'"]').text(dataset[i].taAbrirDevolutiva)
            $('[name="column3_1___'+(i+1)+'"]').text(dataset[i].dtAbrirDevolutiva)
            $('[name="column4_1___'+(i+1)+'"]').text(dataset[i].ipCadastro)
            $('[name="column5_1___'+(i+1)+'"]').text(dataset[i].ipSituacao)
            $('[name="column6_1___'+(i+1)+'"]').text(dataset[i].current_user_name)
            $('#column7_1___'+(i+1)).prop('href','https://fluighom.sestsenat.org.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc='+dataset[i].documentid)
            $('#column8_1___'+(i+1)).prop('href','https://fluighom.sestsenat.org.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+dataset[i].ipNumForm)
        }
    }, 500);

}

function comparaDatas(dataInicial,dataFinal){
    var iData=dataInicial.split('/').reverse().join('/');
    var fData=dataFinal.split('/').reverse().join('/');
    if (new Date(iData)>= new Date(fData)){
        return true
    }
    return false
}

function loadMasks() {
    $('.date').mask('00/00/0000');
    $('.money').mask('000.000.000.000.000,00', { reverse: true });
    $('.cpf').mask('000.000.000-00', { reverse: true });
    $('.percent').mask('##0,00%', { reverse: true });
}