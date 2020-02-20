$(() => {
    $('#Enviar').click(() => {
        var glossTermo = { 
            glossNome: $("#glossNome").val(),
            glossAutor: $("#glossAutor").val(),
            glossDesc: $("#glossDesc").val(),
            glossRef: $("#glossRef").val(),
            glossMateria: $("#glossMateria").val()
        }
        novaglossTermo(glossTermo)
    })
})   

function novaglossTermo(glossTermo) {
    $.post('/glossTermo', glossTermo)
}