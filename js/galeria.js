/* =====================================
        LS FOTOSTORY
        GALERIA.JS
===================================== */


/*
    Esse arquivo controla:
    - filtros da galeria
    - animações
    - preparação para Firebase
*/


// ===============================
// FILTROS
// ===============================


const botoesFiltro = document.querySelectorAll(".filtros button");

const imagens = document.querySelectorAll(".imagem");



botoesFiltro.forEach(botao => {


    botao.addEventListener("click", ()=>{


        // Remove ativo

        botoesFiltro.forEach(btn=>{

            btn.classList.remove("ativo");

        });



        // Adiciona ativo

        botao.classList.add("ativo");



        const categoria = botao.textContent.trim();



        imagens.forEach(imagem=>{


            const titulo = imagem
            .querySelector("h3")
            .textContent
            .trim();



            if(
                categoria === "Todos" ||
                titulo === categoria
            ){

                imagem.style.display="block";


            }else{


                imagem.style.display="none";


            }


        });



    });



});




// ===============================
// ABRIR FOTO
// ===============================



const fotos = document.querySelectorAll(".imagem img");



fotos.forEach(foto=>{


    foto.addEventListener("click",()=>{


        criarModal(foto.src);


    });



});





function criarModal(src){


    const modal = document.createElement("div");


    modal.classList.add("modal-foto");



    modal.innerHTML = `

        <span class="fechar">

        &times;

        </span>


        <img src="${src}">

    `;



    document.body.appendChild(modal);




    modal.querySelector(".fechar")
    .onclick = ()=>{


        modal.remove();


    };



    modal.onclick = (e)=>{


        if(e.target === modal){

            modal.remove();

        }


    };


}
