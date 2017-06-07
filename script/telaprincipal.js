$(document).ready(function(){
    
    //obj Login
    var cadastro={
        contas: [],
        adicionarConta: function(conta){
            this.pegarContas();
            for (var indice in this.contas) {
                if(this.contas[indice].nome === conta.nome){
                    throw new Error('Usuário já cadastrado');
                }  
            }
            if(conta){
                if(conta.senha === conta.confSenha){
                    this.contas.push(conta);
                    this.salvar();  
                alert('Cadastro realizado com sucesso');
                }else{
                    throw new Error('Senha não confere');
                }
            }else{
                throw new Error('Erro ao add Contato');
            }
                      
        },

        verificaLogin: function(contato){
            var aux = 0;
             this.pegarContas();
             for (var indice in this.contas) {
                if(this.contas[indice].nome === contato.nome && this.contas[indice].senha === contato.senha){
                   alert('Login realizado');
                   aux = 1;
                }
            }
            if(aux != 1){
                throw new Error('Erro ao entrar com Usuário e senha');
            }
        },

        salvar: function () {
			var contasString = JSON.stringify(this.contas);
			localStorage.contas = contasString;
		},

        pegarContas: function() {
            this.contas = JSON.parse(localStorage.contas);
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
        try{
            cadastro.verificaLogin(contato);
        }catch(e){
            alert(e.message);
        }
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

        $('.cadastroNome').val("");
        $('.cadastroEmail').val("");
        $('.cadastroSenha').val("");
        $('.cadastroConfSenha').val("");
        
    });

    //comprar;
    //add carrinho;



})