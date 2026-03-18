class Personagem{
    constructor(nome, titulo, hp, mana, energia){
        this.nome= nome;
        this.titulo= titulo;
        this.hp= hp;
        this.mana= mana;
        this.energia= energia;
    }
    atacar(alvo, habilidade){

    }

}

class Habilidade {
    constructor(id, nome, dano, custo, energia){
        this.id = id;
        this.nome = nome ;
        this. dano = dano; 
        this.custo = custo;
        this. energia = energia;
    }

}

//instaciar (criar) os objetos
let hero = new Personagem("Anabelle", "Herói", 100, 100, 0);
let boss = new Personagem("Caçador de almas", "Boss", 100, 0, 50);

document.getElementById("nome-heroi").textContent = `${hero.nome}`;
document.getElementById("titulo-heroi").textContent = `🗡️ ${hero.titulo}`;

document.getElementById("nome-boss").textContent = `${boss.nome}`;
document.getElementById("titulo-boss").textContent = `💀🪄 ${boss.titulo}`;


//criar habilidade e botões
let container = document.getElementById("controles");
let listaHabilidades = [
    new Habilidade(1, "Ataque", 4, 0, 0),
    new Habilidade(2, "Skill", 8, 10, 0),
    new Habilidade(3, "Ultimate", 15, 0, 100)
];

listaHabilidades.forEach(hab=> {
    let btn = document.createElement("button");
    btn.innerText= hab.nome;
    btn.classList.add("btn");
    container.appendChild(btn);
})

