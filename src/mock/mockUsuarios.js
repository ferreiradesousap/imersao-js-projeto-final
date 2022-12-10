const Usuario = require("../model/usuario");

let usuarios = [];
let usuario = new Usuario();
console.log("Criando usuarios...");

usuarios.push(usuario.criarUsuario('teste@gmail.com', '123', '123'));
usuarios.push(usuario.criarUsuario('reprograma@teste.com', 'a', 'a'));

//usuarios.push(usuario.criarUsuario('reprograma@teste.com', 'a', 'a'));


module.exports = usuarios;