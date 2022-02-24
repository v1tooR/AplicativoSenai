$(document).ready(function(){
    // Adicionar movimento suave a todos os componentes
    $("a").on('click', function(event) {

        // Verificar se this.hash tem valor
        if (this.hash !== "") {
        // Evento padrão do JQuery
        event.preventDefault();

        // Guardar hash
        var hash = this.hash;

        // jQuery animate()
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Adicionar # ao acessar a tag
            window.location.hash = hash;
        });
        }
    });
});