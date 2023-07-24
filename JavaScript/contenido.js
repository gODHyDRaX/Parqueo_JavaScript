let  contenido_DOM = document.querySelector(".contenido")

let contenido = `
<div class="contenido_caja1">
<h3>Bus y transporte pesado</h3>
<span>🚌</span>
</div>
<form class="caja">
        <span>Datos</span>
        <input type="text" class="texto">
        <input type="time" class="tiempo">
        <button>Ingresar</button>
   
</form>
`;

contenido_DOM.innerHTML = contenido;