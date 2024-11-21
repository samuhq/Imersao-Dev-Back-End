import conectarAoBanco from "../config/dbConfig.js";
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados
export async function getTodosPosts() {
    // Obter o banco de dados "imersao-dev-back-end"
    const db = conexao.db("imersao-dev-back-end");
    // Obter a coleção "posts"
    const colecao = db.collection("posts");
    // Encontrar todos os documentos na coleção e retornar como um array
    return colecao.find().toArray();
}

// Função assíncrona para criar um novo post no banco de dados
export async function criarPost(novoPost) {
    // Obter o banco de dados "imersao-dev-back-end"
    const db = conexao.db("imersao-dev-back-end");
    // Obter a coleção "posts"
    const colecao = db.collection("posts");
    // Inserir o novo post na coleção e retornar o resultado
    return colecao.insertOne(novoPost);
}