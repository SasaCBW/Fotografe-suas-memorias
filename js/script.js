document.getElementById("agendaForm")?.addEventListener("submit", function(e){

    e.preventDefault();


    let nome = document.getElementById("nome").value;

    let telefone = document.getElementById("telefone").value;

    let evento = document.getElementById("evento").value;

    let data = document.getElementById("data").value;

    let horario = document.getElementById("horario").value;

    let mensagem = document.getElementById("mensagem").value;



    let texto = `Olá, LS.fotostory! Gostaria de solicitar um orçamento.

Nome: ${nome}

Telefone: ${telefone}

Evento: ${evento}

Data: ${data}

Horário: ${horario}

Detalhes:
${mensagem}`;



    let numero = "5542988641120";


    let url = 
    "https://wa.me/" 
    + numero 
    + "?text=" 
    + encodeURIComponent(texto);



    window.open(url, "_blank");


});
