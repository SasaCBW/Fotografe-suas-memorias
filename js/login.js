import { auth } from "../firebase.js";

import {
    signInWithEmailAndPassword
} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



const botao = document.getElementById("entrar");



botao.addEventListener("click", async () => {


    const email = document.getElementById("email").value;

    const senha = document.getElementById("senha").value;



    try {


        await signInWithEmailAndPassword(
            auth,
            email,
            senha
        );


        // Login realizado
        window.location.href = "admin.html";


    } catch(error) {


        console.error(error);


        document.getElementById("mensagem").innerHTML =
        "E-mail ou senha incorretos.";


    }


});
