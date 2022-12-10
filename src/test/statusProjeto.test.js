const StatusProjeto = require("../model/statusProjeto");

describe("StatusProjeto: Testes das constantes", () => {    

    test("Status: Aguardando patrocinio", () => {
        expect(StatusProjeto.AGUARDANDO_PATROCINIO).toEqual("Aguardando patrocinio");
    })

    test("Status: Projeto patrocinado", () => {
        expect(StatusProjeto.PATROCINADO).toEqual("Patrocínio recebido");
    })

    test("Status: Em andamento", () => {
        expect(StatusProjeto.EM_ANDAMENTO).toEqual("Em andamento");
    })

    test("Status: Concluído", () => {
        expect(StatusProjeto.CONCLUIDO).toEqual("Concluído");
    })

})

/*
describe("", () => {   

    test("", () => {
        expect().toEqual();
    })  

})


*/