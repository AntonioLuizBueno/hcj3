/*script.js*/
// 1. Lógica de Zoom
const zoomArea = document.getElementById('zoomArea');
const zoomImg = document.getElementById('zoomImg');

// Verifica se os elementos existem antes de rodar o código
if (zoomArea && zoomImg) {
    zoomArea.addEventListener('mousemove', function (e) {
        // Pega as dimensões e posição da caixa de zoom
        const { left, top, width, height } = zoomArea.getBoundingClientRect();

        // Calcula a posição do mouse relativa à caixa (em pixels)
        const x = e.clientX - left;
        const y = e.clientY - top;

        // Converte para porcentagem (0% a 100%)
        const xPercent = (x / width) * 100;
        const yPercent = (y / height) * 100;

        // Aplica o ponto de origem e o aumento
        zoomImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        zoomImg.style.transform = "scale(2.5)"; // Aumenta 2.5 vezes
    });

    // Quando o mouse sai, a imagem volta ao tamanho normal
    zoomArea.addEventListener('mouseleave', function () {
        zoomImg.style.transform = "scale(1)";
        zoomImg.style.transformOrigin = "center center";
    });
}

// 2. Lógica Visualização 360º (Simulada por Slider)
// Substitua a parte do "// 2. Lógica Visualização 360º" por isto:

window.addEventListener('load', () => {
    // Inicializa o visualizador especializado
    const viewer = new JavascriptViewer({
        mainHolderId: 'jsv-holder',
        mainImageId: 'jsv-image',
        // A biblioteca substitui o '01' no link pelas sequências (01 a 72)
        imageUrlFormat: 'https://360-javascriptviewer.gumlet.io/images/phone/iphone-gold-xx.png',
        totalFrames: 72, // Quantidade de fotos que compõem o giro
        speed: 60,       // Velocidade da inércia
        draggable: true, // Permite girar com o mouse/toque
        scroll: false    // Impede que o scroll da página gire o objeto
    });

    viewer.start();

    // Feedback visual opcional no console
    viewer.events().started.on(() => {
        console.log('Visualizador 360º carregado com sucesso.');
    });
});

// 3. Comparação de Produtos
function compare(productName) {
    const display = document.getElementById('compareResult');
    display.innerText = `✅ "${productName}" adicionado para comparação técnica.`;
    display.style.color = "#2563eb";
}

// 4. Carrinho Suspenso
function toggleCart() {
    document.getElementById('cart-panel').classList.toggle('active');
}

// 5. Feedback em Tempo Real (Simulação de WebSocket)
function simulatePurchase() {
    const toast = document.getElementById('notification-box');
    toast.style.display = 'block';

    setTimeout(() => {
        toast.style.display = 'none';
    }, 4000); // Desaparece após 4 segundos
}