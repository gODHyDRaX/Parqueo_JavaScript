// localizar el nodo en del DOM
// nod: etiqueta en su archivo .html

let header_del_dom = document.querySelector(".header")
// Almacenar en una variable el contenido agregar

let header = `<p>
<img src="./img/spaces.png">Parqueo la bendicion
</p>
<nav>
<div>
<div class="otros">
<div>🏍️ Motos</div>
<div>🚗 Carros</div>
<div>🚌 Bus</div>
<div>🚛 Camion</div>
<div> Otros</div>
</div>
</nav>
`;

// Agregar el contenido a la referencia del DOM 

header_del_dom.innerHTML = header;

