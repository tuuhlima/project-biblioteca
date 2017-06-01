$(document).ready(function(){
    
    //obj Login
    var Login={
        contas: [],
        adicionarConta: function(contato){
        
        }

    }
    //Pegar as informaçães
    $('#frmCadastro').click(function(event){
		event.preventDefault();
		var contato = {
			nome: $('#txtNome').val(),
            senha: $('#txtSenha').val(),
        }
        console.log(contato);
    });



})