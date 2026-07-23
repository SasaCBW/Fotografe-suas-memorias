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




// Verificar usuário logado


onAuthStateChanged(auth, async(user)=>{


if(!user){


window.location.href="login.html";


return;

}



buscarCliente(user.email);



});





// Buscar cliente


async function buscarCliente(email){


const clientes = await getDocs(

query(

collection(db,"clientes"),

where(
"email",
"==",
email
)

)

);




const area =
document.getElementById("galeria");



if(clientes.empty){


document.getElementById("nomeCliente").innerHTML =
"Cliente não encontrado.";


area.innerHTML =
"Nenhuma galeria disponível.";


return;

}



clientes.forEach((doc)=>{


const cliente =
doc.data();



document.getElementById("nomeCliente").innerHTML =
"Olá, "+cliente.nome+"! 📸";



});



}






// Logout


document
.getElementById("sair")
.addEventListener("click",()=>{


signOut(auth);


window.location.href="login.html";


});
