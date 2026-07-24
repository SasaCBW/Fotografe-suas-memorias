// Conexão com Firebase
import { db } from "../firebase.js";


// Funções do Firestore
import {

    collection,
    addDoc,
    serverTimestamp

} from 
"https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



// Pega o formulário da página
const formulario = document.getElementById("formAgendamento");



// Quando o cliente clicar em enviar
formulario.addEventListener("submit", async (e) => {

    e.preventDefault();


    // Captura os dados preenchidos

    const nome = document.getElementById("nome").value;

    const telefone = document.getElementById("telefone").value;

    const evento = document.getElementById("evento").value;

    const data = document.getElementById("data").value;

    const local = document.getElementById("local").value;

    const mensagem = document.getElementById("mensagem").value;



    try {


        // Salva no Firestore

        await addDoc(

            collection(db, "agendamentos"),

            {

                nome: nome,

                telefone: telefone,

                evento: evento,

                data: data,

                local: local,

                mensagem: mensagem,

                status: "Novo pedido",

                criadoEm: serverTimestamp()

            }

        );



        alert(
        "Agendamento enviado com sucesso! Entraremos em contato."
        );



        // Limpa o formulário

        formulario.reset();



    } catch (erro) {


        console.error(
        "Erro ao enviar agendamento:",
        erro
        );


        alert(
        "Ocorreu um erro ao enviar. Tente novamente."
        );


    }


});
