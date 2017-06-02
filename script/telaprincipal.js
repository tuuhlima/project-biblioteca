$(document).ready(function(){
    
    //obj Login
    var cadastro={
        contas: [],
        adicionarConta: function(conta){
            var emailValido = /^(\w+[._-]?)+@\w+.+(\w+[.]?)+$/;
            
            if(conta.nome){
                this.contas.push(conta);
                this.salvar();
                alert('Cadastro realizado com sucesso');
            }else{
                throw new Error('Erro ao add Contato');
            }

            
        },

        salvar: function () {
			var contasString = JSON.stringify(this.contas);
			localStorage.contas = contasString;
		},

    

    }
    //Pegar as informaçães


    //Login
    $('.frmLogin').submit(function(event){
		event.preventDefault();
		var contato = {
			nome: $('.txtNome').val(),
            senha: $('.txtSenha').val(),
        }
        console.log(contato);
    });
    
    //cadastros
    $('.frmCadastro').submit(function(event){
        event.preventDefault();
        var conta = {
            nome: $('.cadastroNome').val(),
            email: $('.cadastroEmail').val(),
            senha: $('.cadastroSenha').val(),
            confSenha: $('.cadastroConfSenha').val(),
        }
        try{
            cadastro.adicionarConta(conta);
        }catch(e){
            alert(e.message);
        }
        
    });

    //comprar;
    //add carrinho;



})