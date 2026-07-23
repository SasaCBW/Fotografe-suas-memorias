// Firebase
import { auth, storage, db } from "./firebase.js";

import {
onAuthStateChanged,
signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

ref,
uploadBytes,
getDownloadURL

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


import {

collection,
addDoc,
serverTimestamp,
getDocs

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ==============================
// VERIFICAR ADMIN LOGADO
// ==============================


onAuthStateChanged(auth,(user)=>{


if(!user){

window.location.href="admin-login.html";

}


});




// ==============================
// SAIR DO PAINEL
// ==============================


document
.getElementById("sair")
.addEventListener("click",()=>{


signOut(auth);


window.location.href="login.html";


});





// ==============================
// CRIAR CLIENTE
// ==============================


document
.getElementById("criarCliente")
.addEventListener("click",async()=>{


const nome =
document.getElementById("nomeCliente").value;


const email =
document.getElementById("emailCliente").value;



if(!nome || !email){


document.getElementById("clienteStatus").innerHTML =
"Preencha todos os campos.";


return;

}



try{


await addDoc(
collection(db,"clientes"),
{

nome:nome,

email:email,

criadoEm:serverTimestamp()

}

);



document.getElementById("clienteStatus").innerHTML =
"Cliente cadastrado com sucesso! 📸";



document.getElementById("nomeCliente").value="";

document.getElementById("emailCliente").value="";


carregarClientes();


}

catch(error){


console.log(error);


document.getElementById("clienteStatus").innerHTML =
"Erro ao cadastrar cliente.";


}


});





// ==============================
// MOSTRAR CLIENTES
// ==============================


async function carregarClientes(){


const area =
document.getElementById("clientes");


area.innerHTML="";


const consulta =
await getDocs(collection(db,"clientes"));



if(consulta.empty){


area.innerHTML =
"Nenhum cliente cadastrado.";


return;


}



consulta.forEach((doc)=>{


const cliente =
doc.data();



area.innerHTML += `

<div class="cliente-card">

<h3>${cliente.nome}</h3>

<p>${cliente.email}</p>

</div>

`;


});


}



carregarClientes();







// ==============================
// ENVIAR FOTOS
// ==============================


document
.getElementById("enviar")
.addEventListener("click",async()=>{


const arquivos =
document.getElementById("fotos").files;



if(arquivos.length === 0){


document.getElementById("status").innerHTML =
"Selecione as fotos primeiro.";


return;

}



try{


for(let foto of arquivos){


const localFoto =
ref(
storage,
"fotos/"+foto.name
);



await uploadBytes(
localFoto,
foto
);



}



document.getElementById("status").innerHTML =
"Fotos enviadas com sucesso! 📸";


}


catch(error){


console.log(error);


document.getElementById("status").innerHTML =
"Erro ao enviar fotos.";


}



});
