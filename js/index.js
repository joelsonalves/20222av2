const codigo_de_acesso = document.querySelector('#codigo-de-acesso');

const botao_consultar = document.querySelector('#botao-consultar');

const label_status = document.querySelector('#status');

const cartao_resposta = document.querySelector('#cartao-resposta');

const lista = [
    [1525921, 'a', 1],
    [1519885, 'a', 2],
    [1551353, 'a', 3],
    [1554288, 'a', 4],
    [1528448, 'a', 5],
    [1523168, 'a', 6],
    [1505909, 'a', 7],
    [1565412, 'a', 8],
    [1536499, 'a', 9],
    [1566897, 'a', 10],
    [1515117, 'a', 11],
    [1523357, 'a', 12],
    [1571196, 'a', 13],
    [1560460, 'a', 14],
    [1564334, 'a', 15],
    [1537022, 'a', 16],
    [1566096, 'a', 17],
    [1536879, 'a', 18],
    [1531298, 'a', 19],
    [1553964, 'b', 1],
    [1523445, 'b', 2],
    [1541865, 'b', 3],
    [1552428, 'b', 4],
    [1529790, 'b', 5],
    [1505664, 'b', 6],
    [1520532, 'b', 7],
    [1559108, 'b', 8],
    [1522144, 'b', 9],
    [1527804, 'b', 10],
    [1534620, 'b', 11],
    [1539071, 'b', 12],
    [1522142, 'b', 13],
    [1527146, 'b', 14],
    [1559505, 'b', 15],
    [1532738, 'b', 16],
    [1549607, 'b', 17],
    [1534368, 'c', 1],
    [1571367, 'c', 2],
    [1532357, 'c', 3],
    [1529682, 'c', 4],
    [1504707, 'c', 5],
    [1552493, 'c', 6],
    [1559204, 'c', 7],
    [1526438, 'c', 8],
    [1534507, 'c', 9],
    [1532430, 'c', 10],
    [1533994, 'c', 11],
    [1518418, 'c', 12],
    [1536752, 'c', 13],
    [1565038, 'c', 14],
    [1552573, 'c', 15],
    [1519358, 'c', 16],
    [1514887, 'c', 17],
    [1530609, 'd', 1],
    [1537160, 'd', 2],
    [1270025, 'd', 3],
    [1566077, 'd', 4],
    [1532588, 'd', 5],
    [1533754, 'd', 6],
    [1557717, 'd', 7],
    [1560837, 'd', 8],
    [1566104, 'd', 9],
    [1534352, 'd', 10],
    [1184293, 'd', 11],
    [1528056, 'd', 12],
    [1534910, 'd', 13],
    [1555695, 'd', 14],
    [1528910, 'd', 15],
    [1525090, 'd', 16],
    [1520345, 'd', 17],
    [1525372, 'd', 18],
    [1529278, 'd', 19],
];

const consultar = (codigo) => {
    for (i = 0; i < lista.length; i++) {
        if (lista[i][0] === codigo) return lista[i];
    }
    return null;
};

botao_consultar.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
    codigo = parseInt(codigo_de_acesso.value);
    retorno = consultar(codigo);
    if (retorno !== null) {
        label_status.innerText = `Código: ${retorno[0]} - Tipo de Prova: ${retorno[1].toUpperCase()} - Sequencial: ${retorno[2]}`;
        cartao_resposta.setAttribute('src', `img/${retorno[1]}/${retorno[2]}.jpg`);
    } else {
        label_status.innerText = 'Verifique o código digitado!';
    }
});

codigo_de_acesso.addEventListener('click', () => {
    label_status.innerText = '';
    cartao_resposta.removeAttribute('src');
});

codigo_de_acesso.addEventListener('keypress',  (e) => {
    if(e.which == 13){
       botao_consultar.click();
    } else {
        codigo_de_acesso.click();
    }
});