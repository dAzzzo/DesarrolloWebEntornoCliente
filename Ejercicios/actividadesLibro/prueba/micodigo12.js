

var elemento = new Array(10);

for (let i = 0; i < 10; i++) {
    elemento[i] = Math.floor(Math.random() * 20) * 5;
}

while (elemento[0] < 50) {
    elemento.shift();
    elemento.unshift(Math.floor(Math.random() * 20) * 5);
}

while (elemento[9] > 50) {
    elemento.pop();
    elemento.push(Math.floor(Math.random() * 20) * 5);
}

document.write(elemento);
