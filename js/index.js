var rafa = { nome: 'Rafa', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: 'Paulo', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: 'Gui', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

var jogadores = [rafa, paulo, gui];

exiberJogadoresNaTela(jogadores);

function exiberJogadoresNaTela(jogadores) {
    var tabela = document.querySelector('#tabelaJogadores');
    var elemento = '';

    for (var i = 0; i < jogadores.length; i++) {
        elemento += `
        <tr>
            <td>${jogadores[i].nome}</td>
            <td>${jogadores[i].vitorias}</td>
            <td>${jogadores[i].empates}</td>
            <td>${jogadores[i].derrotas}</td>
            <td>${jogadores[i].pontos}</td>
            <td><button class="botao botao-vitoria" onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button class="botao botao-empate" onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button class="botao botao-derrota" onClick="adicionarDerrota(${i})">Derrota</button></td>
            <td><button class="botao botao-zerar" onClick="zerarNumeros(${i})">Zerar Pontos</button></td>
        </tr>
        `
    }
    tabela.innerHTML = elemento;
}