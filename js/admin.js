import { auth, storage, db } from "./firebase.js";


import {
onAuthStateChanged,
signOut
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

ref,
uploadBytes

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";


import {

collection,
addDoc,
serverTimestamp,
getDocs

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





// VERIFICAR LOGIN ADMIN


onAuthStateChanged(auth,(user)=>{


if(!user){

window.location.href="admin-login.html";

}


});





// SAIR


document
.getElementById("sair")
.addEventListener("click",()=>{


signOut(auth);


window.location.href="login.html";


});






// CADASTRAR CLIENTE


document
.getElementById("criarCliente")
.addEventListener("click",async()=>{


const nome =
document.getElementById("nomeCliente").value;


const email =
document.getElementById("emailCliente").value;



await addDoc(

collection(db,"clientes"),

{

nome:nome,

email:email,

criadoEm:serverTimestamp()

}

);



alert("Cliente criado com sucesso!");


carregarClientes();


});







// CARREGAR CLIENTES


async function carregarClientes(){


const select =
document.getElementById("clienteFotos");


const area =
document.getElementById("clientes");



select.innerHTML =
"<option>Selecione o cliente</option>";



area.innerHTML="";



const clientes =
await getDocs(collection(db,"clientes"));



clientes.forEach((doc)=>{


const cliente =
doc.data();



select.innerHTML += `

<option value="${cliente.nome}">
${cliente.nome}
</option>

`;



area.innerHTML += `

<div>

<h3>${cliente.nome}</h3>

<p>${cliente.email}</p>

</div>

`;


});


}



carregarClientes();







// ENVIAR FOTOS


document
.getElementById("enviar")
.addEventListener("click",async()=>{


const cliente =
document.getElementById("clienteFotos").value;



const arquivos =
document.getElementById("fotos").files;



if(cliente==="Selecione o cliente"){

alert("Escolha um cliente.");

return;

}



for(let foto of arquivos){



const caminho =

ref(

storage,

"fotos/"+cliente+"/"+foto.name

);



await uploadBytes(

caminho,

foto

);



}



document.getElementById("status").innerHTML =
"Fotos enviadas para "+cliente+" 📸";


});
