//console.log('entrega3')
//eventos//
//let botonPrincipal = document.getElementById('btnPrincipal')
//botonPrincipal.addEventListener('click',respuestaClick)


//function respuestaClick(){
//    console.log('hicicste click')
//}

let inputNombre = document.getElementById('inputNombre')

inputNombre.addEventListener ('input',respuestaInput)

function respuestaInput(e){
    console.log(e.target.value)
}

let miFormulario = document.getElementById('formulario');
miFormulario.addEventListener("submit", validarFormulario);

    function validarFormulario(e){
        e.preventDefault();
        alert('se han enviado los datos')
        console.log(e)
    }

























