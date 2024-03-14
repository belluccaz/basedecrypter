var prompt = require("prompt-sync")();


const userNumber = prompt("Digite o número:");
const fromBase = parseInt(prompt("Digite a base original (2, 8, 10, ou 16):"), 10);
const toBase = parseInt(prompt("Digite a base de destino (2, 8, 10 ou 16):"), 10);


if ([2, 8, 10, 16].includes(fromBase) && [2, 8, 10, 16].includes(toBase)) {

    // Chamar a função para converter o número
    const result = converterBase(userNumber, fromBase, toBase);

    // Função para converter um número de uma base para outra
    
function converterBase(userNumber, fromBase, toBase) {
    // Converter o número para a base decimal
    const decimal = parseInt(userNumber, fromBase);
    
    // Converter o número decimal para a base destino
    const result = decimal.toString(toBase);
    
    return result;
} 
    // Exibir o result
    console.log("O número ${userNumber} na base ${fromBase} é equivalente a ${result} na base ${toBase}");
} else {
    console.log("Bases de origem e/ou destino inválidas. Por favor, tente novamente.");
}