function getregaula() {
    $.get('/regaula', (regaula) => { regaula.forEach(listarregaula) }
    )
}

getregaula()

function listarregaula(regaula){
    $("#app").append(`
        <div id="anot">
            <h2><strong>${regaula.anotMateria}</strong></h2>
            <ul>
                <li><strong>Data da Aula: </strong>${regaula.anotDataAula}</li>
                <br>
                <li>
                    <strong>Anotações: </strong>
                    <br>
                    ${regaula.anotAnota}
                </li>
                <br>
                <li>
                    <strong>Dúvidas remanescentes: </strong>
                    <br>
                    ${regaula.anotDuv}
                </li>
            </ul>
        </div>
        <br>
    `)
}