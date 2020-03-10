function getregfaltas() {
    $.get('/regfaltas', (regfaltas) => { regfaltas.forEach(listarregfaltas) }
    )
}

getregfaltas()

function listarregfaltas(regfaltas){
    $("#lista").append(`
        <tr class="cont">
            <td>${regfaltas.fMat}</td>
            <td>${regfaltas.fAulas}</td>
            <td>${regfaltas.fFaltas}</td>
            <td>Status</td>
            <td>Freq.</td>
            <td></td>
        </tr>
    `)
}