import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// Usuários autorizados do painel

const administradores = [

"sarawendling85@gmail.com"

];



document
.getElementById("entrar")
.addEventListener("click", async()=>{


const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;



// Verifica se o e-mail tem permissão

if(!administradores.includes(email)){


document.getElementById("mensagem").innerHTML =
"Este e-mail não possui acesso ao painel.";


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
"E-mail ou senha incorretos.";


}



});
