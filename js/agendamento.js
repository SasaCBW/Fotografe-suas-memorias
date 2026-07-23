import { db } from "./firebase.js";


import {

collection,
addDoc,
serverTimestamp

}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





document
.getElementById("enviarAgendamento")
.addEventListener("click",async()=>{



const nome =
document.getElementById("nome").value;


const telefone =
document.getElementById("telefone").value;


const email =
document.getElementById("email").value;


const evento =
document.getElementById("evento").value;


const data =
document.getElementById("data").value;


const mensagem =
document.getElementById("mensagem").value;




if(!nome || !telefone || !data){


document.getElementById("resultado").innerHTML =
"Preencha nome, WhatsApp e data.";


return;

}




try{


await addDoc(

collection(db,"agendamentos"),

{


nome:nome,

telefone:telefone,

email:email,

evento:evento,

data:data,

mensagem:mensagem,

status:"Pendente",

criadoEm:serverTimestamp()


}

);




document.getElementById("resultado").innerHTML =

"Solicitação enviada com sucesso! 📸 Entraremos em contato.";





}


catch(error){


console.log(error);


document.getElementById("resultado").innerHTML =

"Erro ao enviar. Tente novamente.";

}



});
