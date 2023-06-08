function realizarLogin(){
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    // Recuperar os dados do localStorage
    let storedData = localStorage.getItem("userData");
    if(storeData){
        let userData = JSON.parse(storeData);

        // Comparar o usuário e a senha fornercidos com os dados salvos
        if(usuario === userData.usuario && senha === userData.senha){
            window.location.href="index.html";
        } else{
            document.getElementById("msgError").innerHTML = "Credenciais inválidas."
        }
    } else{
        document.getElementById("msgError").innerHTML = "Nenhum usuário cadastrado."
    }
}
