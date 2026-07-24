import { storage } from "../firebase.js";


import {

ref,
uploadBytes

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";



const botao =
document.getElementById("enviar");



botao.addEventListener("click", async()=>{


const arquivos =
document.getElementById("arquivos").files;



if(arquivos.length === 0){

alert("Selecione as fotos.");

return;

}



for(let foto of arquivos){



const localFoto = 
"clientes/" + foto.name;



const referencia =
ref(storage, localFoto);



await uploadBytes(
referencia,
foto
);



}



document.getElementById("resultado").innerHTML =

"Fotos enviadas com sucesso!";


});
