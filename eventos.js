let classificar = '?orderBy=nome' // Classifica por ordem alfabetica

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes'+classificar)
    .then( (resposta) => resposta.json())
    .then( (regioes) => {
        regioes.forEach ( (cadaRegiao) => {
            document.getElementById('regiao').innerHTML += `
            <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
            `;
        });
       
    });

function selecionarEstado() {
    let idEstado = document.getElementById('regiao').value 
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idEstado}/estados`+classificar)
    .then( (resposta) => resposta.json())
    .then( (estados) => {
        estados.forEach ( (cadaEstado) => {
            document.getElementById('estado').innerHTML += `
            <option value = "${cadaEstado.id}">${cadaEstado.nome}</option>
            `;
        });
       
    });
}

function selecionarCidade() {
    let idCidade = document.getElementById('estado').value
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idCidade}/microrregioes` +classificar)
    .then( (resposta) => resposta.json())
    .then( (cidade) => {
        cidade.forEach ( (cadaCidade) => {
            document.getElementById('cidade').innerHTML += `
            <option value = "${cadaCidade.id}">${cadaCidade.nome}</option>
            `;
        });
       
    });
}

