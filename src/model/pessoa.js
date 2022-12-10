const GeradorId = require("../utils/geradorId");
const ValidadorPessoa = require("../validador/validadorPessoa");

class Pessoa {
    #id;
    nome;
    email;
    telefone;
    usuario;
    tipoPessoa;

    static listaCadastros = [];

    constructor(nome, email, telefone, usuario, tipoPessoa) {
        ValidadorPessoa.validarCadastro(email, telefone, usuario, tipoPessoa);
        this.#id = GeradorId.getProximoId(this);
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.usuario = usuario;
        this.tipoPessoa = tipoPessoa;
        this.constructor.listaCadastros.push(this);
    }

    get id() {
        return this.#id;
    }

    getUltimoIdCadastrado() {
        let quantidadeCadastros = Pessoa.listaCadastros.length;
        if (quantidadeCadastros === 0) {
            return 0;
        }
        return Pessoa.listaCadastros[quantidadeCadastros - 1].id;
    }

}

module.exports = Pessoa;