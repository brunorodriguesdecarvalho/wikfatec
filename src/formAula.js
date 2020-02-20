$(() => {
    $('#Enviar').click(() => {
        var regaula = { 
            anotMateria: $("#anotMateria").val(),
            anotDataAula: $("#anotDataAula").val(),
            anotAnota: $("#anotAnota").val(),
            anotDuv: $("#anotDuv").val()
        }
        novaregaula(regaula)
    })
})   

function novaregaula(regaula) {
    $.post('http://localhost:3000/regaula', regaula)
}