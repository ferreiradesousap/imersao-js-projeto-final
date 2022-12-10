const TipoPessoa = require("../model/tipoPessoa");

describe("TipoPessoa: Testes das constantes", () => {

    test("Pessoa Fisíca", () => {
        expect(TipoPessoa.FISICA).toEqual("Física");
    })

    test("Pessoa Jurídica", () => {
        expect(TipoPessoa.JURIDICA).toEqual("Jurídica");
    })

});
