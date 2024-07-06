console.log(location.search)     // lee los argumentos pasados a este formulario
var id=location.search.substr(4)  // excurision_editar.html?id=1
console.log(id)
const { createApp } = Vue
  createApp({
    data() {
      return {
        id:0,
        titulo:"",
        imagen:"",
        duracion:"",
        precio:0,
        descripcion:"",
        url:'https://cataratas.pythonanywhere.com/excursiones/'+id,
       }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.id=data.id
                    this.titulo = data.titulo;
                    this.imagen=data.imagen
                    this.duracion=data.duracion
                    this.precio=data.precio  
                    this.descripcion=data.descripcion                   
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        modificar() {
            let excursion = {
                titulo:this.titulo,
                precio: this.precio,
                duracion: this.duracion,
                imagen: this.imagen,
                descripcion:this.descripcion
            }
             
            var options = {
                body: JSON.stringify(excursion),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
           
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "./excursionesCrud.html"; // navega a excursionesCrud.html         
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })      
            
           
            
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#formulario-container')