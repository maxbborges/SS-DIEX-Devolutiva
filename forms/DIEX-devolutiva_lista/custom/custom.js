$(document).ready(function () {
    init();
});

function init(){
    carregaTabelas()
    console.log("OK")
}

function carregaTabelas(){
    let dataset = (DatasetFactory.getDataset("DSsolicitacao_devolutiva_diex", null, null, null)).values

    setTimeout(()=>{
        var linhasTabela = $('.table tbody tr');
        console.log(linhasTabela)

        for(i=0;i<dataset.length;i++){
            console.log(dataset[i])
            wdkAddChild('tbDevolutivas')
            $('[name="column1_1___'+(i+1)+'"]').text(i+1)
            $('[name="column2_1___'+(i+1)+'"]').text(dataset[i].taAbrirDevolutiva)
            $('[name="column6_1___'+(i+1)+'"]').text(dataset[i].current_user_name)
            $('#column7_1___'+(i+1)).prop('href','https://fluighom.sestsenat.org.br/portal/p/1/ecmnavigation?app_ecm_navigation_doc='+dataset[i].documentid)
        }
    }, 500);

}