$(document).ready(function () {
    init();
});

function init(){
    $('[name="taListaDevolutivas"]').attr('readonly', 'true')
    $('[name="taListaDevolutivas"]').hide()
    

    if(ATIVIDADE==ACTIVITY.ZERO || ATIVIDADE==ACTIVITY.INICIO){
        $('#usuarios_selecionados').hide()
    } else {
        if (ATIVIDADE!=ACTIVITY.VALIDAR){
            $('[data-field-name="zfAbrirDevolutiva"]').hide()
        }
    }

    if (ATIVIDADE!=ACTIVITY.VALIDAR && ATIVIDADE!=ACTIVITY.FIM){
        $('#div_02').hide()
        $('#rdAbrirDevolutiva').hide()
    }

    if (ATIVIDADE!=ACTIVITY.GERENCIA){
        $('#div_01').hide()
    }

    if (FORM_MODE=='VIEW'){
        $('#div_01').hide()
        $('[data-field-name="zfAbrirDevolutiva"] .form-input div span').css(
            {"color": "#a7a9ac !important",
            "background-color": "#f2f2f2 !important;"})
        $('[name="dtAbrirDevolutiva"]').attr('readonly', 'true')
        $('[name="taAbrirDevolutiva"]').attr('readonly', 'true')
        $('[name="usuarios_selecionados"]').attr('readonly', 'true')
        $('#rdAbrirDevolutiva').hide()
    }

    if (ATIVIDADE==ACTIVITY.GERENCIA){
        $('[name="dtAbrirDevolutiva"]').attr('readonly', 'true')
        $('[name="taAbrirDevolutiva"]').attr('readonly', 'true')
    }

    if (ATIVIDADE==ACTIVITY.VALIDAR){
        $('#appendaqui').append($('[name="taListaDevolutivas"]').val())
        setTimeout(function() {
            $('#zfAbrirDevolutiva option').remove()
        }, 200);
    }

    
}

function setSelectedZoomItem(selectedItem) {
    var proximo_usuario = $('#hidden_lista_proximo_usuario').val()
    var usuarios=$('#usuarios_selecionados').val()

    if (proximo_usuario){
        proximo_usuario=proximo_usuario+','+selectedItem.colleagueId
        usuarios=usuarios+' // '+selectedItem.colleagueName
    } else {
        proximo_usuario=selectedItem.colleagueId
        usuarios=selectedItem.colleagueName
    }
    $('#hidden_lista_proximo_usuario').val(proximo_usuario)
    $('#hidden_proximo_usuario').val(proximo_usuario.split(',')[0])
    $('#usuarios_selecionados').val(usuarios)
}

function removedZoomItem(removedItem) {
    var proximo_usuario = $('#hidden_lista_proximo_usuario').val()
    var usuarios=$('#usuarios_selecionados').val()

    proximo_usuario=proximo_usuario.replace(removedItem.colleagueId+',', '');
    proximo_usuario=proximo_usuario.replace(removedItem.colleagueId, '');

    usuarios=usuarios.replace(removedItem.colleagueName+' // ', '');
    usuarios=usuarios.replace(removedItem.colleagueName, '');

    $('#hidden_lista_proximo_usuario').val(proximo_usuario)
    $('#hidden_proximo_usuario').val(proximo_usuario.split(',')[0])
    $('#usuarios_selecionados').val(usuarios)
}

