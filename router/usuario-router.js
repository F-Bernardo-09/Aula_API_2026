import express from "express";

const usuarioRouter = express.Router();

usuarioRouter.get("/", (req, res) => {
  res.send("TODO: Listar usuarios");
});

usuarioRouter.get("/:id", (req, res) => {
  res.send("TODO: Listar usuario com id");
});

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
