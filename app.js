//contenedores
let usuario = document.querySelector('#usuname');
let btnUsuario = document.querySelector('#btn-usuario');


//GUARDA EL NOMBRE DEL USUARIO INGRESADO A LA PAGINA
btnUsuario.addEventListener("click", ()=>{
    if(usuario.value != ""){
        console.log(usuario.value);
        localStorage.setItem("nombre", usuario.value);//guarda en local storage, la llave es nombre
    }else{
        alert("Ingresara sin nombre de usuario")
        localStorage.setItem("nombre", "CLIENTE");
    };
});
//---------------------------------------------------


