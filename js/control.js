$( document ).ready(function() {
    var diapositiva = 0;

    $(document).keydown(function(e) {
        if(e.originalEvent.code == "ArrowRight" || e.originalEvent.code == 'Space'){
            console.log(diapositiva);
            if(diapositiva<8){
                diapositiva = diapositiva+1;
            }else if(diapositiva==8){
                $('#progressbar').css("width", "0");
                return;
            }
            var porcentaje_actual = diapositiva*12.5;
            $('#progressbar').css("width", porcentaje_actual+'%');
            console.log(porcentaje_actual);
        } else if(e.originalEvent.code == "ArrowLeft"){
            if(diapositiva>0){
                diapositiva = diapositiva-1;
            }
            var porcentaje_actual = diapositiva*12.5
            $('#progressbar').css("width", porcentaje_actual+'%');
        }
    });

});