let  contenido_DOM = document.querySelector(".contenido")

let contenido = `
<div class="contenido_caja1">
<h3>Bus y transporte pesado</h3>
<span>🚌</span>
</div>
<form class="caja">
        <span>Informacion del vehiculo</span>
        <input type="text" class="texto" value="C-">
        <input type="time" class="tiempo">
        <textarea class="comentario" placeholder"Irregularidad del vehiculo"></textarea>        
        <button>Ingresar</button>
   
</form>
`;

contenido_DOM.innerHTML = contenido;