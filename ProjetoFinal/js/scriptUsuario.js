/*
Adicionar receita se nao tiver
Localizar receitas
excluir receita
adicionar vizualização da receita
excluir conta

*/


//DELETA TODO USUARIO DO LOCALSTORAGE COM AQUELE CONTATO
//REMOVER DELETAR TUDO
//ACRESCENTAR DELETAR APENAS O USUARIO ATUAL
//Pedindo a login e senha para confirmar
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
    }
        else {
            console.log("Achei naum!")
            document.getElementById("respErr").innerHTML = `Ta aqui não.`
        }
    }

}

//PEGA TODAS AS RECEITAS
pegarTodasReceitas = props => {
    lista = valoresUsers()
    contatosAchados = []
    for (var i = 0; i < lista.length; i++) {
        contatosAchados.push(lista[i].split(',')[5])
    }
    return contatosAchados

}

// Vizualizar tal receita e colocar uma vizualização nela.
vizualizarReceita = ()=>{
}

//So pode deletar se a pessoa for a autora
//Vai pela lblUser q é a pessoa logada, pega o indice e so pode deletar a receita do indice dela
excluirReceita=()=>{

}