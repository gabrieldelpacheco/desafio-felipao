let nameHeroi = "Gabriel";
let xpHero = 5000;
let level ="está no level de ";
let levelMessage = "O Herói de nome ";
let counter = 0;
do {
    if (xpHero < 1000) {
        console.log(levelMessage +" "+ nameHeroi+" "+level+" ferro.");
    } else if(xpHero >=1001 && xpHero <= 2000){
        console.log(levelMessage+" "+nameHeroi+" "+level+" bronze.");
    } else if(xpHero >=2001 && xpHero <=5000) {
        console.log(levelMessage+" "+nameHeroi+" "+level+" prata.");
    } else if(xpHero >= 6001 && xpHero <= 7000){
        console.log(levelMessage+" "+nameHeroi+" "+level+" ouro.");
    } else if(xpHero >= 7001 && xpHero <= 8000){
        console.log(levelMessage+" "+nameHeroi+" "+level+" platina.");
    } else if (xpHero >= 8001 && xpHero <= 9000) {
        console.log(levelMessage+" "+nameHeroi+" "+level+" ascendente.");
    } else if(xpHero >= 9001 && xpHero <= 10000){
        console.log(levelMessage+" "+nameHeroi+" "+level+" imortal.");
    } else {
        console.log(levelMessage+" "+nameHeroi+" "+level+" radiante.");
    }
    counter++;
} while (counter == 0);

/* menor que 1.000 = ferro;
entre 1.001 e 2.000 = bronze;
entre 2.001 e 5.000 = prata;
entre 6.001 e 7.000 = ouro;
entre 7.001 e 8.000 = platina;
entre 8.001 e 9.000 = ascendente;
entre 9.001 e 10.000 = imortal;
maio ou igual 10.001 = radiante; */