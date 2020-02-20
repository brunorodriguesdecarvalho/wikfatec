function getglossTermo() {
    $.get('/glossTermo', (glossTermo) => { glossTermo.forEach(listarglossTermo) }
    )
}

getglossTermo()

function listarglossTermo(glossTermo){
    $("#app").append(`
        <div id="anot">
            <h2><strong>${glossTermo.glossNome}</strong></h2>
            <ul>
                <li><strong>Autor: </strong>${glossTermo.glossAutor}</li>
                <br>
                <li><strong>Referência (assunto): </strong>${glossTermo.glossMateria}</li>
                <br>
                <li>
                    <strong>Descrição do termo: </strong>
                    <br>
                    ${glossTermo.glossDesc}
                </li>
                <br>
                <li>
                    <strong>Links para referências externas ou Bibliografia: </strong>
                    <br>
                    ${glossTermo.glossRef}
                </li>
            </ul>
        </div>
        <br>
    `)
}