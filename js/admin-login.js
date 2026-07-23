import { auth } from "./firebase.js";


import {
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// E-mails autorizados

const administradores = [

"SEU_EMAIL_AQUI",
"EMAIL_DA_LARYSSA_AQUI"

];



document
.getElementById("entrar")
.addEventListener("click", async()=>{


const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;



if(!administradores.includes(email)){


document.getElementById("mensagem").innerHTML =
"Acesso negado";


return;

}



try{


await signInWithEmailAndPassword(
auth,
email,
senha
);



window.location.href="admin.html";



}

catch(error){


document.getElementById("mensagem").innerHTML =
"E-mail ou senha incorretos";


}


});
