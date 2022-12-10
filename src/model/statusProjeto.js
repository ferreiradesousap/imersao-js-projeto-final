class StatusProjeto {

    static #AGUARDANDO_PATROCINIO = "Aguardando patrocinio";
    static #PATROCINADO = "Patrocínio recebido";
    static #EM_ANDAMENTO = "Em andamento";
    static #CONCLUIDO = "Concluído";

    static get AGUARDANDO_PATROCINIO() {
        return this.#AGUARDANDO_PATROCINIO;
    }

    static get PATROCINADO() {
        return this.#PATROCINADO;
    }

    static get EM_ANDAMENTO() {
        return this.#EM_ANDAMENTO;
    }

    static get CONCLUIDO() {
        return this.#CONCLUIDO;
    }

}

module.exports = StatusProjeto;

