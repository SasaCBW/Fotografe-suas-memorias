import { db } from "../firebase.js";


import {

collection,
addDoc,
getDocs,
serverTimestamp,
updateDoc,
doc

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const formulario =
document.getElementById("clienteForm");


const lista =
document.getElementById("listaClientes");




// CADASTRAR CLIENTE

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


album:

"pendente",


criadoEm:

serverTimestamp()


}

);



alert(
"Cliente cadastrado com sucesso!"
);



formulario.reset();


carregarClientes();


});





// MOSTRAR CLIENTES


async function carregarClientes(){



const clientes = await getDocs(

collection(db,"clientes")

);



lista.innerHTML="";



clientes.forEach((cliente)=>{


const dados = cliente.data();



lista.innerHTML += `


<div class="card-agendamento">


<h3>
${dados.nome}
</h3>


<p>
📱 ${dados.telefone}
</p>


<p>
📸 ${dados.evento}
</p>


<p>
📅 ${dados.data}
</p>


<p>
Status:
${dados.status}
</p>



<button onclick="prepararAlbum('${cliente.id}')">

Criar álbum

</button>



</div>


`;



});



}





// Criar ligação com álbum


window.prepararAlbum = async(id)=>{


await updateDoc(

doc(db,"clientes",id),

{

album:"criado"

}

);



alert(
"Álbum preparado para este cliente!"
);


carregarClientes();


}




carregarClientes();
