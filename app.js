// Abaixo está a implementação do cálculo do rendimento utilizando o modelo Iterativo:

function calcularRendimento() {
    const valor = parseFloat(document.getElementById("valor").value);
    const tempo = parseInt(document.getElementById("tempo").value);
    const unidade = document.getElementById("unidade").value;
    
    if (isNaN(valor) || isNaN(tempo) || valor <= 0 || tempo <= 0) {
        alert("Preencha todos os campos corretamente com valores positivos.");
        return;
    }

    // Definindo as taxas
    const SELIC = 14.25; // Taxa Selic anual
    const trBacen = 0.1709; // Taxa TR do Bacen

    // Calculando o tempo total em meses
    let tempoTotal = unidade === "mes" ? tempo : tempo * 12; // Convertendo para meses, se necessário
    let montante;
    
    // Cálculo do rendimento da poupança
    let taxaPoupanca;
    if (SELIC > 8.5) {
        taxaPoupanca = trBacen / 100 + 0.5 / 100; // 0,5% ao mês quando a Selic for maior que 8,5%
    } else {
        taxaPoupanca = (0.7 * (SELIC / 100)) / 12; // 70% da Selic ao ano, convertido para mês
    }
    
    // Calculando o montante final após o investimento
    montante = valor * Math.pow(1 + taxaPoupanca, tempoTotal);
    
   
    // Exibindo os resultados
    document.getElementById("resultado").innerHTML = `Rendimento após ${tempo} ${unidade}(s):`;
    document.getElementById("rendimentos").innerHTML = `Rendimento: R$ ${rendimento.toFixed(2)}`;
}

