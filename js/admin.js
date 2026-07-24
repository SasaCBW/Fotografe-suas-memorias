import { db } from "../firebase.js";


import {

collection,
getDocs,
orderBy,
query

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




const lista = document.getElementById(
"listaAgendamentos"
);




async function carregarAgendamentos(){


try{


const consulta = query(

collection(db,"agendamentos"),

orderBy("criadoEm","desc")

);



const resultado = await getDocs(consulta);



lista.innerHTML = "";



if(resultado.empty){


lista.innerHTML = 
"<p>Nenhum agendamento encontrado.</p>";

return;


}




resultado.forEach((documento)=>{


const dados = documento.data();



lista.innerHTML += `


<div class="card-agendamento">


<h3>
${dados.nome}
</h3>


<p>
📱 WhatsApp:
${dados.telefone}
</p>


<p>
📸 Evento:
${dados.evento}
</p>


<p>
📅 Data:
${dados.data}
</p>


<p>
📍 Local:
${dados.local}
</p>


<p>
💬 Mensagem:
${dados.mensagem}
</p>


<span>
Status:
${dados.status}
</span>



</div>


`;



});




}

catch(error){


console.error(error);


lista.innerHTML =
"Erro ao carregar agendamentos.";


}



}



carregarAgendamentos();
