import fs from "fs"
import { getTodosPosts, criarPost, atualizarPost } from "../models/postsModel.js";
import gerarDescricaoComGemini from "../services/geminiService.js";

export async function listarPosts(req, res) {
    // Obter todos os posts usando a função getTodosPosts
    const posts = await getTodosPosts();
    // Enviar uma resposta HTTP com código de status 200 e os posts no formato JSON
    res.status(200).json(posts);
}

// Função assíncrona para criar um novo post a partir dos dados recebidos no corpo da requisição
export async function postarNovoPost(req, res) {
    // Extrai os dados do novo post do corpo da requisição
    const novoPost = req.body;
    try {
        // Tenta criar o post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Retorna o post criado com status 200 (sucesso)
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, registra no console e retorna erro 500
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

// Função assíncrona para fazer upload de imagem e criar post associado
export async function uploadImagem(req, res) {
    // Cria objeto do novo post com dados da imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        // Tenta criar o post com a imagem no banco
        const postCriado = await criarPost(novoPost);
        // Define o novo caminho da imagem usando o ID do post criado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        // Renomeia o arquivo temporário para o nome final
        fs.renameSync(req.file.path, imagemAtualizada);
        // Retorna o post criado com status 200 (sucesso)
        res.status(200).json(postCriado);
    } catch(erro) {
        // Em caso de erro, registra no console e retorna erro 500
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}

export async function atualizarNovoPost(req, res) {
    const id = req.params.id;
    const urlImagem = `http://localhost:3000/${id}.png`;
    try {
        const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imageBuffer);
        const post = {
            imgUrl: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        }
        const postCriado = await atualizarPost(id, post);
        res.status(200).json(postCriado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"});
    }
}
