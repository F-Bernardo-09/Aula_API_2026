import Usuario from "./model/usuario.js";

// CREATE
await Usuario.create({
  email: "joao@gmail.com",
  nome: "João",
})
  .then((usuario) => console.log("Usuário criado com sucesso: ", usuario))
  .catch((error) => console.log("Erro ao criar usuário: ", error));

// READ
console.log(await Usuario.findAll());

// UPDATE
