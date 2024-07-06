document.querySelector("header").innerHTML = `
<nav>
    <div class="logo">
        <a href="index.html"><img src="./img/logo1.png" alt=""></a>
    </div>
    <div class="linksNav">
        <a class="text-white" style= text-decoration:none ; color:text-light href="excursiones.html">Excursiones</a>
        <a class="text-white" style= text-decoration:none href="interes.html">Sitios de interés</a>
        <a class="text-white" style= text-decoration:none href="tarifas.html">Tarifas y horarios</a>
        <a class="text-white" style= text-decoration:none href="contacto.html" class="botonContacto">Contacto</a>
        <a class="text-white" style= text-decoration:none href="login.html">Login</a>
        <div id="crud" class="dropdown" style="display: none;">
           
            <div class="dropdown-menu">
                <a class="dropdown-item" href="excursionesCrud.html">Excursiones Crud</a>
                
            </div>
        </div>
    </div>
</nav>
`;


if (sessionStorage.getItem("adm")!="1"){
    document.querySelector("#crud").setAttribute('style', 'display:none')
}else{
    document.querySelector("#crud").setAttribute('style', 'display:on')
}
document.querySelector("footer").innerHTML = `
<div class="redes">
    <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram" style="color: white;"></i></a>
    <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f" style="color: white;"></i></a>
    <a href="https://www.twitter.com/"><i class="fa-brands fa-x-twitter" style="color: white;"></i></a>
</div>
<p>Sitio desarrollado para Codo a Codo - 2024</p>
`;

