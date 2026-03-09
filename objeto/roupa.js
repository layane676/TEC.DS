let roupa = {
    tecido: "algodão",
    valor: 150,
    marca: "Nike",
    tamanho: "M",
    tipo: "short",
    elasticidade: "alta"
};
if (roupa.elasticidade == "alta") {
    console.log(`A roupa tem alta elasticidade, ${roupa.tamanho} é o tamanho.`);
}

 let roupa2 = {
    tecido: "seda",
    valor: 200,
    marca: "Adidas",
    tamanho: "G",
    tipo: "blusa",
    elasticidade: "baixa"
};
if (roupa2.elasticidade == "baixa") {
    console.log(`A roupa tem pouca elasticidade, ${roupa2.tamanho} é o tamanho.`);
}

let roupa3 = {
    tecido: "jeans",
    valor: 180,
    marca: "Levi's",
    tamanho: "P",
    tipo: "calça",
    elasticidade: "média"
};
if (roupa3.elasticidade == "média") {
    console.log(`A roupa tem elasticidade média, com tamanho ${roupa3.tamanho}.`);
}

function Comprar(valor) {
    console.log(`O valor da roupa é R$${valor}.`);
}
Comprar(roupa3.valor);
Comprar(roupa2.valor);
Comprar(roupa.valor);
