document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
    // Criar um novo Web Worker
    const worker = new Worker('worker.js');

    // Escutar mensagens do Web Worker
    worker.onmessage = function (event) {
        document.getElementById('output').innerHTML = event.data;
    };

    // Enviar mensagem para o Web Worker
    worker.postMessage('Start');
}
