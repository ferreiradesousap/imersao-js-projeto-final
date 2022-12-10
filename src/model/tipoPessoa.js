class TipoPessoa {
    static #FISICA = "Física";
    static #JURIDICA = "Jurídica";

    static get FISICA() {
        return this.#FISICA;
    }

    static get JURIDICA() {
        return this.#JURIDICA;

    }
}

module.exports = TipoPessoa;