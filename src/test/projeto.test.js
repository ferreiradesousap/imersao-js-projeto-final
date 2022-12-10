const Projeto = require("../model/projeto");
const Usuario = require("../model/usuario");
const TipoPessoa = require("../model/tipoPessoa");
const Patrocinador = require("../model/patrocinador");
const StatusProjeto = require("../model/statusProjeto");
const ResponsavelProjeto = require("../model/responsavelProjeto");

describe("Criar usuário ", () => {
    let usuario = new Usuario();
    let responsavelAndre = new ResponsavelProjeto("André", "andre@teste.com", "11985455555",
        usuario.criarUsuario("andre@teste.com", "133", "133"));
    let patrocinadora = new Patrocinador("Claudia", null, null, "claudia@teste.com", "11987404417",
        usuario.criarUsuario("claudia@teste.com", "oi", "oi"), TipoPessoa.FISICA);
    let projeto;

    test("Criar projeto  : Caso de sucesso", () => {
        expect(new Projeto("Projeto existimos", "Visibilidade para pessoas LGBTQIAPN+ em situação de vulnerabilidade",
            50000, responsavelAndre, "Pessoas trans")).toBeInstanceOf(Projeto);
    })

    test("Receber patrocínio  : Caso de sucesso", () => {
        projeto = new Projeto("Pão com propósito", "Venda de pães de ingredientes doados, para arrecadação de fundos para famílias em vulnerabilidade social.",
            10000, responsavelAndre, "Pessoas em vulnerabilidade social/econômica");
        projeto.receberPatrocinio(patrocinadora, 7000);

        expect(projeto.status).toBe(StatusProjeto.PATROCINADO);
        expect(projeto.verbaTotalRecebida).toBe(7000);
        expect(projeto.verbaPendente).toBe(3000);
        expect(projeto.patrocinadores).toContain(patrocinadora);
    })

    test("Iniciar o projeto  : Caso de insucesso", () => {
        projeto = new Projeto("Pão com propósito", "Venda de pães de ingredientes doados, para arrecadação de fundos para famílias em vulnerabilidade social.",
            10000, responsavelAndre, "Pessoas em vulnerabilidade social/econômica");
        projeto.receberPatrocinio(patrocinadora, 7000);

        expect(() => projeto.iniciarProjeto()).toThrow('Não foram recebidos recursos suficientes para dar andamento ao projeto.');
    })

    test("Concluir o projeto  : Caso de insucesso", () => {
        projeto = new Projeto("Pão com propósito", "Venda de pães de ingredientes doados, para arrecadação de fundos para famílias em vulnerabilidade social.",
            10000, responsavelAndre, "Pessoas em vulnerabilidade social/econômica");
        projeto.receberPatrocinio(patrocinadora, 7000);

        expect(() => projeto.concluirProjeto()).toThrow('Não é possível concluir um projeto que não está em andamento.');
    })
})