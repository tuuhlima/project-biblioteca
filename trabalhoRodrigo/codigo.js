


(function () {
    var agenda = {
        contatos: [],
        adicionar: function (contato) {
            if ("undefined" === typeof localStorage.contatos) {
                this.contatos.push(contato);
                this.salvar();
                limpar();
            } else {
                this.pegarContatosSalvos();
                if (contato) {
                    for (var indice in this.contatos) {
                        if (contato.nome === this.contatos[indice].nome) {
                            throw new Error('O contato ja existe !!!');
                            return;
                        }
                    }
                    this.contatos.push(contato);
                    this.salvar();
                    limpar();
                } else {
                    throw new Error('Erro ao Realizar Cadastro');
                }
            }
            criarNovoContato(contato);
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

    document.getElementById('myform').onsubmit = function pegarDados(event) {
        event.preventDefault();
        var contato = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            telefone: document.getElementById('telefone').value,
        }
        try {
            agenda.adicionar(contato);
        } catch (e) {
            alert(e.message);
        }
    }

    var limpar = function(){
        document.getElementById('nome').value = "";
        document.getElementById('email').value = "";
        document.getElementById('telefone').value = "";
    }

    var criarNovoContato = function (contato) {

        var tr = document.createElement('tr');
        var tdnome = document.createElement('td');
        var tdemail = document.createElement('td');
        var tdtelefone = document.createElement('td');
        var listTable = document.getElementById('listTable');
        var nome = document.createTextNode(contato.nome);
        var email = document.createTextNode(contato.email);
        var telefone = document.createTextNode(contato.telefone);

        listTable.appendChild(tr);
        tr.appendChild(tdnome);
        tr.appendChild(tdemail);
        tr.appendChild(tdtelefone);
        tdnome.appendChild(nome);
        tdemail.appendChild(email);
        tdtelefone.appendChild(telefone);
    }
    
    agenda.listar();
})();

