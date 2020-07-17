
//FUNÇÃO ANONIMA AUTO EXECUTAVEL

(() => { // seta o valor do usuario master e senha master
    ad = "admin"
    pas = "admin"
    localStorage.setItem("userMaster", ad)
    localStorage.setItem("senhaMaster", pas)
})();

 login = document.getElementById("idLogin").value
 senha = document.getElementById("idPassword").value

//********************************* Pega pela posição do index! ************************************* */

/*
 nao deixar passar pra proxima pagina
if nao existir user 
window.location.href = "index.html"
*/

//adminSenha();
//Retorna todos os usuarios
pegarTodosUsers = () => {
    const keys = Object.keys(localStorage);

    //console.log(keys);
    return keys

}
//Percorrer toda a localstorage comparando login e senha se forem iguais faz login com o nome daquele user
loginUsers = (login, senha) => {
    users = {}
    valores = []
    todos = Object.keys(localStorage);
    var nomePego;
    for (var i = 0; i < todos.length; i++) {
        users = todos[i]
        zsh(localStorage.getItem(users))
        //console.log("LOGIN USUARIO:",valores)
        nomePego = valores[i].split(",")[0] // pega o nome do user
        loginPego = valores[i].split(",")[1] // pega o contato
        senhaPega = valores[i].split(",")[2] // pega senha

        if (login == loginPego && senha == senhaPega) {   // compara login e senha do usuario
            window.location.href = "loginEfetivado.html"

            localStorage.setItem("EstadoDaPagina", "true")
            localStorage.setItem("UserAtual", nomePego)

        }
        else if (login == localStorage.getItem('userMaster') && senha == localStorage.getItem('senhaMaster')) { // compara login e senha do admin
            window.location.href = "adminCadastrar.html"

            localStorage.setItem("UserAtual", "Admin")
            localStorage.setItem("AdminEstate", 'true')
            localStorage.setItem("EstadoDaPagina", "true")

        } else {
            document.getElementById("idSenhaErr").innerHTML = "Os dados não estão batendo."
        }

    }
}
function visitante() {
    localStorage.setItem("UserAtual", "Visitante")
    localStorage.setItem("AdminEstate", 'false')
    localStorage.setItem("EstadoDaPagina", "true")
    window.location.href = "cadastrar.html"
}

