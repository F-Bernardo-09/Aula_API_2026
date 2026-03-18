import express from "express";
import {
  getUsuarios,
  getUsuarioByEmail,
  criarUsuario,
  atualizarUsuario,
  deletarUsuario,
} from "../controller/usuario-controller.js";

const usuarioRouter = express.Router();

usuarioRouter.get("/", getUsuarios);

usuarioRouter.get("/:email", getUsuarioByEmail);

usuarioRouter.post("/", criarUsuario);

usuarioRouter.put("/:email", atualizarUsuario);

usuarioRouter.delete("/:email", deletarUsuario);

export default usuarioRouter;
