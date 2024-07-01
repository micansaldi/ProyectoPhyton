document.addEventListener("DOMContentLoaded", function () {

    // PAGINA DE CONTACTO
     var selectPais = document.getElementById('pais');
    
     // Fetch para obtener la lista de países desde la API
     fetch('https://restcountries.com/v3.1/all')
         .then(response => response.json())
         .then(data => {
             // Iteración sobre los datos de los países 
             data.forEach(country => {
                 if (country.name) {
                     var option = document.createElement('option');
                     option.value = country.name.common;
                     option.textContent = country.name.common;
                     selectPais.appendChild(option);
                 }
             });
         })
         .catch(error => {
             console.error('Error al obtener la lista de países:', error);
         });
    
    
    // Validacion y envio del formulario
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var email = document.getElementById('email').value;
        var pais = document.getElementById('pais').value;
        var consulta = document.getElementById('consulta').value;
    
        if (!nombre || !apellido || !email || !pais || !consulta) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        
        const mailtoLink = `mailto:micansaldi@gmail.com?subject=${nombre} ${apellido}, ${pais}, ${email}&body=${consulta}`;
        window.location.href = mailtoLink;
    
        document.getElementById('mensajeEnviado').style.display = 'block';
    });
    
    //archivo
    document.getElementById('archivo').addEventListener('change', function() {
        var fileName = this.files[0] ? this.files[0].name : 'No se ha seleccionado archivo';
        document.getElementById('file-name').textContent = fileName;
    });
    })
    
