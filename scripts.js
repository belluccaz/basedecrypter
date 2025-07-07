$(document).ready(function () {
  // Matrix effect
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const letters = Array(256).join(1).split('');
  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0FF';
    letters.map((y_pos, index) => {
      const text = String.fromCharCode(65 + Math.random() * 33);
      const x_pos = index * 10;
      ctx.fillText(text, x_pos, y_pos);
      letters[index] = (y_pos > canvas.height + Math.random() * 1e4) 
        ? 0 
        : y_pos + 10;
    });
  }
  setInterval(drawMatrix, 33);

  // Conversor de Bases
  window.converter = function() {
    const userNumber    = $("#userNumber").val();
    const fromBaseValue = parseInt($("#fromBase").val(), 10);
    const toBaseValue   = parseInt($("#toBase").val(), 10);
    const resultadoEl   = $("#resultado");
    const baseNames = {2:"Binária",8:"Octal",10:"Decimal",16:"Hexadecimal"};
    function isValid(num,base) {
      const digits = base===16
        ? ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
        : Array.from({length:base},(_,i) => i.toString());
      return num.split('').every(d=>digits.includes(d.toUpperCase()));
    }
    if ([2,8,10,16].includes(fromBaseValue) &&
        [2,8,10,16].includes(toBaseValue) &&
        isValid(userNumber,fromBaseValue)) {
      const decimal = parseInt(userNumber, fromBaseValue);
      const result  = decimal.toString(toBaseValue).toUpperCase();
      resultadoEl.text(
        `O número ${userNumber} na base ${baseNames[fromBaseValue]} é equivalente a ${result} na base ${baseNames[toBaseValue]}`
      );
    } else {
      resultadoEl.text(
        "Bases inválidas ou número inválido para a base original."
      );
    }
  };

  // Dicionário Morse
  const morseDict = {
    'A':'.-','B':'-...','C':'-.-.','D':'-..','E':'.',
    'F':'..-.','G':'--.','H':'....','I':'..','J':'.---',
    'K':'-.-','L':'.-..','M':'--','N':'-.','O':'---',
    'P':'.--.','Q':'--.-','R':'.-.','S':'...','T':'-',
    'U':'..-','V':'...-','W':'.--','X':'-..-','Y':'-.--',
    'Z':'--..','0':'-----','1':'.----','2':'..---','3':'...--',
    '4':'....-','5':'.....','6':'-....','7':'--...','8':'---..','9':'----.'
  };
  function textoParaMorse(txt) {
    return txt.toUpperCase().split('').map(c => {
      if (c===' ') return '/';
      return morseDict[c]||'';
    }).join(' ');
  }
  function morseParaTexto(morse) {
    const inv = Object.fromEntries(
      Object.entries(morseDict).map(([k,v])=>[v,k])
    );
    return morse.trim().split(' ').map(code => {
      if (code==='/') return ' ';
      return inv[code]||'';
    }).join('');
  }

  // Traduzir Morse
  window.traduzirMorse = function() {
    const input = $('#morseInput').val();
    const modo  = $('#morseMode').val();
    const out   = modo==='encode'
      ? textoParaMorse(input)
      : morseParaTexto(input);
    $('#resultadoMorse').text(out);
  };

  // Ativa Enter no campo Morse
  $('#morseInput').on('keypress', function(e) {
    if (e.key === 'Enter') traduzirMorse();
  });
});
