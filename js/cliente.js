// ==========================================
// LS FOTOSTORY
// CLIENTE.JS
// ==========================================

import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import {
    collection,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// ================================
// VERIFICAR LOGIN
// ================================

onAuthStateChanged(auth, async(user)=>{

    if(!user){

        window.location="login.html";

        return;

    }

    document.getElementById("nomeCliente").innerHTML=user.displayName || user.email;

    carregarFotos(user.email);

});


// ================================
// CARREGAR FOTOS
// ================================

async function carregarFotos(email){

    const galeria=document.getElementById("galeriaCliente");

    galeria.innerHTML="";

    const q=query(

        collection(db,"galerias"),

        where("cliente","==",email)

    );

    const snapshot=await getDocs(q);

    if(snapshot.empty){

        galeria.innerHTML=`

        <div class="semFotos">

            <h2>Nenhuma foto disponível.</h2>

            <p>
            Assim que a LS Fotostory liberar sua galeria,
            ela aparecerá aqui.
            </p>

        </div>

        `;

        return;

    }

    snapshot.forEach((doc)=>{

        const foto=doc.data();

        galeria.innerHTML+=`

        <div class="foto-cliente">

            <img src="${foto.imagem}">

            <a href="${foto.imagem}" download>

                Baixar Foto

            </a>

        </div>

        `;

    });

}


// ================================
// LOGOUT
// ================================

window.logout=()=>{

    signOut(auth);

}
