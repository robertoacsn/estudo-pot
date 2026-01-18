const input = document.querySelector('#email-input');
const enviar = document.querySelector('#btn-enviar');
const erro = document.querySelector('#mensagem-erro');

enviar.addEventListener('click', function(){
if (input.value == ""){
    erro.style.display = "block"; 
} else {
    erro.style.display = "none";
    confetti()
    alert("E-mail cadastrado!")
    
}
});
