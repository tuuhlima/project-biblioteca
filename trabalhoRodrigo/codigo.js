
(function(){
       var agenda={
        contatos: [],
        adicionar: function(contato){
            this.pegarContatosSalvos();
            if(contato){
                for (var indice in this.contatos) {
                    if(contato.nome === this.contatos[indice].nome){
                        throw new Error('O contato ja existe !!!');
                        return;
                    }
                }
                this.contatos.push(contato);
                this.salvar();
                alert('Cadastro Realizado com Sucesso');
            }else{
                throw new Error('Erro ao Realizar Cadastro');
            }
            for (var indice in this.contatos) {
                console.log(this.contatos[indice]);
            }
        },

        listar: function () {
			this.pegarContatosSalvos();
			for (indice in this.contatos) {
				var contato = this.contatos[indice];
				criarNovoContato(contato);
			}
		},
        salvar: function () {
			var contatosString = JSON.stringify(this.contatos);
			localStorage.contatos = contatosString;
		},
		pegarContatosSalvos: function () {
			this.contatos = JSON.parse(localStorage.contatos);
		},     
    }
     
    document.getElementById('myform').onsubmit = function pegarDados(event){
        event.preventDefault();
         var contato = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
        } 
        try{
            agenda.adicionar(contato);
        }catch(e){
            alert(e.message);
        }      
    }

    var criarNovoContato = function (contato){
        var listTable = document.getElementById('listTable');
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var thnome = document.createElement('th');
        var themail = document.createElement('th');
        var tdnome = document.createElement('td');
        var tdnome = document.createElement('td');
        
        console.log(contato.nome);

    }
    agenda.listar(); 
})();

