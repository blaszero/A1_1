const pintar = document.querySelector(".imguser");
const btnEnviar = document.querySelector('#enviar');
//CONTENEDORES PARA QUE FUNCIONE EL CARRITO
let memoria=[];
let memoria2=[];
let nuevoObjeto;
let i=0;

//funcion para poner las imagenes
const traerImagen = async()=>{
    const res = await fetch("../../datas/userimg.json");//IMPORTAR EL JSON
    const data = await res.json()
    data.forEach((objetos)=>{
          const caja = document.createElement("div");//CREO LAS CAJITAS
          //AGREGO CLASES A LAS CAJAS
          caja.setAttribute("class",'card col-lg-2 col-md-6 m-2 col-xs-12 text-black')
          caja.setAttribute("style",'width: 18rem;')
          
          //CREO EL CONTENIDO DE LA CAJA CON INNER
          caja.innerHTML=`
          <div ">
          <img src="../../img/usuario/${objetos.img}.jpg" class="card-img-top  img-responsive" alt="${objetos.img}">
          <div class="card-body">
          <h5 class="card-title">${objetos.img}</h5>
          <a href="#" class="btn btn-primary c" id="">seleccionar</a>
          </div>
          </div> 
          `;
          pintar.appendChild(caja);
  
          //CREE UNA VARIABLE PARA ALMACENAR EL BOTON Y UTILIZARLO, FUNCIONA!!
          let c= document.querySelectorAll('.c')[i];
          c.addEventListener("click", ()=>{
            let padre = c.parentNode.children;
            punchs(padre);//Ejecuto la funcion punchs
          });
          i++;
          //--------
        });
      };

//------------------
      //FUNCION QUE INTRODUCE LOS PRODUCTOS EN EL CARRITO
const punchs = (padre) =>{

   
    
     imagen = padre[0].textContent;
     nuevoObjeto = imagen
  
         memoria=JSON.stringify(nuevoObjeto)
         
         
  
     }
  //---------------
  



    //funcion para capturar el correo y tarjeta
    const usuarioData = (pet) =>{
        gpas = document.querySelector('#password').value;
        gemail = document.querySelector('#correo').value;
        gcard = document.querySelector('#tarjeta').value;

       const spas = {correo:gemail, clave:gpas, tarjeta:gcard}

       memoria2=JSON.stringify(spas);
    

       
       localStorage.setItem("USERDATE", memoria2);
       localStorage.setItem("usuario", memoria);
    }


    btnEnviar.addEventListener("click", usuarioData);
    traerImagen();