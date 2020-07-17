var usuario = {
    nome: [],
    contato: [],
    senha: [],
    dataNascimento: [],
    genero: [],
    receita: [],
    vizualizacao: [],
}
estado = localStorage.getItem("EstadoDaPagina")
console.log("estado: " + estado)
userPego = localStorage.getItem("UserAtual")
console.log("userPego: " + userPego)

//Se for 'true' o estado no localstorage deixa entrar na pagina
if (estado != "true") {
    window.location.href = "login.html"
} else if (userPego == "Admin") {
    document.getElementById("lblUser").innerHTML = `${userPego}`
} else {
    document.getElementById("lblUser").innerHTML = `${userPego}`
}



//PEGA TUDO DOS USUARIOS: DO LOCALSTORAGE
tudoUser = () => {
    tudo = localStorage.getItem("Usuario:" + userPego)

    return tudo
}
tudoUser(); // retorna toda info do user logado
pegarNome = () => {
    nome = tudo.split(',')[0]
    document.getElementById("lblNome").innerHTML = nome
    return nome
}
usuario.nome = pegarNome()
pegarContato = () => {
    contato = tudo.split(',')[1]
    document.getElementById("lblContato").innerHTML = contato
    return contato
}
usuario.contato = pegarContato()
pegarSenha = () => {
    senha = tudo.split(',')[2]
    return senha
}
usuario.senha = pegarSenha()
pegarGenero = () => {
    genero = tudo.split(',')[3]
    return genero
}
usuario.genero = pegarGenero()

pegarDataNascimento = () => {
    data = tudo.split(',')[4]
    return data;
}
usuario.dataNascimento = pegarDataNascimento()

pegarReceita = () => {
    receita = tudo.split(',')[5]
    if (receita == '' || receita == undefined) {
        document.getElementById("lblReceita").innerHTML = "None"
    }else{
        document.getElementById("lblReceita").innerHTML = `${receita}`
    }
    return receita
}
usuario.receita = pegarReceita()

pegarVizualizacao = () => { // NADA AINDA
    vizualizacao = tudo.split(',')[6]
    return vizualizacao
}

//cadastrar novar receita sobrepoem a antiga Atualiza tudo no localstorage da pessoa
cadastrarReceita = () => {

    usuario.receita = document.getElementById("txtReceita").value
    console.log(usuario.receita)
    if (usuario.receita == "") {
        console.log("PRECISAMOS PREENCHER A RECEITA COM ALGUMA COISA NÉ")
        
    } else {

        usuario.vizualizacao = 0;
        pessoa = [usuario.nome, usuario.contato, usuario.senha, usuario.dataNascimento, usuario.genero, usuario.receita, usuario.vizualizacao]
        localStorage.setItem("Usuario:" + userPego, pessoa)
       
    }
    document.getElementById("txtLocalizar").innerHTML = ""
    document.getElementById("txtReceita").innerHTML = ""


 
}

//Segundo array so para armazenar todos os users pegos do localstorage
var usuarioG = {
    nome: [],
    contato: [],
    senha: [],
    dataNascimento: [],
    genero: [],
    receita: [],
    vizualizacao: [],
}

//Retorna todos os usuarios
pegarTodosUsers = () => {
    const keys = Object.keys(localStorage);

    //console.log(keys);
    return keys

}
//PEGA TUDO DOS USUARIOS: DO LOCALSTORAGE
pegaSoOsUsuarios = () => {
    users = {}
    valores = []
    todos = pegarTodosUsers()
    for (var i = 0; i < todos.length; i++) {
        users = todos[i]
        if (users.indexOf("Usuario:") == 0) {

            valores.push(localStorage.getItem(users))
            // console.log("USUARIO: {" + valores + " }")
        }
    }
    return valores
}
//Passa tudo para um array
salvandoValores = () => {
    lista = pegaSoOsUsuarios()
    
    for (var i = 0; i < lista.length; i++) {
       
       aux = lista[i].split(',')[0]
       if(aux == usuario.nome){
           console.log("OPAAAA! AQUI É IGUAL..")
       usuarioG.nome.push(usuario.nome)
       usuarioG.contato.push(usuario.contato)
       usuarioG.senha.push(usuario.senha)
       usuarioG.genero.push(usuario.genero)
       usuarioG.dataNascimento.push(usuario.dataNascimento)
       usuarioG.receita.push(usuario.receita)   
       usuarioG.vizualizacao.push(usuario.vizualizacao) 
    }else{
    
        usuarioG.nome.push(lista[i].split(',')[0])
        usuarioG.contato.push(lista[i].split(',')[1])
        usuarioG.senha.push(lista[i].split(',')[2])
        usuarioG.genero.push(lista[i].split(',')[3])
        usuarioG.dataNascimento.push(lista[i].split(',')[4])
        usuarioG.receita.push(lista[i].split(',')[5])   // receita se nao tiver nada vai undefined
        usuarioG.vizualizacao.push(lista[i].split(',')[6])   // vizualização se nao tiver nada vai undefined
    }
 


    }
    console.log(usuarioG) // mostrao usuario pego automaticamente
    return usuarioG
}
salvandoValores()
//Pega todas as Receitas
pegarTodasReceitas = props => {
    document.getElementById("txtLocalizar").innerHTML = ""
    usuarioG.nome
    usuarioG.contato
    // usuarioG.senha
    // usuarioG.dataNascimento
    // usuarioG.genero
    usuarioG.receita
    usuarioG.vizualizacao

    usersReceitasPego = {
        indice: [],
        autor: [],
        conta: [],
        receita: [],
        vizuali: [],
    }
    cont = 0
    for (var i = 0; i < usuarioG.receita.length; i++) {
        receita = usuarioG.receita[i]
        vizuali = usuarioG.vizualizacao[i]
        autor = usuarioG.nome[i]
        conta = usuarioG.contato[i]
        if (receita != "") {
            cont++
            console.log("ID: " + i);
            console.log("AUTOR: " + autor)
            console.log("CONTATO:" + conta)
            console.log("RECEITA: " + receita)
            console.log("VIZUALIZAÇÃO: " + vizuali)

            //usuarioG.nome.push(lista[i].split(',')[0])
            usersReceitasPego.indice.push(i)
            usersReceitasPego.autor.push(autor)
            usersReceitasPego.conta.push(conta)
            usersReceitasPego.receita.push(receita)
            usersReceitasPego.vizuali.push(vizuali)

            document.getElementById("txtLocalizar").innerHTML += `${i} | ${autor} | ${receita} | ${vizuali}\n`
        } else {

        }
    }

    return usersReceitasPego
}
/*
2-
Ao clickar pra ver alguma receita cont ++ naquela receita daquela pessoa
(ir no localstorage da pessoa autora pegando todos os dados sobrepoem tudo adicionando +1 na vizualização)
================================================VERIFICAR AQUI ESSE METODO==================================================
Na textArea("txtLocalizar") quando da uma vizualização ele NÃO ATUALIZA continua com o valor antigo e não o novo
*/
vizualizarReceita = () => {
    salvandoValores()
    document.getElementById("txtLocalizar").innerHTML = ""

    receitasP = pegarTodasReceitas()
    console.log(receitasP)
    escolhido = document.getElementById("idReceitaEsco").value //Pega o indice escolhido
    console.log("INDICE:      " + receitasP.indice[escolhido])
    console.log("indice pego: " + escolhido)
    if (escolhido == "" || escolhido == undefined || escolhido == -1) {
        document.getElementById("divReceitaPego").innerHTML = `<h2>Favor preencher essa budega!</h2>`
    } else {
        document.getElementById("divReceitaPego").innerHTML = `<h2>${usersReceitasPego.receita[escolhido]}</h2>`
        usersReceitasPego.indice[escolhido]
        console.log(usersReceitasPego.indice[escolhido])
        nomeP = usersReceitasPego.autor[escolhido]
        console.log(usersReceitasPego.autor[escolhido])
        contato = usersReceitasPego.conta[escolhido]
        console.log(usersReceitasPego.conta[escolhido])
        usersReceitasPego.receita[escolhido]
        console.log(usersReceitasPego.receita[escolhido])
        vizualizacao = usersReceitasPego.vizuali[escolhido]
        console.log(usersReceitasPego.vizuali[escolhido])
        if (vizualizacao == "" || vizualizacao == undefined) {
            vizualizacao = 0
        }
        
        usersReceitasPego.vizuali[escolhido] = vizualizacao

        achei = localStorage.getItem("Usuario:" + nomeP)

        console.log("PEGUEI O CANDANGO: "+achei)
        verifi=achei.split(",")[1]
        if(verifi == contato){ //achei = localstorage da pessoa pega
            console.log("É esse aqui mesmo!")
            nomeAchado = achei.split(",")[0]
            contatoAchado = achei.split(",")[1]
            senhaAchado = achei.split(",")[2]
            generoAchado = achei.split(",")[3]
            dataAchado = achei.split(",")[4]
            receitaAchada = achei.split(",")[5]
            vizualizacaoAchado = achei.split(",")[6]
            // passa pro array usuario e sobreescreve tudo dele no localstorage
           num = Number(vizualizacaoAchado) + 1
            
            pessoa = [nomeAchado, contatoAchado, senhaAchado, generoAchado,dataAchado, receitaAchada, num]
            localStorage.setItem("Usuario:" + nomeP,pessoa)

        }

        
    }
}

//logout
logout = () => {
    window.location.href = "login.html"
    
    localStorage.setItem("UserAtual", "true")
    localStorage.setItem("EstadoDaPagina", "false")
}
deletarUsers=()=>{
resp = window.prompt("Olá mundo!")
    if(resp == "x"){
        localStorage.removeItem("Usuario:" + userPego)
        window.location.href = "login.html"
    }else{
        console.log("Vou apagar não")
    }
}

//Ao fechar a pagina tudo a respeito de login efetivado vira false e so entra com login true
window.onbeforeunload = function () {
  
    localStorage.setItem("UserAtual", "false")
    return localStorage.setItem("EstadoDaPagina", "false")

};
