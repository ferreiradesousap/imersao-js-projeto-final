const Voluntario = require('../model/voluntario');
const Usuario = require("../model/usuario");

let voluntarios = [];
let usuario = new Usuario();
console.log("Criando voluntarios...");

voluntarios.push(new Voluntario("Maria", "maria@teste.com", "11987444444",
    usuario.criarUsuario("maria@teste.com", "123", "123")));
voluntarios.push(new Voluntario("Aline", "aline@teste.com", "11987444444",
usuario.criarUsuario("aline@teste.com", "a", "a")));


module.exports = voluntarios;