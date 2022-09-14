var rafa = { nome: 'Rafa', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var paulo = { nome: 'Paulo', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
var gui = { nome: 'Gui', vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

var jogadores = [rafa, paulo, gui];

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

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
            <td><button class="botao botao-zerar" onClick="zerarPontos(${i})">Zerar Pontos</button></td>
        </tr>
        `
    }
    tabela.innerHTML = elemento;
}

exiberJogadoresNaTela(jogadores);

function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exiberJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exiberJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exiberJogadoresNaTela(jogadores);
}

function zerarPontos(i) {
    var jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = 0;
    exiberJogadoresNaTela(jogadores);
}

