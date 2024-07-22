class Hero {
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type
    }
    atak(type){
        if (type === "guerreiro") {
            console.log(`O ${type} atacou usando espada.`);
        } else if(type === "mago"){
            console.log(`O ${type} atacou usando magia.`);
        } else if(type === "monge"){
            console.log(`O ${type} atacou usando artes marciais.`);
        }else {
            console.log(`O ${type} atacou usando usou shuriken.`);
        }
    }
}

const warrior = new Hero("Gabriel", 37, "guerreio");
const mage = new Hero("Thiago", 37, "mago");
const ninja = new Hero("Thafines", 36, "ninja");
const monk = new Hero("Deivid", 38, "monge");

warrior.atak("guerreiro");
mage.atak("mago");
ninja.atak("ninja");
monk.atak("monge");
