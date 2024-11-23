import express from "express";
import routes from "./src/routes/postsRoutes.js";

const app = express();
app.use(express.static("uploads"));
routes(app);

// Iniciar o servidor na porta 3000 e exibir uma mensagem de log
app.listen(3000, () => {
    console.log("Servidor Escutando...");
});
