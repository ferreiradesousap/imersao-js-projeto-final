const Usuario = require("../model/usuario");

describe("Criar usuário ", () => {

    let usuario = new Usuario();
    usuario.criarUsuario('teste@reprograma.com.br', 'abc', 'abc');

    test("Criar usuario: Caso de sucesso", () => {
        usuario = new Usuario();
        expect(usuario.criarUsuario('user@teste.com.br', '123', '123')).toBe('Usuário cadastrado com sucesso.');
    })

    test("Fazer login: Caso de sucesso", () => {
        expect(usuario.fazerLogin('teste@reprograma.com.br', 'abc')).toBe('Login realizado com sucesso, seja bem-vindo(a).');
    })

    test("Trocar senha: Caso de sucesso", () => {
        expect(usuario.trocarSenha(usuario.senha, 111, 111)).toBe('Senha atualizada com sucesso.');
    })

    /*  Casos de insucesso */
    test("Criar usuario: Caso de insucesso -> Confirmação de senha e senha não conferem ", () => {
        expect(() => usuario.criarUsuario('novouser@teste.com.br', '123', 123)).toThrow('Confirmação de senha e senha não conferem.');
    })

    test("Criar usuario: Caso de insucesso -> Sem informar o login", () => {
        let login;
        expect(() => usuario.criarUsuario(login, '123', '123')).toThrow('É necessário informar o login.');
    })

    test("Criar usuario: Caso de insucesso -> Cadastro de usuário já existente", () => {
        expect(() => usuario.criarUsuario('teste@reprograma.com.br', 'abc', 'abc')).toThrow('Já existe um usuário cadastrado com este login.');
    })

    test("Criar usuario: Caso de insucesso -> Cadastro de usuário com e-mail inválido (regex)", () => {
        expect(() => usuario.criarUsuario('teste', 'abc', 'abc')).toThrow('O login informado não é um email válido.');
    })

    test("Trocar senha: Caso de insucesso -> Nova senha e sua confirmação não conferem.", () => {
        expect(() => usuario.trocarSenha(usuario.senha, 'minhaSenha', 'minhasenha')).toThrow('Confirmação de senha e senha não conferem.');
    })

    test("Trocar senha: Caso de insucesso -> Nova senha e sua confirmação não conferem.", () => {
        expect(() => usuario.trocarSenha("senhaAtual", 'minhasenha', 'minhasenha')).toThrow('A senha atual informada está incorreta.');
    })
})
