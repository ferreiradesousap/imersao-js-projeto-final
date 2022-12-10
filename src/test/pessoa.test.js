const Pessoa = require("../model/pessoa");
const Usuario = require("../model/usuario");
const TipoPessoa = require("../model/tipoPessoa");

describe("Classe Pessoa ", () => {
    let usuario = new Usuario();
    usuario.criarUsuario('teste@reprograma.com.br', 'abc', 'abc');
    test("Criar pessoa  : Caso de sucesso", () => {
        expect(new Pessoa('Julieta', 'julieta@reprograma.com', '11199999999', usuario, TipoPessoa.FISICA)).toBeInstanceOf(Pessoa);
    })

    test("Criar pessoa  : Caso de insucesso -> E-mail não informado", () => {
        let email;
        expect(() => new Pessoa('Julieta', email, '11199999999', usuario, TipoPessoa.FISICA)).toThrow('E-mail não informado.');
    })

    test("Criar pessoa  : Caso de insucesso -> E-mail inválido", () => {
        expect(() => new Pessoa('Julieta', 'julieta.com', '11199999999', usuario, TipoPessoa.FISICA)).toThrow('O e-mail informado é inválido.');
    })

    test("Criar pessoa  : Caso de insucesso -> Telefone não informado", () => {
        let telefone;
        expect(() => new Pessoa('Julieta', 'julieta@reprograma.com', telefone, usuario, TipoPessoa.FISICA)).toThrow('Telefone não informado.');
    })

    test("Criar pessoa  : Caso de insucesso -> Telefone inválido", () => {
        expect(() => new Pessoa('Julieta', 'julieta@reprograma.com', '119', usuario, TipoPessoa.FISICA)).toThrow('O telefone informado é inválido.');
    })

    test("Criar pessoa  : Caso de insucesso -> Usuário inválido", () => {
        let novoUsuario = 1;
        expect(() => new Pessoa('Julieta', 'julieta@reprograma.com', '11199999999', novoUsuario, TipoPessoa.FISICA)).toThrow('Usuário inválido.');
    })
})

