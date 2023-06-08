// função para alternar a visibilidade da senha
function iconVisibility (inputId, iconId){
    // Obter referência aos elementos de input e icon
    let input = document.getElementById(inputId);
    let icon = document. getElementById(iconId);

    // Verificar se a senha está oculta
    if( input.type === "password"){
        // Se estiver oculta, alterar para o tipo "text" para mostrar a senha
        input.type = "text";
        // Atualizar classes do icone para exibir o icone de "olho riscado"
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else{
        // Caso contrário, a senha está visível, então alterar para o tipo de "password" para ocultar a senha
        input.type = "password";
        // Atualizar classes do icone para exibir o icone de "olho"
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
 // Adicionar evento de clique para o ícone de visualização da senha
 document.getElementById("verSenha").addEventListener("click", function() {
    // Chamar a função de alternar a visibilidade da senha, passando o ID do campo de senha e o ID do ícone
    iconVisibility("senha", "verSenha");
});
// Adicionar evento de clique para o ícone de visualização da confirmação de senha
document.getElementById("verConfirmSenha").addEventListener("click", function() {
    // Chamar a função de alternar a visibilidade da senha, passando o ID do campo de confirmação de senha e o ID do ícone
    iconVisibility("confirmSenha", "verConfirmSenha");
});



function cadastrar (){
    // Limpar mensagem de erro
    document.getElementById("msgError").innerHTML = "";

    // Obter os valores dos campos de entrada
    let nome = document.getElementById("nome").value.trim();
    let usuario = document.getElementById("usuario").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let confirmarSenha = document.getElementById("confirmSenha").value.trim();

    // validar os campos
    if(nome === "" || usuario === "" || email === "" || telefone === "" || senha === "" || confirmarSenha === ""){
        document.getElementById("msgError").innerHTML = "Por favor, preencha os campos.";
        return;
    }
    // Requisitos de número de telefone
    function formatarTelefone(telefone){
        // Remove todos os caracteres não numéricos do telefone
        const numeroTelefone = telefone.replace(/\D/g, "");
        // Aplicando a formatação XX.XXXXX-XXXX
        let telefoneFormatado = "";
        if(numeroTelefone.length >= 2){
            telefoneFormatado += numeroTelefone.substring(0, 2) + ".";
        }
        if (numeroTelefone.length >= 7){
            telefoneFormatado += numeroTelefone.substring(2, 7) + "-";
        }
        if(numeroTelefone.length >= 11){
            telefoneFormatado += numeroTelefone.substring(7, 11);
        }
        
        return telefoneFormatado;
    }
    // Formatar telefone
    telefone = formatarTelefone(telefone);
    //Evento de campo de telefone para formatar o número automaticamente
    document.getElementById("telefone").addEventListener("input", function(event){
        const telefoneDigitado = event.target.value.trim();
        const telefoneFormatado = formatarTelefone(telefoneDigitado);
        event.target.value = telefoneFormatado;
    })
    // Requisitos da senha
    function requisitosSenha(senha){
        // Verificar se a senha possui letra maiúscula
        if(!/A-Z/.test(senha)){
            return "A senha deve conter pelo menos uma letra maiúscula"
        }

        // Verifica se a senha possui caractere especial
        if(!/[!@#$%^&*]/.test(senha)){
            return "A senha deve conter pelo menos um caractere especial"
        }
        // Verificar se a senha é forte (possui pelo menos 8 caracteres)
        if(senha.length <8){
            return "A senha deve conter pelo menos 8 caracteres"
        }

        // A senha é válida
        return "A senha é válida!"
    }
    if (senha !== confirmarSenha){
        document.getElementById('msgError').innerHTML = "As senhas não são iguais.";
        return;
    }

    // Armazenar os dados no localStorage
    let userData = {
        nome: nome,
        usuario: usuario,
        email: email,
        telefone: telefone,
        senha: senha,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    // redirecionar para a página de login
    window.location.href="signin.html";
}
