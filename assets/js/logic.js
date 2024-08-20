const i_nombre=document.getElementById("i_nombre");
i_nombre.title="Escriba su nombre";

const i_email=document.getElementById("i_email");
i_email.title="Escriba su email";

const i_mensaje=document.getElementById("i_mensaje");
i_mensaje.title="Escriba su mensaje";

const btn_enviar=document.getElementById("btn_enviar");

//Alerta envío 
btn_enviar.addEventListener("click",function(){
    alert("Mensaje enviado")
})

