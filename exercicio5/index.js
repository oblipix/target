// Função para inverter uma string
function inverteString(str) {
    let invertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }
    return invertida;
}

// String a ser invertida
const minhaString = "Exemplo";
console.log(`String original: ${minhaString}`);
console.log(`String invertida: ${inverteString(minhaString)}`);
