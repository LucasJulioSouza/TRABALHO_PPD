self.onmessage = function (event) {
    if (event.data === 'Start') {
        runGame();
    }
};

function runGame() {
    for (let i = 1; i <= 5; i++) {
        const result = fibonacci(i * 10);
        postMessage(`Iteration ${i}: Fibonacci Result - ${result}`);
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
