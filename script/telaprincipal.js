$(document).ready(function(){
    
    //obj Login
    var Login={
        contas: [],
        adicionarConta: function(contato){

        }

    }
    //Pegar as informaçães
    $('#frmCadastro').submit(function(event){
		event.preventDefault();
        alert('test');
		var contato = {
			nome: $('#txtNome').val(),
            senha: $('#txtSenha').val(),
        }
    });



})