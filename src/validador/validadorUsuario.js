const Usuario = require("../model/usuario");

class ValidadorUsuario {
    static validarConfirmacaoESenha(confirmacaoSenha, senha) {
        if (confirmacaoSenha !== senha) {
            throw new Error('Confirmação de senha e senha não conferem.');
        }
    }

    static validarEmailLogin(login) {
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regexEmail.test(login)) {
            throw new Error('O login informado não é um email válido.');
        }
    }

    static validarInstanciaUsuario(usuario) {
        if (!(usuario instanceof Usuario)) {
            throw new Error('Usuário inválido.');
        }
    }

    static validarUsuarioJaCadastrado(login, listaCadastros) {
        if (listaCadastros.findIndex(u => u.login === login) >= 0) {
            throw new Error('Já existe um usuário cadastrado com este login.');
        }
    }

    static validarLogin(login, senha, listaCadastros) {
        console.table(listaCadastros);
        let index = listaCadastros.findIndex(u => u.login === login && u.senha === senha);
        if (index < 0) {
            throw new Error('Usuário e/ou senha incorreto(s)');
        }
    }

    static validarCadastroUsuario(login, senha, confirmacaoSenha, listaCadastros) {
        if (login === undefined || login === null) {
            throw new Error('É necessário informar o login.');
        }
        if (senha === undefined || senha === null) {
            throw new Error('É necessário informar a senha.');
        }
        if (confirmacaoSenha === undefined || confirmacaoSenha === null) {
            throw new Error('É necessário informar a confirmação de senha.');
        }

        this.validarConfirmacaoESenha(senha, confirmacaoSenha);
        this.validarUsuarioJaCadastrado(login, listaCadastros);
        this.validarEmailLogin(login);
    }
}

module.exports = ValidadorUsuario;