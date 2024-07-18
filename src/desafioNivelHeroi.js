let nomeHeroi = "Gabriel";
let xpDoHeroi = 5000;
let nivel ="está no nivel de ";
let mensagemHeroi = "O Herói de nome ";
let contador = 0;
do {
    if (xpDoHeroi < 1000) {
        console.log(mensagemHeroi +" "+ nomeHeroi+" "+nivel+" ferro.");
    } else if(xpDoHeroi >=1001 && xpDoHeroi <= 2000){
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" bronze.");
    } else if(xpDoHeroi >=2001 && xpDoHeroi <=5000) {
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" prata.");
    } else if(xpDoHeroi >= 6001 && xpDoHeroi <= 7000){
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" ouro.");
    } else if(xpDoHeroi >= 7001 && xpDoHeroi <= 8000){
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" platina.");
    } else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" ascendente.");
    } else if(xpDoHeroi >= 9001 && xpDoHeroi <= 10000){
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" imortal.");
    } else {
        console.log(mensagemHeroi+" "+nomeHeroi+" "+nivel+" radiante.");
    }
    contador++;
} while (contador == 0);

/* menor que 1.000 = ferro;
entre 1.001 e 2.000 = bronze;
entre 2.001 e 5.000 = prata;
entre 6.001 e 7.000 = ouro;
entre 7.001 e 8.000 = platina;
entre 8.001 e 9.000 = ascendente;
entre 9.001 e 10.000 = imortal;
maio ou igual 10.001 = radiante; */