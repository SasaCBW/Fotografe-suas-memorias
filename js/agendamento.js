// ==========================================
// LS FOTOSTORY
// AGENDAMENTO.JS
// ==========================================

import { db } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const formulario = document.getElementById("formAgendamento");

if (formulario) {

    formulario.addEventListener("submit", async (e) => {

        e.preventDefault();

        const dados = {

            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            evento: document.getElementById("evento").value,
            data: document.getElementById("data").value,
            horario: document.getElementById("horario").value,
            cidade: document.getElementById("cidade").value,
            mensagem: document.getElementById("mensagem").value,

            status: "Pendente",

            criadoEm: serverTimestamp()

        };

        try {

            await addDoc(collection(db, "agendamentos"), dados);

            alert("Reunião solicitada com sucesso! Em breve entraremos em contato.");

            formulario.reset();

        } catch (erro) {

            console.error(erro);

            alert("Erro ao enviar o agendamento.");

        }

    });

}
