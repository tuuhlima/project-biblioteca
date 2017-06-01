$(document).ready(function(){
    
    //obj Login
    var Login={
        contas: [],
        adicionarConta: function(contato){
        
        }

    }
    //Pegar as informaçães


    //Login
    $('#frmCadastro').submit(function(event){
		event.preventDefault();
		var contato = {
			nome: $('#txtNome').val(),
            senha: $('#txtSenha').val(),
        }
        console.log(contato);
    });

    //comprar;
    //add carrinho;



})