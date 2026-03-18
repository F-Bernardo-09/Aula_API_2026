import Usuario from "../model/usuario.js";

export async function getUsuarios(req, rest) {
  try {
    const usuarios = await Usuario;
    rest.json(usuarios);
    return;
  } catch (error) {
    rest.status(400).json({ error: error.message });
  }
}

export async function getUsuarioByEmail(req, rest) {
  try {
    const usuario = await Usuario.findByPk(req.params.email);
    if (!usuario) {
      rest.status(404).json({ error: "Usuario não encontrado" });
      return;
    }
    rest.json(usuario);
  } catch (error) {
    rest.status(400).json({ error: error.message });
  }
}
