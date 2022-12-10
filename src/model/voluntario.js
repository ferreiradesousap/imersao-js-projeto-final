
const Pessoa = require('./pessoa');
const TipoPessoa = require('./tipoPessoa');
const Projeto = require('./projeto');

class Voluntario extends Pessoa {
    inscricoesProjetos = [];
    static listaCadastros = [];

    constructor(nome, email, telefone, usuario) {
        super(nome, email, telefone, usuario, TipoPessoa.FISICA);
        super.constructor.listaCadastros.push(this);
    }

    participarDeProjeto(projeto) {
        if (projeto instanceof Projeto) {
            this.inscricoesProjetos.push(projeto);
            projeto.voluntariosCadastrados.push(this);
        }
    }

    sairDeProjeto(projeto) {
        if (projeto instanceof Projeto) {
            let index = this.inscricoesProjetos.findIndex(p => p.nome === projeto.nome && p.id === projeto.id);
            this.inscricoesProjetos.splice(index, 1);
            projeto.removerVoluntario(this);
        }
    }
}


module.exports = Voluntario;
/*

participarDeNovoProjeto();
sairDeProjeto();

*/