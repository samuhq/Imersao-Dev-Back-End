import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
    // Obter todos os posts usando a função getTodosPosts
    const posts = await getTodosPosts();
    // Enviar uma resposta HTTP com código de status 200 e os posts no formato JSON
    res.status(200).json(posts);
}