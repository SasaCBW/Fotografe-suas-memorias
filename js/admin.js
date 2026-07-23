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
getDocs,
doc,
updateDoc

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



clientes.forEach((item)=>{


const cliente =
item.data();



select.innerHTML += `

<option value="${item.id}">
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







// ENVIAR FOTOS


document
.getElementById("enviar")
.addEventListener("click",async()=>{


const cliente =
document.getElementById("clienteFotos").value;


const arquivos =
document.getElementById("fotos").files;



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
"Fotos enviadas! 📸";


});








// AGENDAMENTOS


async function carregarAgendamentos(){


const area =
document.getElementById("agendamentos");


area.innerHTML="";



const dados =
await getDocs(

collection(db,"agendamentos")

);



dados.forEach((item)=>{


const agendamento =
item.data();



area.innerHTML += `

<div class="cliente-card">


<h3>${agendamento.nome}</h3>


<p>
Evento: ${agendamento.evento}
</p>


<p>
Data: ${agendamento.data}
</p>


<p>
WhatsApp: ${agendamento.telefone}
</p>


<p>
Status:
${agendamento.status}
</p>


<button onclick="confirmar('${item.id}')">

Confirmar

</button>


<button onclick="recusar('${item.id}')">

Recusar

</button>


</div>

`;

});


}



carregarAgendamentos();






// CONFIRMAR


window.confirmar = async(id)=>{


await updateDoc(

doc(db,"agendamentos",id),

{

status:"Confirmado"

}

);


carregarAgendamentos();


};






// RECUSAR


window.recusar = async(id)=>{


await updateDoc(

doc(db,"agendamentos",id),

{

status:"Recusado"

}

);


carregarAgendamentos();


};
