const { createApp } = Vue
  createApp({
    data() {
      return {
        excursiones:[],
        //url:'http://localhost:5000/excursiones', 
        url:'https://cataratas.pythonanywhere.com/excursiones',   
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        titulo:"", 
        imagen:"",
        duracion:"",
        precio:0,
        descripcion:"",
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.excursiones = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let excursion = {
                titulo:this.titulo,
                precio: this.precio,
                duracion: this.duracion,
                imagen:this.imagen,
                descripcion:this.descripcion
                
            }
            var options = {
                body:JSON.stringify(excursion),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./excursionesCrud.html";  // recarga excursionesCrud.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
    },
  }).mount('#app')