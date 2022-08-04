let form = document.querySelector("#form");

form.addEventListener('submit',function (event) {
    event.preventDefault();
    console.log('Fui Clickado');
    let gPeso = event.target.querySelector("#peso");
    let gAltura = event.target.querySelector("#altura");
    let peso = Number(gPeso.value);
    let altura = Number(gAltura.value);

    if (!peso || peso >= 1000) {
        mostrarResultado('Peso inválido');
        return;
    }
    
    if (!altura || altura >= 3.0) {
        mostrarResultado('Altura inválida');
        return;
    }

    let IMC = calculaIMC(peso,altura);
    console.log(IMC)
    mostrarResultado(IMC)
})

function calculaIMC (peso, altura) {
    let resultado = peso / (altura * altura);
    return resultado.toFixed(2);
};


function criaP () {
    const p = document.createElement('p');
    return p;
}


function mostrarResultado (msg) {
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = '';
    const p = criaP();

    if (msg >= 30 || msg <= 18.5 || msg === "Peso inválido" || msg === "Altura inválida") {
        p.classList.add('resultado-ruim')
    } else {
        p.classList.add('resultado-bom')
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
    form.reset()
};

