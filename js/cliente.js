import { auth } from "../firebase.js";


import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";




const areaFotos =
document.getElementById("fotos");





onAuthStateChanged(auth,(usuario)=>{


if(!usuario){


window.location.href =
"cliente-login.html";


return;


}



areaFotos.innerHTML = `


<h2>
Bem-vindo ao seu álbum!
</h2>


<p>
Suas fotos estarão disponíveis aqui.
</p>


`;


});
