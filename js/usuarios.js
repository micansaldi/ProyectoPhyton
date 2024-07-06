const { createApp } = Vue
createApp({
    data() {
        return {
            usuarios: [],
            url: 'https://cataratas1.pythonanywhere.com/usuarios',
            error: false,
            cargando: true,
            usuario: "admin",
            clave: "admin",
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.usuarios = data;
                    this.cargando = false;
                })
                .catch(err => {
                    console.error(err);
                    this.error = true;
                })
        },
        grabar() {
            let usuario = {
                usuario: this.usuario,
                clave: this.clave,
                rol: 0
            }
            var options = {
                body: JSON.stringify(usuario),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado");
                    window.location.href = "./index.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar");
                })
        },
        login() {
            usuario=this.usuario
            sessionStorage.setItem("adm",0)
            var i=0
            while ( i < this.usuarios.length && this.usuarios[i].usuario != this.usuario  ){
                i++
            }
            if (i<(this.usuarios.length)){
                if (this.usuarios[i].clave==this.clave ){
                    if (this.usuarios[i].rol==1){
                        sessionStorage.setItem("adm",1)  
                       
                    }
                    window.location.href = "./index.html";
                }else{
                    alert('Clave erronea')
                }
            }else{
                alert('Usuario erronea')
            }
        }
    },
    created() {
        this.fetchData(this.url);
    },
}).mount('#app-login')