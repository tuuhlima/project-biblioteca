$(document).ready(function(){
    
    //obj Login
    var conta={
        contas: [],
        adicionarConta: function(conta){
                    
        }

    

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
        conta.adicionarConta(conta);
    });

    //comprar;
    //add carrinho;



})