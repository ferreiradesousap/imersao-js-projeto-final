const StatusProjeto = require("./statusProjeto");
const GeradorId = require("../utils/geradorId");
const Voluntario = require('./voluntario');

class Projeto {
    #id;
    nome;
    descricao;
    objetivo;
    verbaTotalNecessaria;
    verbaTotalRecebida;
    #verbaPendente;
    responsavel;
    publicoBeneficiado;
    status;

    voluntariosCadastrados = [];
    patrocinadores = [];
    static listaCadastros = [];

    constructor(nome, descricao, verbaTotalNecessaria, responsavel, publicoBeneficiado) {
        this.#id = GeradorId.getProximoId(this);
        this.nome = nome;
        this.descricao = descricao;
        this.verbaTotalNecessaria = verbaTotalNecessaria;
        this.verbaTotalRecebida = 0;
        this.#verbaPendente = verbaTotalNecessaria;
        this.responsavel = responsavel;
        this.publicoBeneficiado = publicoBeneficiado;
        this.status = StatusProjeto.AGUARDANDO_PATROCINIO;
        responsavel.projetosCriados.push(this);
    }

    get id() {
        return this.#id;
    }

    get verbaPendente() {
        return this.#verbaPendente;
    }

    getUltimoIdCadastrado() {
        let quantidadeCadastros = Projeto.listaCadastros.length;
        if (quantidadeCadastros === 0) {
            return 0;
        }
        return Projeto.listaCadastros[quantidadeCadastros - 1].id;
    }

    receberPatrocinio(patrocinador, verbaRecebida) {
        this.patrocinadores.push(patrocinador);
        this.verbaTotalRecebida += verbaRecebida;
        this.#verbaPendente -= verbaRecebida;
        this.status = StatusProjeto.PATROCINADO;
    }

    iniciarProjeto() {
        if (this.#verbaPendente > 0) {
            throw new Error('Não foram recebidos recursos suficientes para dar andamento ao projeto.');
        }
        if (this.voluntariosCadastrados.length === 0) {
            throw new Error('Não é possível dar andamento ao projeto pois não há voluntários disponíveis.');
        }
        this.status = StatusProjeto.EM_ANDAMENTO;
    }

    concluirProjeto() {
        if (this.status !== StatusProjeto.EM_ANDAMENTO) {
            throw new Error('Não é possível concluir um projeto que não está em andamento.');
        }
        if (this.#verbaPendente > 0) {
            throw new Error('Não foram recebidos recursos suficientes para concluir o projeto.');
        }

        this.voluntariosCadastrados.forEach(voluntario => {
            voluntario.sairDeProjeto(this);
            this.removerVoluntario(voluntario);
        });
        this.status = StatusProjeto.CONCLUIDO;
    }

    removerVoluntario(voluntario) {
        if (voluntario instanceof Voluntario) {
            let index = this.voluntariosCadastrados.findIndex(v => v.nome === voluntario.nome && v.id === voluntario.id);
            this.voluntariosCadastrados.splice(index, 1);
            voluntario.sairDeProjeto(this);
        }
    }

}

module.exports = Projeto;
