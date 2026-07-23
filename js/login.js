// ========================================
// LS FOTOSTORY
// LOGIN.JS
// ========================================

import {
    auth
} from "./firebase.js";

import {

    signInWithEmailAndPassword,

    GoogleAuthProvider,

    signInWithPopup,

    createUserWithEmailAndPassword,

    sendPasswordResetEmail

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ========================================
// LOGIN
// ========================================

const btnEntrar = document.getElementById("btnEntrar");

if(btnEntrar){

btnEntrar.addEventListener("click", async()=>{

const email = document.getElementById("email").value;

const senha = document.getElementById("senha").value;

try{

await signInWithEmailAndPassword(auth,email,senha);

window.location="cliente.html";

}

catch(error){

alert("E-mail ou senha inválidos.");

}

});

}



// ========================================
// LOGIN GOOGLE
// ========================================

const btnGoogle = document.getElementById("btnGoogle");

if(btnGoogle){

btnGoogle.addEventListener("click", async()=>{

const provider = new GoogleAuthProvider();

try{

await signInWithPopup(auth,provider);

window.location="cliente.html";

}

catch(error){

alert("Erro ao entrar com Google.");

}

});

}



// ========================================
// CADASTRO
// ========================================

const btnCadastrar = document.getElementById("btnCadastrar");

if(btnCadastrar){

btnCadastrar.addEventListener("click", async()=>{

const email = document.getElementById("emailCadastro").value;

const senha = document.getElementById("senhaCadastro").value;

try{

await createUserWithEmailAndPassword(auth,email,senha);

alert("Conta criada com sucesso!");

window.location="cliente.html";

}

catch(error){

alert(error.message);

}

});

}



// ========================================
// ESQUECI SENHA
// ========================================

const btnEsqueci = document.getElementById("btnEsqueci");

if(btnEsqueci){

btnEsqueci.addEventListener("click", async()=>{

const email = prompt("Digite seu e-mail:");

if(!email) return;

try{

await sendPasswordResetEmail(auth,email);

alert("Foi enviado um link para redefinir sua senha.");

}

catch(error){

alert("Erro ao enviar e-mail.");

}

});

}
