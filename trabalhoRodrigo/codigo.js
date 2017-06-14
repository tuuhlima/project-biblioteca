
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
                alert('Cadastro Realizado com Sucesso');
                this.salvar();
            }else{
                throw new Error('Erro ao Realizar Cadastro');
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
     
    var btn = document.getElementById('myform');
    btn.onsubmit = function mysubmit(event){
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
    
    
    
})();

function btn(){
    var btn = document.getElementById('bntCadastrar');
    btn.onclick = function(){
        var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        var telefone = document.getElementById('telefone');

       
        
        agenda.adicionar(contato);
    };
}

