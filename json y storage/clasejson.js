//JSON//
let nombreGuardado = localStorage.getItem('nombre')
console.log()
if(nombreGuardado){
    alert('Bienvenido ${nombreGuardado}')
}else{
    let nombre = prompt('Ingrese su nombre')
    localStorage.setItem('nombre',nombre);
}

let nombre = prompt('Ingrese su nombre')

localStorage.setItem('nombre',nombre);
console.log(nombreGuardado)

//STORAGE//
let nombreGuardado2 = sessionStorage.getItem('nombre')

if(nombreGuardado2){
    alert('Buen dia ${nombreGuardado2}')
} else{
    let nombre2 = prompt('Ingrese su nombre');
    sessionStorage.setItem('nombre2',nombre2);
}


for (let i = 0; 1 < sessionStorage.length; i++) {
    let clave = sessionStorage.key(i);
    console.log("Clave: "+ clave);
    console.log("Valor: "+ sessionStorage.getItem(clave));

}



//localStorage.setItem("producto1", producto1);


//const enJSON       = JSON.stringify(producto1);
//localStorage.setItem("producto1", enJSON);
//let productoLocalStorage = localStorage.getItem('producto1')
//console.log(typeof productoLocalStorage)
//productoLocalStorage = JSON.parse(productoLocalStorage)
//console.log(productoLocalStorage)
//
//console.log(enJSON); {"id";2, "producto";"buzo"}
//console.log(typeof producto1); Object
//console.log(typeof enJSON);    String

//localStorage.setItem("producto1", enJSON);

const productos = [{id: 1, producto: "buzo", precio: 1500},
                {id: 2, producto: "remera", precio: 1000},
                {id: 3, producto: "pantalon", precio: 2000}];
const guardarLocal = (clave, valor) => {localStorage.setItem(clave, valor)};

for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal("listaProductos", JSON.stringify(productos));









