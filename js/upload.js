import { db, storage } from "../firebase.js";


import {

collection,
getDocs

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



import {

ref,
uploadBytes

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";




const clienteSelect =
document.getElementById("cliente");


const arquivos =
document.getElementById("fotos");



const botao =
document.getElementById("enviarFotos");





// Carregar clientes


async function carregarClientes(){


const dados = await getDocs(

collection(db,"clientes")

);



clienteSelect.innerHTML="";



dados.forEach((cliente)=>{


const dadosCliente =
cliente.data();



clienteSelect.innerHTML += `


<option value="${cliente.id}">

${dadosCliente.nome}

</option>


`;



});


}



carregarClientes();







// Enviar fotos


botao.addEventListener("click", async()=>{


const clienteId =
clienteSelect.value;



const fotos =
arquivos.files;



if(!fotos.length){


alert("Escolha as fotos.");

return;


}





for(let foto of fotos){



const caminho =

"clientes/" + clienteId + "/" + foto.name;




const referencia =

ref(storage,caminho);





await uploadBytes(

referencia,

foto

);



}




document.getElementById("resultado").innerHTML =

"Fotos enviadas com sucesso!";



});
