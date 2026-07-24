import { auth, storage } from "../firebase.js";


import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";



import {

ref,
listAll,
getDownloadURL

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";





const areaFotos =
document.getElementById("fotos");




onAuthStateChanged(auth, async(usuario)=>{


if(!usuario){


window.location.href =
"cliente-login.html";


return;


}





const pastaCliente = 
"clientes/" + usuario.uid;



const referencia =
ref(storage,pastaCliente);





try{


const imagens =
await listAll(referencia);



areaFotos.innerHTML = "";




if(imagens.items.length === 0){


areaFotos.innerHTML =

"<p>Nenhuma foto disponível ainda.</p>";


return;


}





imagens.items.forEach(async(imagem)=>{


const url =
await getDownloadURL(imagem);



areaFotos.innerHTML += `


<div class="foto">


<img src="${url}">



<a 
href="${url}"
download>


Baixar foto

</a>



</div>


`;



});



}

catch(error){


console.error(error);



areaFotos.innerHTML =

"Erro ao carregar fotos.";


}



});
