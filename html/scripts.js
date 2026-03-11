let botao = document.getElementById("botaoCor");
botao.addEventListener("click", () => {
    let corAtual =
     document.body.style.backgroundColor;
    if (corAtual === 'lightblue') {
        document.body.style.backgroundColor = 'lightpink';
    } else {
        document.body.style.backgroundColor = 'lightblue';
    }
    //     document.body.style.backgroundColor = corAtual === 'lightblue' ? 'lightpink' : 'lightblue' ;
    // document.body.style.backgroundColor = 'lightblue';

});