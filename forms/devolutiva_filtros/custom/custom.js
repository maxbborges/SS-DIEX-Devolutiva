$(document).ready(function () {
    init();
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
    filtroStatus=$('[name="filtroStatus"]').text()
    let constraints=[]

    console.log(filtroData)
    console.log(filtroNome)


    if (filtroNome!='' && filtroNome!=null && filtroNome!='\xa0' && filtroNome!='Selecione um nome'){
        constraints.push(DatasetFactory.createConstraint("current_user_name", filtroNome, filtroNome, ConstraintType.MUST))
    }
    if (filtroData!='' && filtroData!=null  && filtroData!='\xa0'){
        constraints.push(DatasetFactory.createConstraint("dtAbrirDevolutiva", filtroData, filtroData, ConstraintType.MUST))
    }

    if (filtroStatus!='' && filtroStatus!=null  && filtroStatus!='\xa0' && filtroStatus!='Selecione um status'){
        constraints.push(DatasetFactory.createConstraint("ipSituacao", filtroStatus, filtroStatus, ConstraintType.MUST))
    }
    console.log(constraints)

    let dataset = (DatasetFactory.getDataset("DSsolicitacao_devolutiva_diex", null, constraints, null)).values

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
            wdkAddChild('tbDevolutivas')
            $('[name="column2_1___'+(i+1)+'"]').text(dataset[i].taAbrirDevolutiva)
            $('[name="column3_1___'+(i+1)+'"]').text(dataset[i].dtAbrirDevolutiva)
            $('[name="column4_1___'+(i+1)+'"]').text(dataset[i].ipCadastro)
            $('[name="column5_1___'+(i+1)+'"]').text(dataset[i].ipSituacao)
            $('[name="column6_1___'+(i+1)+'"]').text(dataset[i].current_user_name)
            $('#column7_1___'+(i+1)).prop('href','https://fluighom.sestsenat.org.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc='+dataset[i].documentid)
        }
    }, 500);

}