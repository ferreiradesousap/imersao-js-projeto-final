const Pessoa = require("../model/pessoa");
const Usuario = require("../model/usuario");
const TipoPessoa = require("../model/tipoPessoa");

class ValidadorPessoa {
    static validaTipoPessoa(tipoPessoa) {
        if (tipoPessoa !== 'Física' && tipoPessoa !== 'Jurídica') {
            throw new Error('Tipo de pessoa inválido.');
        }
    }

    static validarEmail(email) {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email === null || email === undefined) {
            throw new Error('E-mail não informado.');
        }
        if (!regexEmail.test(email)) {
            throw new Error('O e-mail informado é inválido.');
        }
    }

    static validarTelefone(telefone) {
        let regexTelefone = /^\+?\(?([0-9]{2})?\)?\s?[0-9]{4,5}(-|\s)?[0-9]{4}$/;
        if (telefone === null || telefone === undefined) {
            throw new Error('Telefone não informado.');
        }
        if (!regexTelefone.test(telefone)) {
            throw new Error('O telefone informado é inválido.');
        }
    }

    static validarUsuario(usuario) {
        if (!(usuario instanceof Usuario)) {
            throw new Error('Usuário inválido.');
        }
    }

    static validarCadastro(email, telefone, usuario, tipoPessoa) {
        this.validaTipoPessoa(tipoPessoa);
        this.validarEmail(email);
        this.validarTelefone(telefone);
        this.validarUsuario(usuario);
    }
}

module.exports = ValidadorPessoa;