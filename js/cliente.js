import { auth, db } from "./firebase.js";


import {

onAuthStateChanged,
signOut

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

collection,
query,
where,
getDocs

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





onAuthStateChanged(auth,async(user)=>{


if(!user){

window.location.href="login.html";

return;

}



buscarFotos(user.email);



});







async function buscarFotos(email){



const clientes =
await getDocs(

query(

collection(db,"clientes"),

where(
"email",
"==",
email
)

)

);




if(clientes.empty){

document.getElementById("galeria").innerHTML =
"Nenhuma galeria encontrada.";

return;

}



let clienteID;



clientes.forEach((doc)=>{


clienteID = doc.id;


document.getElementById("nomeCliente").innerHTML =
"Bem-vindo à sua galeria 📸";


});






const fotos =
await getDocs(

query(

collection(db,"fotos"),

where(
"clienteID",
"==",
clienteID
)

)

);




const galeria =
document.getElementById("galeria");


galeria.innerHTML="";



fotos.forEach((doc)=>{


const foto =
doc.data();



galeria.innerHTML += `

<div class="foto">

<img src="${foto.url}">

<br>

<a href="${foto.url}" download>
Baixar foto
</a>

</div>

`;


});



}





document
.getElementById("sair")
.addEventListener("click",()=>{


signOut(auth);


window.location.href="login.html";


});
