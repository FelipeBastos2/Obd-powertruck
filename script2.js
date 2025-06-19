function gerarSelo() {
    document.getElementById("seloCliente").textContent = document.getElementById("cliente").value;
    document.getElementById("seloPlaca").textContent = document.getElementById("placa").value;
    document.getElementById("seloKmAtual").textContent = document.getElementById("kmAtual").value;
    document.getElementById("seloKmTroca").textContent = document.getElementById("kmTroca").value;
    document.getElementById("seloDataTroca").textContent = document.getElementById("dataTroca").value;

    document.getElementById("selo").style.display = "block";
}

function imprimirSelo() {
    let selo = document.getElementById("selo").innerHTML;
    let originalBody = document.body.innerHTML;

    document.body.innerHTML = selo;
    window.print();
    document.body.innerHTML = originalBody;
}