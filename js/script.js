// Aquí tu código






const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');
const listOne = document.createElement('li');
const listTwo = document.createElement('li');
const listTree = document.createElement('li');

lista.appendChild(listOne);
lista.appendChild(listTwo);
lista.appendChild(listTree);

//lista.insertAdjacentHTML("afterbegin", '<li></li><li></li><li></li>');

agregar.addEventListener('click', function() {
    let elementoUno = prompt('Introduce el primer elemento');
    let elementoDos = prompt('Introduce el segundo elemento');
    let elementoTres = prompt('Introduce el tercer elementos');
    listOne.innerHTML = elementoUno;
    listTwo.innerHTML = elementoDos;
    listTree.innerHTML = elementoTres;

})

