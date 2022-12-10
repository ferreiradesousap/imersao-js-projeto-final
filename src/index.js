const Usuario = require('./model/usuario');
const Pessoa = require('./model/pessoa');
const Voluntario = require('./model/voluntario');
const TipoPessoa = require('./model/tipoPessoa');
const Patrocinador = require('./model/patrocinador');
const ResponsavelProjeto = require('./model/responsavelProjeto');

let user1 = new Usuario();

user1.criarUsuario('tesdte@gmail.com', '123', '123');
let user2 = new Usuario();
user2.criarUsuario('teste@gmail.com', 1, 1);

let user3 = new Usuario();
user3.criarUsuario('tessadte@gmail.com', 1, 1);

console.table(Usuario.usuariosCadastrados);
console.log(user1.id);
console.log(user2.id);
console.log(user3.id);
let p = new Pessoa("oi", "teste", "eai", "fechou");
console.log(p.id);

let v = new Voluntario("Maria", "email", "telefone", "usuario");
console.log("voluntário")
console.log(v.id)
console.table(Voluntario.listaCadastros)

let patroci = new Patrocinador("patrocinador","razao", "fantasia", "cnpj", "email", "telefone", "usuario", TipoPessoa.JURIDICA);


console.log("Patrocinador")
console.table(Patrocinador.listaCadastros)
console.log("Responsável projeto")
let resp = new ResponsavelProjeto("Resp", "email", '11994445', "usuario")
console.table(ResponsavelProjeto.listaCadastros)
console.log("pessoa")
console.table(Pessoa.listaCadastros)

