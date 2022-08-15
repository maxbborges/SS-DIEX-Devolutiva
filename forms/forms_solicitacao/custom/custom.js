$(document).ready(function () {
    init();
    habilitar_onchange();
    loadMasks();
    loadZooms();
    
    

//    setTimeout(() => {
//        dados=$('.title-form-application').nextAll('[type="hidden"]')
//        dados = $("input[type='hidden']")
//        for (i = 0; i < dados.length; i++) {
//            dados[i].type = 'text'
//        }
//        $('[name="tbl_pessoas"]').show()
//    }, 500);
    
    // var mySimpleCalendar = FLUIGC.calendar('#dtAbrirDevolutiva',{
    //     useCurrent: true,
    //     language: 'pt-br',
    //     pickDate: true,
    // });
    // dataAtual = new Date()
    // mySimpleCalendar.setDate(dataAtual);
});

function init(){
    $('#validarDevolutiva').val('')
    $('[name="taDevolutiva"]').val('')
    $('[name="tbl_pessoas"]').hide()
    
    
    if (ATIVIDADE==ACTIVITY.INICIO || ATIVIDADE==ACTIVITY.ZERO){
        $('[name="ipCadastro"]').val(new Date().toLocaleDateString())
        $('#dtAbrirDevolutiva').val(new Date().toLocaleDateString())
        hideBlockDivs(['div_00'])
    } else if (ATIVIDADE==ACTIVITY.GERENCIA){
        hideBlockDivs(['div_01'])
        tbl_pessoas = $('[tablename="tbl_pessoas"] input')
        if (tbl_pessoas.length>2 && FORM_MODE=='MOD'){
            $('#hidden_proximo_usuario').val($(tbl_pessoas[4]).val())
            $('#current_user_name').val($(tbl_pessoas[5]).val())
            $(tbl_pessoas[2]).remove()
            $(tbl_pessoas[3]).remove()
        }

        if($('[name="rdAbrirDevolutiva"]:checked').val()=='nao'){
            $('#div_03').show()
        }
    } else if (ATIVIDADE==ACTIVITY.VALIDAR){
        $('[name="dtNovoPrazo"]').val(new Date().toLocaleDateString())
        hideBlockDivs(['div_02','div_03'])
        $('#div_01').hide()
        setTimeout(() => {
            $('.divZfNovosGerentes').hide()
            $('.divDtNovoPrazo').hide()
            $('[name="rdAbrirDevolutiva"]').prop('checked',false)
            window["zfNovosGerentes"].clear()
        }, 200);
    }

    if (FORM_MODE=='VIEW'){
        $('#div_01').hide()
    }
}

function addItemTabela(){
    txt_devolutiva = $('[name="taDevolutiva"]').val()
    if (txt_devolutiva==''){
        FLUIGC.toast({
            title: '',
            message: 'Necessário incluir uma devolutiva',
            type: 'danger'
        });
        throw "Incluir Devolutiva"
    }

    wdkAddChild('tbl_devolutivas')
    $('[name="reponsavel___'+newId+'"]').val(USUARIO)
    $('[name="txt_dataInclusao___'+newId+'"]').val(new Date().toLocaleDateString())
    $('[name="taListaDevolutivas___'+newId+'"]').val($('[name="taDevolutiva"]').val())
    $('#validarDevolutiva').val('True')

    FLUIGC.toast({
        title: '',
        message: 'Texto Salvo, enviar para proxima etapa!',
        type: 'success'
    });
}

function habilitar_onchange(){
    $('[name="rdAbrirDevolutiva"]').on('change',function(){
        if($(this).val()=='sim'){
            $('.divZfNovosGerentes').hide()
            $('.divDtNovoPrazo').hide()
        } else {
            $('.divZfNovosGerentes').show()
            $('.divDtNovoPrazo').show()
        }
    })
}

function setSelectedZoomItem(selectedItem) {
    wdkAddChild('tbl_pessoas')
    $('#nome___'+newId).val(selectedItem.fullName)
    $('#matricula___'+newId).val(selectedItem.code)
    $('#hidden_proximo_usuario').val($($('[tablename="tbl_pessoas"] input')[2]).val())
    $('#current_user_name').val($($('[tablename="tbl_pessoas"] input')[3]).val())
}

function removedZoomItem(removedItem) {
    var lista_proximo_usuario = $('[tablename="tbl_pessoas"] input')
    for (var i=2; i<lista_proximo_usuario.length;i++){
        if ($(lista_proximo_usuario[i]).val()==removedItem.code){
            if (i==2){
                $('#hidden_proximo_usuario').val($(lista_proximo_usuario[4]).val())
                $('#current_user_name').val($(lista_proximo_usuario[5]).val())
            }
            $($(lista_proximo_usuario[i]).parents()[1]).remove()
        }
    }
}

function loadZooms(){
    header = "[{ 'field':'fullName','label':'Nome','standard':'true','visible':'true'},"+
    "{ 'field':'email','label':'E-mail','visible':'true'},"+
    "{ 'field':'code','label':'codigo','visible':'false' }]"
    createZoom('fullName','fluig_consulta_usuariosDoGrupo','10','Selecione os usuários','cdGrupo,_DGEA',header,'#zfAbrirDevolutiva')
    createZoom('fullName','fluig_consulta_usuariosDoGrupo','10','Selecione os usuários','cdGrupo,_DGEA',header,'#zfNovosGerentes')
}

var beforeSendValidate = function (numState, nextState) {
	// var a = hAPI.getCardValue("ipCadastro")
	// console.log('aaa')
	// console.log(a)
    // throw "a"
    console.log(nextState)
    console.log(numState)
    
    if (numState==4){
        addItemTabela()
    }
}