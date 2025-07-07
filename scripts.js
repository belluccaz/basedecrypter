$(document).ready(function () {
    // Matrix effect
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    // Ajusta o tamanho do canvas para ocupar toda a janela
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Cria um array de 256 elementos preenchidos com '1'
    const letters = Array(256).join(1).split('');

    // Função para desenhar o efeito Matrix
    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Define a cor de preenchimento do fundo com um tom preto semi-transparente
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Preenche o canvas com a cor de preenchimento
        ctx.fillStyle = '#0FF'; // Define a cor do texto para um tom azulado
        letters.map((y_pos, index) => {
            const text = String.fromCharCode(65 + Math.random() * 33); // Gera caracteres aleatórios
            const x_pos = index * 10; // Calcula a posição x
            ctx.fillText(text, x_pos, y_pos); // Desenha o texto no canvas
            letters[index] = (y_pos > canvas.height + Math.random() * 1e4) ? 0 : y_pos + 10; // Atualiza a posição y
        });
    }

    // Define um intervalo para atualizar o efeito Matrix a cada 33 milissegundos
    setInterval(drawMatrix, 33);

    // Função para converter bases
    window.converter = function() {
        const userNumber = $("#userNumber").val(); // Obtém o número do usuário
        const fromBaseValue = parseInt($("#fromBase").val(), 10); // Obtém a base de origem
        const toBaseValue = parseInt($("#toBase").val(), 10); // Obtém a base de destino
        const resultadoElemento = $("#resultado"); // Obtém o elemento do resultado

        // Nomes das bases
        const baseNames = {
            2: "Binária",
            8: "Octal",
            10: "Decimal",
            16: "Hexadecimal"
        };

        const fromBaseName = baseNames[fromBaseValue]; // Nome da base de origem
        const toBaseName = baseNames[toBaseValue]; // Nome da base de destino

        const isValidNumber = isValid(userNumber, fromBaseValue); // Verifica se o número é válido

        // Verifica se as bases são válidas e se o número é válido
        if ([2, 8, 10, 16].includes(fromBaseValue) && [2, 8, 10, 16].includes(toBaseValue) && isValidNumber) {
            const result = converterBase(userNumber, fromBaseValue, toBaseValue); // Converte o número

            // Função para converter o número de uma base para outra
            function converterBase(userNumber, fromBase, toBase) {
                const decimal = parseInt(userNumber, fromBase); // Converte o número para decimal
                const result = decimal.toString(toBase).toUpperCase(); // Converte o número decimal para a base de destino
                return result; // Retorna o resultado
            }

            // Exibe o resultado na tela
            resultadoElemento.text(`O número ${userNumber} na base ${fromBaseName} é equivalente a ${result} na base ${toBaseName}`);
        } else {
            // Exibe uma mensagem de erro se as bases ou o número forem inválidos
            resultadoElemento.text("Bases de origem e/ou destino inválidas ou número fornecido inválido para a base original. Por favor, tente novamente.");
        }
    };

    // Função para verificar se o número é válido para a base especificada
    function isValid(userNumber, fromBase) {
        const validDigits = getValidDigits(fromBase); // Obtém os dígitos válidos para a base
        return userNumber.split("").every(digit => validDigits.includes(digit.toUpperCase())); // Verifica se todos os dígitos são válidos
            }

    // Dicionário para código Morse
    const morseDict = {
        'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
        'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
        'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
        'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
        'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
        'Z': '--..',  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
        '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.'
    };

    // Função para traduzir texto para código Morse
    function textoParaMorse(texto) {
        return texto.toUpperCase().split('').map(char => {
            if (char === ' ') return '/';
            return morseDict[char] || '';
        }).join(' ');
    }

    // Função para traduzir código Morse para texto
    function morseParaTexto(morse) {
        const invMap = Object.fromEntries(Object.entries(morseDict).map(([k,v]) => [v, k]));
        return morse.trim().split(' ').map(code => {
            if (code === '/' ) return ' ';
            return invMap[code] || '';
        }).join('');
    }

    // Função acionada pelo botão de tradução
    window.traduzirMorse = function() {
        const input = $('#morseInput').val();
        const modo = $('#morseMode').val();
        let resultado = '';
        if (modo === 'encode') {
            resultado = textoParaMorse(input);
        } else {
            resultado = morseParaTexto(input);
        }
        $('#resultadoMorse').text(resultado);
    };

    // Função para obter os dígitos válidos para cada base
    function getValidDigits(base) {
        if (base === 2) {
            return ["0", "1"];
        } else if (base === 8) {
            return ["0", "1", "2", "3", "4", "5", "6", "7"];
        } else if (base === 10) {
            return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        } else if (base === 16) {
            return ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        }
    }
});
