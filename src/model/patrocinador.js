const Pessoa = require('./pessoa');
const Projeto = require('./projeto');

class Patrocinador extends Pessoa {
    razaoSocial;
    nomeFantasia;

    static projetosPatrocinados = [];
    static listaCadastros = [];

    constructor(nome, razaoSocial, nomeFantasia, email, telefone, usuario, tipoPessoa) {
        super(nome, email, telefone, usuario, tipoPessoa);
        super.constructor.listaCadastros.push(this);
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
    }

    patrocinarNovoProjeto(projeto, verbaAEnviar) {
        if (projeto instanceof Projeto) {
            this.projetosPatrocinados.push(projeto);
            projeto.receberPatrocinio(this, verbaAEnviar);
        }
    }
}

module.exports = Patrocinador;