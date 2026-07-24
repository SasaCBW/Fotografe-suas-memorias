<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Agendamento | LS.fotostory</title>


<link rel="stylesheet" href="style.css">


</head>


<body>


<header class="topo">

<h1>LS.fotostory</h1>

<p>Transformando momentos em histórias eternas</p>

</header>



<section class="agendamento">


<div class="titulo">

<h2>
Solicite seu orçamento
</h2>


<p>
Conte para nós sobre seu evento.
Nossa equipe irá preparar uma experiência especial para você.
</p>


</div>



<form id="formAgendamento">



<label>
Nome completo
</label>

<input 
type="text" 
id="nome"
placeholder="Digite seu nome"
required>



<label>
WhatsApp
</label>

<input 
type="tel"
id="telefone"
placeholder="(42) 99999-9999"
required>



<label>
Tipo de evento
</label>


<select id="evento" required>


<option value="">
Escolha uma opção
</option>


<option>
Casamento
</option>


<option>
Aniversário
</option>


<option>
Festa Infantil
</option>


<option>
Ensaio Fotográfico
</option>


<option>
Evento Empresarial
</option>


<option>
Outro
</option>


</select>



<label>
Data do evento
</label>


<input 
type="date"
id="data"
required>




<label>
Local do evento
</label>


<input 
type="text"
id="local"
placeholder="Cidade ou endereço"
required>




<label>
Conte mais detalhes
</label>


<textarea
id="mensagem"
placeholder="Conte como será seu evento..."
required></textarea>




<button type="submit">

Enviar solicitação

</button>



</form>





<div class="whatsapp-box">


<h3>
Fale diretamente conosco
</h3>


<p>
Tem dúvidas? Nossa equipe está pronta para atender você.
</p>



<a 
href="https://wa.me/5542988620679?text=Olá!%20Vim%20pelo%20site%20da%20LS.fotostory%20e%20gostaria%20de%20solicitar%20um%20orçamento."
target="_blank">

💬 WhatsApp

</a>



</div>


</section>





<script type="module">


// Firebase

import { db } from "./firebase.js";



import {

collection,
addDoc,
serverTimestamp

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";





const formulario = 
document.getElementById("formAgendamento");





formulario.addEventListener("submit", async(e)=>{


e.preventDefault();




const dados = {


nome:
document.getElementById("nome").value,


telefone:
document.getElementById("telefone").value,


evento:
document.getElementById("evento").value,


data:
document.getElementById("data").value,


local:
document.getElementById("local").value,


mensagem:
document.getElementById("mensagem").value,


status:
"Novo pedido",


criadoEm:
serverTimestamp()


};




try{


await addDoc(

collection(db,"agendamentos"),

dados

);




alert(
"Solicitação enviada com sucesso! Entraremos em contato."
);



formulario.reset();




}

catch(error){


console.error(error);


alert(
"Erro ao enviar solicitação."
);


}



});



</script>




</body>

</html>
