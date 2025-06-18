const formulario = document.querySelector(".form");

formulario.addEventListener("submit",(e)=>
{
    e.preventDefault();
    alert("Se ha enviado el mensaje exitosamente")
})