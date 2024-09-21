// Faturamento mensal por estado
const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total
const totalFaturamento = Object.values(faturamentoMensal).reduce((acc, val) => acc + val, 0);

console.log("Percentual de representação de cada estado no faturamento mensal:");
for (let estado in faturamentoMensal) {
    let percentual = (faturamentoMensal[estado] / totalFaturamento) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}
