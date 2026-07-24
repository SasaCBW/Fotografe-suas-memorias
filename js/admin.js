import { db } from "../firebase.js";


import {

collection,
addDoc,
getDocs,
serverTimestamp

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




const formulario =
document.getElementById("clienteForm");


const lista =
document.getElementById("listaClientes");





formulario.addEventListener("submit", async(e)=>{


e.preventDefault();



await addDoc(

collection(db,"clientes"),


{


nome:

document.getElementById("nomeCliente").value,


telefone:

document.getElementById("telefoneCliente").value,


evento:

document.getElementById("eventoCliente").value,


data:

document.getElementById("dataCliente").value,


status:

document.getElementById("statusCliente").value,


criadoEm:

serverTimestamp()


}

);



alert(
"Cliente cadastrado!"
);



formulario.reset();



carregarClientes();



});







async function carregarClientes(){



const dados = await getDocs(

collection(db,"clientes")

);



lista.innerHTML="";



dados.forEach((doc)=>{


let cliente = doc.data();



lista.innerHTML += `


<div class="card-agendamento">


<h3>
${cliente.nome}
</h3>


<p>
📱 ${cliente.telefone}
</p>


<p>
📸 ${cliente.evento}
</p>


<p>
📅 ${cliente.data}
</p>


<p>
Status:
${cliente.status}
</p>



</div>


`;


});



}



carregarClientes();
