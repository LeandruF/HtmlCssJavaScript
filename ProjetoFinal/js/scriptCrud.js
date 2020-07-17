//Se for 'true' o estado no localstorage deixa entrar na pagina
estado = localStorage.getItem("EstadoDaPagina")
userPego = localStorage.getItem("UserAtual")
 
if(estado != "true"){
    window.location.href="login.html"
}else if(userPego =="Admin"){
        document.getElementById("lblUser").innerHTML = `${userPego}` 
}else{
    document.getElementById("lblUser").innerHTML = `${userPego}`
}


var usuario = {
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
//Retorna todos os Usuarios e valores 
valoresUsers = props => {
    users = {}
    valores = []
    todos = pegarTodosUsers()
    for (var i = 0; i < todos.length; i++) {
        users = todos[i]
        valores.push(localStorage.getItem(users))
    }
    return valores
}
//DELETA TODO USUARIO DO LOCALSTORAGE COM AQUELE CONTATO
deletarUsers = (props) => {
    users = {}
    valores = []
    todos = pegarTodosUsers()
    for (var i = 0; i < todos.length; i++) {
        users = todos[i]
        valores.push(localStorage.getItem(users))
        acheiContato = valores[i].split(",")[1];
        acheiNome = valores[i].split(",")[0];

        if (acheiContato == props) { // compara o q foi achado com q foi digitado
            //  console.log("Usuario:"+acheiNome)
          var  resposta = window.prompt("Se Joao tinha 7 maças, deu 4 para Maria, Arthur lhe deu 8 e pegou 3. Quantas laranjas Joao tem?")
        }  if (resposta == "8") {
            localStorage.removeItem("Usuario:" + acheiNome)
            console.log("PUFF Removeu.")
            document.getElementById("respErr").innerHTML = `Puff, Sumiu.`
            setTimeout(function () { window.location.href = "adminCadastrar.html" }, 2000)

            //REMOVE PELO INDICE TODOS OS ATRIBUTOS DA PESSOA
           index = usuario.nome.indexOf(acheiNome)
           usuario.nome.pop(index)
           usuario.contato.pop(index)
           usuario.senha.pop(index)
           usuario.dataNascimento.pop(index)
           usuario.genero.pop(index)
           usuario.receita.pop(index)
           usuario.vizualizacao.pop(index)

        if(resposta=="DELETE *") {//SECRETO------ DELETA TUDO DO LOCALSTORAGE E DO ARRAY USUARIO
            usuario="";
            localStorage.clear();
        }
    }
        else {
            console.log("Achei naum!")
            document.getElementById("respErr").innerHTML = `Ta aqui não.`
        }
    }

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
//Pega todas as Receitas
pegarTodasReceitas = props => {
usuario.nome
//usuario.contato
//usuario.senha
//usuario.dataNascimento
//usuario.genero
usuario.receita
usuario.vizualizacao
console.log(usuario.nome.indexOf("Leandro"))
    cont=0
for (var i = 0;i<usuario.receita.length;i++){
    receita = usuario.receita[i]
    vizuali = usuario.vizualizacao[i]
    autor = usuario.nome[i]
    if(receita!=""){
cont++
        console.log("ID: "+i);
        console.log("AUTOR: "+autor)
        console.log("RECEITA: "+receita)
        console.log("VIZUALIZAÇÃO: "+vizuali)
        console.log("Contador:"+cont)
        document.getElementById("txtLocalizar").innerHTML+=`${i} | ${autor} | ${receita} | ${vizuali}\n`
    }else{

    }
}
}
//SALVA SOMENTE os USUARIOS: do localstorage no array usuario
salvandoValores = () => {
    lista = pegaSoOsUsuarios()
    for (var i = 0; i < lista.length; i++) {
        usuario.nome.push(lista[i].split(',')[0])
        usuario.contato.push(lista[i].split(',')[1])
        usuario.senha.push(lista[i].split(',')[2])
        usuario.genero.push(lista[i].split(',')[3])
        usuario.dataNascimento.push(lista[i].split(',')[4])
        usuario.receita.push(lista[i].split(',')[5])   // receita se nao tiver nada vai undefined
        usuario.vizualizacao.push(lista[i].split(',')[6])   // vizualização se nao tiver nada vai undefined
    }
    console.log(usuario) // mostrao usuario pego automaticamente
}
//Pega somente TODOS os contatos
pegarTodosOsContatos = props => {
    lista = valoresUsers()
    contatosAchados = []
    for (var i = 0; i < lista.length; i++) {
        contatosAchados.push(lista[i].split(',')[1])
    }
    return contatosAchados

}
//Verificar se o usuario digitado  JA TEM CONTATO CADASTRADO
controleContato = (arg) => {
    var userPego = pegarTodosOsContatos()
    var indice = 0;
    for (var i = 0; i < userPego.length; i++) {
        if (userPego[i] == arg) {
            document.getElementById("respErr").innerHTML += `Contato já está cadastrado.`
            document.getElementById("idContato").value = ""
            indice = -1
            console.log("Achei a pessoa com contato igual.")
        }
        if (indice == 0) {
            console.log("Não achei ninguem com contato igual")
            document.getElementById("respErr").innerHTML = ``
        }
    }
}
//Desloga e volta para a pagina login
logout = () => {
    window.location.href = "login.html"
    localStorage.setItem("AdminEstate", "false")
    localStorage.setItem("UserAtual", "false")
    localStorage.setItem("EstadoDaPagina", "false")
}
//Cadastra e faz as verificações
cadastrar = () => {

    document.getElementById('respErr').innerHTML = ""

    var cont = 0 // É mais para entrar na parte pra salvar no localstorage
    var nome = document.getElementById("idNome").value
    console.log("Olá " + nome)
    if (nome === null || nome === "" || nome == undefined) { // Nome não pode ser null ou "" ou undefined
        document.getElementById('respErr').innerHTML += `Nome é Necessario!<br>`
    } else {
        cont++
    }
    var contato = document.getElementById("idContato").value
    console.log("Contato: " + contato)
    if (contato === null || contato === "" || contato == undefined) { // Contato não pode ser null ou "" ou undefined
        document.getElementById('respErr').innerHTML += `Preciso do contato!<br>`
    } else {

        cont++
    }
    var senha = document.getElementById("idSenha").value
    console.log("Senha: " + senha)
    if (senha === null || senha === "" || senha == undefined) {
        document.getElementById('respErr').innerHTML += `Esta Faltando a senha!<br>`
    } else {
        if (senha.length < 8) { // Senha não pode ser menor q 8 digitos
            document.getElementById('respErr').innerHTML += `A senha precisa ter 8 digitos ou mais!<br>`
        } else {

            cont++
        }
    }

    var senhaRepetir = document.getElementById("idSenhaRepetir").value
    console.log("Senha Repetir: " + senhaRepetir)

    if (senhaRepetir != senha) {
        document.getElementById('respErr').innerHTML += `Senhas diferentes!<br>`

    } else if (senhaRepetir == null || senhaRepetir == "" || senhaRepetir == undefined) { //senharepetir nao pode ser null, "", bla bla bla

        document.getElementById('respErr').innerHTML += `Preenche a merda da senha!<br>`
    } else {
        console.log(" Parabens,Senhas iguais! ")
        cont++
    }

    //Pegar dia
    var dia = document.getElementById("idDia").value
    console.log("Dia:" + dia)
    if (dia == '0') { //0 = valor não setado
        document.getElementById('respErr').innerHTML += `Coloca o dia do aniversario! <br>`
    } else {
        cont++
    }

    //Pega Mes

    var mes = document.getElementById("idMes").value
    console.log("Mes:" + mes)
    if (mes == '0') {//0 = valor não setado
        document.getElementById('respErr').innerHTML += `Coloca o mes do aniversario! <br>`
    } else {
        cont++
    }
    //Pega Ano
    var ano = document.getElementById("idAno").value
    console.log("Ano:" + ano)
    if (ano == '0') {//0 = valor não setado
        document.getElementById('respErr').innerHTML += `Coloca o ano do aniversario! <br>`
    } else {
        cont++
    }
    //Junta tudo pra formar dataNascimento
    var dataNascimento = `${dia}/${mes}/${ano}`
    console.log("Data de Nascimento: " + dataNascimento)

    //Pega o todas as radios
    var genero = document.getElementsByName("genero"); //Pega todos os elementos radios com name="genero"

    for (var i = 0; i < genero.length; i++) {
        //Vai indo até achar a selecionada
        if (genero[i].checked) {
            genero = genero[i].value;
            console.log("Genero: " + genero)
            console.log(typeof (genero))
        }
    }
    console.log("Genero: " + genero)
    if (genero == "feminino" || genero == "masculino" || genero == 'outros') {
        cont++
    } else {
        document.getElementById('respErr').innerHTML += `Se vc for sem sexo coloca outros! <br>`
    }
    console.log("CONTADOR: " + cont)
    //Se todas as condições anteriores forem atendidas anteriormente q são 8
    if (cont == 8) {
        //Coloquei receita aqui so para ficar generico tanto na pagina admin quanto cadastrar usuario
        receita = document.getElementById("txtReceita").value
        var vizualizacao;
        pessoa = [nome, contato, senha, genero, dataNascimento, receita, vizualizacao]
        //Não tem mais necessidade pois onload pega tudo do localstorage e salva no usuario e seus respectivos atributos
        // usuario.nome = nome
        // usuario.contato = contato
        // usuario.senha = senha
        // usuario.genero = genero
        // usuario.dataNascimento = dataNascimento
        localStorage.setItem("Usuario:" + nome, pessoa)
        console.log("Usuario contem:" + usuario)
        document.getElementById('respPos').innerHTML += `Salvo com suscesso!`

      setTimeout(function () { window.location.href = "login.html" }, 3000) // função anonima que depois de 3 sec chama a pagina admin.html 
  

    }
}
//Ao fechar a janela no 'x' muda o estado para false
window.onbeforeunload = function () {
    localStorage.setItem("AdminEstate", "false")
    localStorage.setItem("UserAtual", "false")
    return localStorage.setItem("EstadoDaPagina", "false")

};
