//CONTENEDORES
let memoria =localStorage.getItem("carrito");
let mCarrito = JSON.parse(memoria);
let pintar = document.querySelector('.plano');

//Esta i es para El edentificador del boton 
let i=0;
let k=0;
//------
let memo=[];
let nuevo=[];

//--


//FUNCIO QUE COMPRUEBA SI EL CARRITO ESTA VACIO
const comprobar =()=>{
  let pend= JSON.parse(localStorage.getItem("carrito"));
  if(pend[0] === undefined || pend === []){
    pintar.innerHTML=`
    <div class="text-center text-black">
     <h1>El carrito esta vacio</h1>
     <img src="../../img/carrito.png">
    </div>
    `
  }else{
    pintar.innerHTML=`
    <button class="btn btn-dark" id="limpiarbtn">Limpiar carrito</button>
    <a button class="btn btn-dark" id="comprabtn"  href="../end.html">Terminar compra</a>
    `;
 

    //FUNCION QUE DEJA EN BLANCO TODO EL CARRITO
    let limpiar = document.querySelector("#limpiarbtn");
limpiar.addEventListener("click",()=>{
  nuevObjetoJSON = JSON.stringify(nuevo);
  //guardo mi array en formato json en el local storage
  localStorage.setItem("carrito", nuevObjetoJSON);
  window.location.reload();
})
let botonfin = document.querySelector("#comprabtn");
botonfin.addEventListener("click",()=>{
  nuevObjetoJSON = JSON.stringify(nuevo);
  //guardo mi array en formato json en el local storage
  localStorage.setItem("carrito", nuevObjetoJSON);
  window.location.reload()
});

  }
}

//-------------------------------------------------------






//-----funcion que dibuja los elementos del carrito en pagina
const mostrador = ()=>{
  mCarrito.map((objetos)=>{
    

        const caja = document.createElement("div");//CREO LAS CAJITAS
        //AGREGO CLASES A LAS CAJAS
        caja.setAttribute("class",'card col-lg-2 col-md-6 m-2 col-xs-12 text-black p')
        caja.setAttribute("style",'width: 18rem;')
        //caja.setAttribute("data-aos", 'zoom-in')
        
        //CREO EL CONTENIDO DE LA CAJA CON INNER
        caja.innerHTML=`
        <div ">
        <img src="../../img/productos/${objetos.objeto}.jpg" class="card-img-top  img-responsive" alt="${objetos.objeto}">
        <div class="card-body">
        <h5 class="card-title">${objetos.objeto}</h5>
        <p class="card-text">${objetos.precio}</p>
        <p class="card-text">${objetos.cantidad}</p>
        <a class="btn btn-primary c">Borrar</a>
        </div>
        </div> 
        `;
        pintar.appendChild(caja);

        //CREE UNA VARIABLE PARA ALMACENAR EL BOTON DE BORRAR Y UTILIZARLO, FUNCIONA!!
        let c= document.querySelectorAll('.c')[i];
        let p= document.querySelectorAll('.p')[i];
        c.addEventListener("click", ()=>{
          p.remove()
          let paso=JSON.parse(localStorage.getItem("carrito"))
          let objetoId= paso.findIndex(element => element.id === c[i]) //obtengo el id
          paso.splice(objetoId, 1);

          k=JSON.parse(localStorage.getItem("carrito")).length;
          if(k === 1){
            comprobar();
            window.location.reload()
          }
          console.log(k)

          

      /******************************************* */
           //movimiento de datos del carrito al localstorage:
       //convierto mi array a json
       nuevObjetoJSON = JSON.stringify(paso);
       //guardo mi array en formato json en el local storage
       localStorage.setItem("carrito", nuevObjetoJSON);
       //-------------
        });
        k--;
        i++;


          

        //--------
      });
      
    };

//-------------------------------------------------------





comprobar();

mostrador();