let nombrePerfil = document.querySelector('#perfilname');
let perfilname;
let nombre;
let carrito=[];
carrito= JSON.stringify(carrito)
let ca;
//COLOCAR EL NOMBRE DE USUARIO EN EL HEADER
const carga = ()=>{
    if(localStorage.getItem("nombre")){//Pregunta si existe
            perfilname = localStorage.getItem("nombre");
            nombre = perfilname;
            
            let avatar=JSON.parse(localStorage.getItem("usuario"));
            nombrePerfil.innerHTML = `<a class="enlace" href="./page/menu/cuenta.html"><img class="imgmio" src="./img/usuario/${avatar}.jpg"/>${nombre}</a>`;
        } 
    };
    carga();
//---------------------------------------------------

//Una vez que carga la pagina Home crea el carrito si no existe en el localstorage
if(localStorage.getItem("carrito") == null || localStorage.getItem("carrito") == "" ){
    localStorage.setItem("carrito", carrito);
}
//----------------------------------------------------

