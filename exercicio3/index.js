const fs = require('fs');

// Lê o arquivo JSON com os dados de faturamento
const data = fs.readFileSync('./faturamento.json', 'utf8');
const faturamento = JSON.parse(data);

function calculaFaturamento(faturamento) {
    const valores = faturamento.map(d => d.valor).filter(valor => valor > 0);
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);
    const mediaMensal = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(valor => valor > mediaMensal).length;

    console.log(`Menor valor de faturamento: R$${menorValor.toFixed(2)}`);
    console.log(`Maior valor de faturamento: R$${maiorValor.toFixed(2)}`);
    console.log(`Número de dias acima da média: ${diasAcimaMedia}`);
}

calculaFaturamento(faturamento);
