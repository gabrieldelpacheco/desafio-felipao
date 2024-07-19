const balanceMessage = "O Herói tem de saldo de ";//mensagem de saldo
const levelMessage = "está no nível de ";//mensagem de level
const victory = 300;//variavel de vitorias
const defeat = 10;//variavel de derrotas
const calcRankeadas = balanceRankeado(victory, defeat);
console.log(classificationRank(calcRankeadas));

function balanceRankeado(victory, defeat) {
    return victory - defeat;
}

function classificationRank(calcRankeadas) {
    if (calcRankeadas < 10) {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Ferro.`
    } else if (calcRankeadas >= 11 && calcRankeadas <= 20) {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Bronze.`
    } else if (calcRankeadas >= 21 && calcRankeadas <= 50) {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Prata.`
    } else if (calcRankeadas >= 51 && calcRankeadas <= 80) {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Ouro.`
    } else if (calcRankeadas >= 81 && calcRankeadas <= 90) {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Diamante.`
    } else if (calcRankeadas >= 91 && calcRankeadas <= 100) {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Lendário.`
    } else {
        return `${balanceMessage} ${calcRankeadas} ${levelMessage}Imortal.`
    }
}