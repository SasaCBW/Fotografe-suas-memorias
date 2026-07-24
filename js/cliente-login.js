import { auth } from "../firebase.js";


import {

signInWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




const botao =
document.getElementById("entrar");



botao.addEventListener("click", async()=>{


const email =
document.getElementById("email").value;


const senha =
document.getElementById("senha").value;




try{


await signInWithEmailAndPassword(

auth,

email,

senha

);



window.location.href =
"cliente.html";



}

catch(error){


document.getElementById("mensagem").innerHTML =
"Login inválido.";


}


});
