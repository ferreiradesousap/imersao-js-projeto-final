const Projeto = require("../model/projeto");
const Usuario = require("../model/usuario");
const ResponsavelProjeto = require("../model/responsavelProjeto");


let projetos = [];
let usuario = new Usuario();
let responsavelAndre = new ResponsavelProjeto("André", "andre@teste.com", "11985455555",
    usuario.criarUsuario("andre@teste.com", "133", "133"));

console.log("Criando projetos...");

projetos.push(new Projeto("Projeto existimos", "Visibilidade para pessoas LGBTQIAPN+ em situação de vulnerabilidade",
    50000, responsavelAndre, "Pessoas trans"));

projetos.push(new Projeto("Pão com propósito", "Venda de pães de ingredientes doados, para arrecadação de fundos para famílias em vulnerabilidade social.",
    10000, responsavelAndre, "Pessoas em vulnerabilidade social/econômica"));

module.exports = projetos;