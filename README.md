 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index dc10a31a14b4e0acc9296a71bcccf844bb8cb679..a65302613586fabe606c474fab6f9c277321281a 100644
--- a/README.md
+++ b/README.md
@@ -1,55 +1,56 @@
 # Base Decrypter
 
 Este é um projeto de conversão de bases numéricas com um efeito visual inspirado no filme "Matrix". A interface permite ao usuário converter números entre bases binária, octal, decimal e hexadecimal, enquanto um efeito de "chuva" de caracteres é exibido ao fundo.
 
 ## Funcionalidades
 
 - Conversão de números entre bases:
   - Binária (Base 2)
   - Octal (Base 8)
   - Decimal (Base 10)
   - Hexadecimal (Base 16)
 - Efeito visual de "Matrix" com caracteres caindo na tela.
 - Interface estilizada e responsiva.
+- Tradutor de código Morse (texto <-> Morse).
 
 ## Estrutura do Projeto
 
 MatrixBaseConverter/
 ├── index.html
 ├── styles.css
-├── script.js
+├── scripts.js
 ├── static/
 │ └── img/
 │ ├── github-icon.png
 │ ├── linkedin-logo.png
 │ └── twitter.png
 └── README.md
 
 - **index.html**: Arquivo HTML principal.
 - **styles.css**: Arquivo CSS para a estilização da página.
-- **script.js**: Arquivo JavaScript contendo a lógica para o efeito Matrix e a conversão de bases.
+- **scripts.js**: Arquivo JavaScript contendo a lógica para o efeito Matrix, a conversão de bases e o tradutor Morse.
 - **static/img/**: Diretório contendo as imagens dos ícones sociais.
   - **github-icon.png**: Ícone do GitHub.
   - **linkedin-logo.png**: Ícone do LinkedIn.
   - **twitter.png**: Ícone do Twitter.
 - **README.md**: Este arquivo README.
 
 ## Como Usar
 
 1. Clone o repositório:
    ```bash
    git clone https://github.com/belluccaz/basedecrypter.git
 
 2.  Navegue até o diretório do projeto:
 
 cd MatrixBaseConverter
 Abra o arquivo index.html em seu navegador.
 
 3. Tecnologias Utilizadas
 HTML
 CSS
 JavaScript
 jQuery
 Font Awesome (para os ícones sociais)
 Google Fonts (para a fonte utilizada)
 Com o auxílio de IA em certos passos do desenvolvimento.
 
EOF
)
