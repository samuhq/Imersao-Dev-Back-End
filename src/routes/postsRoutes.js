import express from "express";
import { listarPosts } from "../controllers/postsControllers.js";

const routes = (app) => {
    // Configurar o middleware para analisar o corpo das requisições JSON
    app.use(express.json());

    // Definir uma rota GET para "/posts"
    app.get("/posts", listarPosts);
}

export default routes;
