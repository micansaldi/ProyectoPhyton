const { createApp } = Vue


  createApp({
    data() {
      return {
            url: "https://cataratas.pythonanywhere.com/excursiones",
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
