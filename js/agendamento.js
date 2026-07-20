/* =====================================
        LS FOTOSTORY
        AGENDAMENTO.JS
===================================== */


import { db } from "./firebase.js";


import {

collection,

addDoc,

serverTimestamp

} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";




// ===============================
// FORMULÁRIO
// ===============================


const formulario = document.getElementById("formAgendamento");





formulario.addEventListener("submit", async(e)=>{


    e.preventDefault();





    const dados = {


        nome:

        document.getElementById("nome").value,



        telefone:

        document.getElementById("telefone").value,



        email:

        document.getElementById("email").value,



        evento:

        document.getElementById("evento").value,



        data:

        document.getElementById("data").value,



        horario:

        document.getElementById("horario").value,



        mensagem:

        document.getElementById("mensagem").value,



        status:"Pendente",



        criadoEm:

        serverTimestamp()


    };





    try{



        await addDoc(

            collection(db,"agendamentos"),

            dados

        );





        alert(

        "Solicitação enviada com sucesso! Em breve entraremos em contato."

        );





        formulario.reset();





        enviarEmail(dados);





    }

    catch(error){



        console.log(error);



        alert(

        "Ocorreu um erro ao enviar. Tente novamente."

        );



    }





});







// ===============================
// EMAILJS
// ===============================



function enviarEmail(dados){



/*

CONFIGURAÇÃO DO EMAILJS


Você irá substituir:

SEU_SERVICE_ID

SEU_TEMPLATE_ID

SUA_PUBLIC_KEY



*/




emailjs.send(

"SEU_SERVICE_ID",


"SEU_TEMPLATE_ID",


{


nome:dados.nome,


telefone:dados.telefone,


email:dados.email,


evento:dados.evento,


data:dados.data,


horario:dados.horario,


mensagem:dados.mensagem



},



"SUA_PUBLIC_KEY"


)

.then(()=>{


console.log(

"E-mail enviado"

);


})

.catch(error=>{


console.log(

"Erro EmailJS",

error

);


});



}
