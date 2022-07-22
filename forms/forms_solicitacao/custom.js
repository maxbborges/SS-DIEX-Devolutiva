$(document).ready(function () {
    init();
    habilitar_onchange()
    
    var mySimpleCalendar = FLUIGC.calendar('#dtAbrirDevolutiva',{
        useCurrent: true,
        language: 'pt-br',
        pickDate: true,
    });
    dataAtual = new Date()
    mySimpleCalendar.setDate(dataAtual);
});

function init(){
    $('#validarDevolutiva').val('')
    $('[name="taDevolutiva"]').val('')
    $('[name="tbl_pessoas"]').hide()
    

    if (ATIVIDADE!=ACTIVITY.GERENCIA){
    } else {
        tbl_pessoas = $('[tablename="tbl_pessoas"] input')
        if (tbl_pessoas.length>2 && FORM_MODE=='MOD'){
            $('#hidden_proximo_usuario').val($(tbl_pessoas[4]).val())
            $('#current_user_name').val($(tbl_pessoas[5]).val())
            $(tbl_pessoas[2]).remove()
            $(tbl_pessoas[3]).remove()
        }
    }

    if (ATIVIDADE!=ACTIVITY.INICIO){
        if (ATIVIDADE!=ACTIVITY.ZERO){
            setTimeout(() => {
                $('[name="zfAbrirDevolutiva"]').attr('disabled', 'true')
            }, 200);
        }
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR){
        setTimeout(() => {
            $('[name="dtAbrirDevolutiva"]').attr('readonly', 'true')
            $('[name="taAbrirDevolutiva"]').attr('readonly', 'true')
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
    $('[name="txt_dataInclusao___'+newId+'"]').val(new Date())
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
        console.log($(this).val())
        if($(this).val()=='sim'){
            $('[name="zfAbrirDevolutiva"]').attr('disabled', 'true')
            $('[name="dtAbrirDevolutiva"]').attr('readonly', 'true')
            $('[name="taAbrirDevolutiva"]').attr('readonly', 'true')
        } else {
            $('[name="zfAbrirDevolutiva"]').removeAttr('disabled')
            $('[name="dtAbrirDevolutiva"]').removeAttr('readonly')
            $('[name="taAbrirDevolutiva"]').removeAttr('readonly')
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

