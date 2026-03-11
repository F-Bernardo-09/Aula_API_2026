import Usuario from "./model/usuario.js";

// CREATE
await Usuario.create({
  email: "joao@gmail.com",
  nome: "João",
})
  .then((usuario) => console.log("Usuário criado com sucesso: ", usuario))
  .catch((error) => console.log("Erro ao criar usuário: ", error));

const usuarion = await Usuario.findByPk("joao@gmail.com");
console.log(usuario);

// READ
console.log(await Usuario.findAll());

// UPDATE
usuario.set({
  nome: "João Silva",
});
await usuario.save();

// DELETE
const usuario = await Usuario.findByPk("joao@gmail.com");
await usuario.destroy();
