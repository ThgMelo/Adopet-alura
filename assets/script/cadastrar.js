let botao = document.querySelector(".form-botao")

function testarSenha(senha1, senha2, mensagem){

    if(senha1.value == senha2.value){
        mensagem.innerHTML = "*As senhas não conferem!";
        mensagem.classList.add("error")
    }
}

botao.addEventListener("click", (event)=>{
    event.preventDefault();
    
    let senha1 = document.querySelector("#senha");
    let senha2 = document.querySelector("#conf-senha");
    let mensagem = document.querySelector(".error");

    
})
