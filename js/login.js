import { auth } from "./firebase.js";


import { 
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



// Login por email

document
.getElementById("btnLogin")
.addEventListener("click", async()=>{


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


window.location.href="cliente.html";


}

catch(error){

document.getElementById("mensagem").innerHTML =
"Erro: verifique seu e-mail e senha";

}


});




// Login Google


document
.getElementById("btnGoogle")
.addEventListener("click", async()=>{


const provider =
new GoogleAuthProvider();



try{


await signInWithPopup(
auth,
provider
);


window.location.href="cliente.html";


}

catch(error){

document.getElementById("mensagem").innerHTML =
"Erro ao entrar com Google";

}


});
