function zerarNumeros(i) {
    var jogador = jogadores[i];
    jogador.vitorias = 0;
    jogador.empates = 0;
    jogador.derrotas = 0;
    jogador.pontos = 0;
    exiberJogadoresNaTela(jogadores);
}