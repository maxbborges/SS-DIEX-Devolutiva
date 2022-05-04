function enableFields(form) {
    atividade = getValue("WKNumState")
    if (atividade==ACTIVITY.ZERO||atividade==ACTIVITY.INICIO||atividade==ACTIVITY.VALIDAR){
    } else {
        divs = DIV_00
        for (i=0;i<divs.length;i++){
            form.setEnabled(divs[i], false);
        }
    }

    if (atividade==ACTIVITY.GERENCIA){
    } else {
        divs = DIV_01
        for (i=0;i<divs.length;i++){
            form.setEnabled(divs[i], false);
        }
    }

    if (atividade==ACTIVITY.VALIDAR){
    } else {
        divs = DIV_03
        for (i=0;i<divs.length;i++){
            form.setEnabled(divs[i], false);
        }
    }

    if (atividade==ACTIVITY.GERENCIA){
    } else {
        divs = DIV_01
        for (i=0;i<divs.length;i++){
            form.setEnabled(divs[i], false);
        }
    }

    if (atividade==ACTIVITY.FIM){
    } else {
    }

}