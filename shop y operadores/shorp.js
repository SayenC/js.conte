const productos = [
    {id:1, nombre:'Top', precio: 500,img: 'pexels-hernán-toro-14217893'},
    {id:2, nombre:'Remera', precio: 700,img: 'pexels-fotosragrop-5459698'},
    {id:3, nombre:'Pantalon', precio: 1000,img: 'pexels-godisable-jacob-1027160'},
    {id:4, nombre:'Buzo', precio: 1500,img: 'pexels-karolina-grabowska-5426969'}
]

function listProductos(){
    for (const producto of productos){
        let cardProducto = document.createElement('div')
        cardProducto.innerHTML = `
            <h3>${producto.nombre}</he3>
            <h3>${producto.precio}</h3>
            <button class="button">Agregar al carrito</button>
            `
        cardProducto.className = 'card'
        let lista = document.getElementById('listProductos')
        lista.append(cardProducto)
    }
}

Swal.fire({
    position: 'top-end',
    icon: 'success',
    title:'Has agregado al carrito correctamente',
    showConfirmButton: false,
    timer: 1000
})

listProductos()