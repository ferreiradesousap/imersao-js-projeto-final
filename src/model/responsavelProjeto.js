const Pessoa = require('./pessoa');
const TipoPessoa = require('./tipoPessoa');
const Projeto = require('./projeto');

class ResponsavelProjeto extends Pessoa {

    projetosCriados = [];
    static listaCadastros = [];

    constructor(nome, email, telefone, usuario) {
        super(nome, email, telefone, usuario, TipoPessoa.FISICA);
        super.constructor.listaCadastros.push(this);
    }

    criarProjeto(nome, descricao, objetivo, verbaTotalNecessaria, publicoAlvo) {
        this.projetosCriados.push(new Projeto(nome, descricao, objetivo, verbaTotalNecessaria, this, publicoAlvo));
    }
}

module.exports = ResponsavelProjeto;