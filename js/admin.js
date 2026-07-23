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




// VERIFICAR ADMIN


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






// CRIAR CLIENTE


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



alert("Cliente criado!");

carregarClientes();


});







// LISTAR CLIENTES


async function carregarClientes(){


const select =
document.getElementById("clienteFotos");


const area =
document.getElementById("clientes");



select.innerHTML =
"<option>Selecione o cliente</option>";



area.innerHTML="";



const dados =
await getDocs(collection(db,"clientes"));



dados.forEach((doc)=>{


const cliente =
doc.data();



select.innerHTML += `

<option value="${doc.id}">
${cliente.nome}
</option>

`;



area.innerHTML += `

<div class="cliente-card">

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


const clienteID =
document.getElementById("clienteFotos").value;



const arquivos =
document.getElementById("fotos").files;



if(!clienteID){

alert("Selecione um cliente.");

return;

}




for(let foto of arquivos){



const caminho = ref(

storage,

"fotos/"+clienteID+"/"+foto.name

);




await uploadBytes(

caminho,

foto

);




const url =
await getDownloadURL(caminho);





await addDoc(

collection(db,"fotos"),

{

clienteID:clienteID,

nome:foto.name,

url:url,

criadoEm:serverTimestamp()

}

);



}



document.getElementById("status").innerHTML =
"Fotos enviadas com sucesso! 📸";


});
