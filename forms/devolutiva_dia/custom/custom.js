$(document).ready(function () {
    init();
});

function init(){
    var data = new Date();

	var mes = (data.getMonth()+1);
    if (mes<=9){
        mes = '0'+mes;
    }

    var dia = (data.getDate());
    if (dia<=9){
        dia = '0'+dia
    }

    var ano = data.getFullYear()
    carregaTabelas(ano,mes,dia)
}

function carregaTabelas(ano,mes,dia){
    var dataFormatada = ano+'-'+mes+'-'+dia
    var dataFormatadaBR = dia+'/'+mes+'/'+ano
    constraints = [ 
        DatasetFactory.createConstraint("dtAbrirDevolutiva", dataFormatadaBR, dataFormatadaBR, ConstraintType.MUST)
    ];
    let dataset = (DatasetFactory.getDataset("DSsolicitacao_devolutiva_diex", null, constraints, null)).values
    console.log(dataset)
    setTimeout(()=>{
        for(i=0;i<dataset.length;i++){
            wdkAddChild('tbDevolutivasDiarias')
            $('[name="column1_1___'+(i+1)+'"]').text(dataset[i].taAbrirDevolutiva)
            $('[name="column2_1___'+(i+1)+'"]').text(dataFormatadaBR)
            
            $('#column4_1___'+(i+1)).text(dataset[i].ipSituacao)
            $('#column5_1___'+(i+1)).attr('onClick','window.open("https://fluighom.sestsenat.org.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc='+dataset[i].documentid+'","_blank")')
            $('#column6_1___'+(i+1)).attr('onClick','window.open("https://fluighom.sestsenat.org.br/portal/p/1/pageworkflowview?app_ecm_workflowview_detailsProcessInstanceID='+dataset[i].ipNumForm+'","_blank")')

            proximoUsuario = (dataset[i].current_user_name).replace("[",'').replace("]",'')
            constraints = [ 
                DatasetFactory.createConstraint("colleagueId", proximoUsuario, proximoUsuario, ConstraintType.MUST)
            ];
            let datasetUsuario = (DatasetFactory.getDataset("colleague", null, constraints, null)).values
            
            if (datasetUsuario.length>0){
                $('[name="column3_1___'+(i+1)+'"]').text(datasetUsuario[0].colleagueName)
            }
        }

        // var proximoUsuario = $('current_user_name').replace("[",'').replace("]",'')
        // var nomeUsuario = fluigAPI.getUserService().findByUserCode(proximoUsuario)
        // form.setValue('current_user_name',nomeUsuario.getFullName());
        // console.log(nomeUsuario)
    }, 500);

}