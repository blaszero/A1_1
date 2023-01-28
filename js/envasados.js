const pintar = document.querySelector('.plano');//CAPTURO CLASE DEL CONTENEDOR DE LAS CAJAS
//CONTENEDORES PARA QUE FUNCIONE EL CARRITO
let memoria=[];
let nuevoObjeto;
let nuevObjetoJSON;
//Esta i es para El edentificador del boton 
let i=0;

//GUARDO LOS VALORES QUE YA TRAIA EL CARRITO
let nuevoArray;
let ram;
let paso;
let mrm;
       //guardo lo que existia en el carrito
  nuevoArray = localStorage.getItem("carrito"); 
       //convierto mi json a arrya
  ram = JSON.parse(nuevoArray);
//-------------------






//Funcion que crea los objetos en la gondola
const traerProductos = async()=>{
  const res = await fetch("../datas/envasados.json");//IMPORTAR EL JSON
  const data = await res.json()
  data.forEach((objetos)=>{
        const caja = document.createElement("div");//CREO LAS CAJITAS
        //AGREGO CLASES A LAS CAJAS
        caja.setAttribute("class",'card col-lg-2 col-md-6 m-2 col-xs-12 text-black')
        caja.setAttribute("style",'width: 18rem;')
        caja.setAttribute("data-aos", 'zoom-in')
        
        //CREO EL CONTENIDO DE LA CAJA CON INNER
        caja.innerHTML=`
        <div ">
        <img src="../img/productos/${objetos.objeto}.jpg" class="card-img-top  img-responsive" alt="${objetos.objeto}">
        <div class="card-body">
        <h5 class="card-title">${objetos.objeto}</h5>
        <p class="card-text">${objetos.cantidad}</p>
        <p class="card-text">$${objetos.precio}</p>
        <a  class="btn btn-primary c">comprar</a>
        </div>
        </div> 
        `;
        pintar.appendChild(caja);

        //CREE UNA VARIABLE PARA ALMACENAR EL BOTON Y UTILIZARLO, FUNCIONA!!
        let c= document.querySelectorAll('.c')[i];
        c.addEventListener("click", ()=>{
          let padre = c.parentNode.children;
          punchs(padre);//Ejecuto la funcion punchs
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'AGREGADO',
            showConfirmButton: false,
            timer: 1000
          })
        });
        i++;
        //--------
      });
    };
    

//----------------------------------------------------------------------------


//FUNCION QUE INTRODUCE LOS PRODUCTOS EN EL CARRITO
const punchs = (padre) =>{
  
  let producto = padre[0].textContent;
  let unidad = padre[1].textContent;
  let dinero = padre[2].textContent;
   nuevoObjeto =   {objeto: producto, cantidad: unidad, precio: dinero}


   //movimiento de datos del carrito al localstorage:
       /*convierto mi array a json*/
       nuevObjetoJSON = JSON.stringify(nuevoObjeto);
       //guardo mi array en formato json en el local storage
       localStorage.setItem("carrito", nuevObjetoJSON);
//-------------
       //guardo en el array nuevamente
       nuevoArray = localStorage.getItem("carrito"); 
       //convierto mi json a arrya
       paso = JSON.parse(nuevoArray);
       //empujo los valores al array
       ram.push(paso);
//------------
       //convierto mi array a json
       nuevObjetoJSON = JSON.stringify(ram);
       //guardo mi array en formato json en el local storage
       localStorage.setItem("carrito", nuevObjetoJSON);

//------------      

   }

   //-------------------------------------------------------------------------

traerProductos();


