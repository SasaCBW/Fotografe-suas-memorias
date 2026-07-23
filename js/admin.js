// ==========================================
// LS FOTOSTORY
// ADMIN.JS
// ==========================================

import { db, auth } from "./firebase.js";

import {
    collection,
    getDocs,
    orderBy,
    query
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ================================
// PROTEGER PÁGINA
// ================================

onAuthStateChanged(auth,(user)=>{

    if(!user){

        window.location="login.html";

        return;

    }

    carregarAgendamentos();

});


// ================================
// CARREGAR AGENDAMENTOS
// ================================

async function carregarAgendamentos(){

    const tabela=document.getElementById("listaAgendamentos");

    tabela.innerHTML="";

    const q=query(

        collection(db,"agendamentos"),

        orderBy("criadoEm","desc")

    );

    const snapshot=await getDocs(q);

    document.getElementById("totalAgendamentos").innerHTML=
    snapshot.size+" solicitações";

    snapshot.forEach((doc)=>{

        const dados=doc.data();

        tabela.innerHTML+=`

        <tr>

            <td>${dados.nome}</td>

            <td>${dados.evento}</td>

            <td>${dados.data}</td>

            <td>${dados.status}</td>

        </tr>

        `;

    });

}



// ================================
// LOGOUT
// ================================

window.logout=()=>{

    signOut(auth);

}
