let num = document.querySelector('input#fnum');

let lista = document.querySelector('select#flista');

let res = document.querySelector('div#res');

let valores = [];

function isNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {

        return true;

    } else {

        return false;

    };

};

function inLista(n, array) {

    if (array.indexOf(Number(n)) != -1) {

        return true;

    } else {

        return false;

    };

};


function adicionar() {

    if (isNumero(num.value) && !inLista(num.value, valores)) {

        valores.push(Number(num.value));

        let item = document.createElement('option');

        item.value = `option${num.valores}`;

        item.text = `Valor ${num.value} adicionado.`;

        lista.appendChild(item);

        res.innerHTML = '';

    } else {

        alert('Valor inválido ou já adicionado a lista.');

    };

    num.value = '';

    num.focus();

};

function finalizar() {

    if (valores.length == 0 || valores.length == 1) {

        alert('[ERRO] A lista está vazia ou só tem 1 elemento');

    } else {

        let total = valores.length;

        let maior = Math.max(...valores);
        
        let menor = Math.min(...valores);

        let soma = 0;

        let media = 0;

        for (let pos in valores) {

            soma += valores[pos];

        };

        media = soma / total;

        res.innerHTML = '';

        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;

        res.innerHTML += `<p>O maior valor indentificado foi o ${maior}.</p>`;

        res.innerHTML += `<p>O menor valor indentificado foi o ${menor}.</p>`;

        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;

        res.innerHTML += `<p>A média dos valores é ${media}.</p>`;

    };

};