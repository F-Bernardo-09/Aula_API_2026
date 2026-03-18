import express from "express";
import {
  getUsuarios,
  getUsuarioByEmail,
} from "../controller/usuario-controller.js";

const usuarioRouter = express.Router();

usuarioRouter.get("/", getUsuarios);

usuarioRouter.get("/:email", getUsuarioByEmail);

usuarioRouter.post("/", (req, res) => {
  res.send("TODO: Criar usuario");
});

usuarioRouter.put("/:id", (req, res) => {
  res.send("TODO: Atualizar usuario com id ${req.params.id}");
});

usuarioRouter.delete("/:id", (req, res) => {
  res.send("TODO: Deletar usuario com id ${req.params.id}");
});

export default usuarioRouter;
