class GeradorId {

    static getProximoId(item) {
        return item.getUltimoIdCadastrado() + 1;
    }
}

module.exports = GeradorId;