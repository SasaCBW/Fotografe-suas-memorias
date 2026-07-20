// ==========================================
// LS FOTOSTORY
// LOGIN.JS
// Desenvolvido por ChatGPT
// ==========================================

import {
    auth,
    provider
} from "./firebase.js";

import {
    signInWithEmailAndPassword,
    signInWithPopup,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// ==============================
// Elementos
// ==============================

const form = document.getElementById("loginForm");

const email = document.getElementById("email");

const senha = document.getElementById("senha");

const googleLogin = document.getElementById("googleLogin");

// ==============================
// Verificar Login
// ==============================

onAuthStateChanged(auth, (user)=>{

    if(user){

        window.location.href="inicio.html";

    }

});

// ==============================
// Login por E-mail
// ==============================

form.addEventListener("submit", async(e)=>{

    e.preventDefault();

    try{

        await signInWithEmailAndPassword(

            auth,

            email.value,

            senha.value

        );

        alert("Login realizado com sucesso!");

        window.location.href="inicio.html";

    }

    catch(error){

        console.log(error);

        alert("E-mail ou senha incorretos.");

    }

});

// ==============================
// Login Google
// ==============================

googleLogin.addEventListener("click", async()=>{

    try{

        await signInWithPopup(

            auth,

            provider

        );

        window.location.href="inicio.html";

    }

    catch(error){

        console.log(error);

        alert("Erro ao entrar com Google.");

    }

});

// ==============================
// Recuperar Senha
// ==============================

window.recuperarSenha = async()=>{

    if(email.value===""){

        alert("Digite seu e-mail primeiro.");

        return;

    }

    try{

        await sendPasswordResetEmail(

            auth,

            email.value

        );

        alert("Enviamos um e-mail para redefinir sua senha.");

    }

    catch(error){

        console.log(error);

        alert("Não foi possível enviar o e-mail.");

    }

};

// ==============================
// Logout
// ==============================

window.sair = async()=>{

    await signOut(auth);

    window.location.href="index.html";

};
