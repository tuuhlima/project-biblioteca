start();
btn();

function start(){
    var agenda={
        contatos: [],
        
        adicionar: function(contato){

            
            this.contatos.push(contato);
            salvar();
        },


        salvar: function () {
			var contatosString = JSON.stringify(this.contatos);
			localStorage.contatos = contatosString;
		},
		pegarContatosSalvos: function () {
			this.contatos = JSON.parse(localStorage.contatos);
		}     
    }
}


function btn(){
    var btn = document.getElementById('bntCadastrar');
    btn.onclick = function(){
        var nome = document.getElementById('nome');
        var email = document.getElementById('email');
        var telefone = document.getElementById('telefone');

        var contato = {
            nome: this.nome.value(),
        }

        
        agenda.adicionar(contato);
    };
}

