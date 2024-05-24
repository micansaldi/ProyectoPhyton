const { createApp } = Vue


  createApp({
    data() {
      return {
            url: "./js/excursiones.json",
            datos: [],
            error:false,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(
                    data => {
                        console.log(data)
                        this.datos = data
                    }
                )
                .catch(
                  this.error
                );
        }
    },
    created() {   // se ejecuta al inicializar VUE despues de crear las variables
        this.fetchData(this.url)
    }
}).mount('#app')
