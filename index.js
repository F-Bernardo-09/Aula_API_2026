import express from "express";

const app = express();
app.use(express.json());
const port = 3000;

import usuarioRouter from "./router/usuario-router.js";

app.use("/usuarios", usuarioRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
