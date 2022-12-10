const GeradorId = require("../utils/geradorId");
const Pessoa = require("./pessoa");
const ValidadorUsuario = require("../validador/validadorUsuario");
const { listaCadastros } = require("./pessoa");

class Usuario {
    #id;
    login;
    senha;

    static listaCadastros = [];

    criarUsuario(login, senha, confirmacaoSenha) {
        ValidadorUsuario.validarCadastroUsuario(login, senha, confirmacaoSenha, Usuario.listaCadastros);

        this.login = login;
        this.senha = senha;
        this.#id = GeradorId.getProximoId(this);
        Usuario.listaCadastros.push(this);

        console.log('Usuário cadastrado com sucesso.');
        return this;
    }

    get id() {
        return this.#id;
    }

    getUltimoIdCadastrado() {
        let quantidadeCadastros = Usuario.listaCadastros.length;
        if (quantidadeCadastros === 0) {
            return 0;
        }
        return Usuario.listaCadastros[Usuario.listaCadastros.length - 1].id;
    }

    fazerLogin(login, senha) {
        ValidadorUsuario.validarLogin(login, senha, Usuario.listaCadastros);

        console.log('Login realizado com sucesso, seja bem-vindo(a).');
        return 'Login realizado com sucesso, seja bem-vindo(a).';
    }

    fazerLogout() {
        console.info('Saindo...');
        process.exit(1);
    }

    trocarSenha(senhaAtual, novaSenha, confirmacaoSenha) {
        if (confirmacaoSenha !== novaSenha) {
            throw new Error('Confirmação de senha e senha não conferem.');
        }
        let index = Usuario.listaCadastros.findIndex(u => u.login === this.login && u.senha === this.senha);
        let usuario = Usuario.listaCadastros[index];
        if (senhaAtual !== usuario.senha) {
            throw new Error('A senha atual informada está incorreta.');
        }
        usuario.senha = novaSenha;
        Usuario.listaCadastros[index] = usuario;

        console.log('Senha atualizada com sucesso.');
        return 'Senha atualizada com sucesso.';

    }

}


/*
let user1 = new Usuario();
user1.criarUsuario('tesdte@gmail.com', '123', '123');
let user2 = new Usuario();
user2.criarUsuario('teste@gmail.com', 1, 1);
console.table(Usuario.listaCadastros);

let user1 = new Usuario();
user1.criarUsuario('tesdte@gmail.com', '123', '123');

console.log(user1.senha);
user1.trocarSenha('123', '2', '2')
console.log(user1.senha)
*/

/*
let user1 = new Usuario();

user1.criarUsuario('tesdte@gmail.com', '123', '123');
let user2 = new Usuario();
user2.criarUsuario('teste@gmail.com', 1, 1);
console.table(Usuario.listaCadastros);
console.log(user1.id);
console.log(user2.id);*/

module.exports = Usuario;