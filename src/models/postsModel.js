// Importar a função para conectar ao banco de dados MongoDB
import conectarAoBanco from "../config/dbConfig.js";

// Conectar ao banco de dados usando a string de conexão fornecida pelo ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts da coleção "posts" no banco de dados
export default async function getTodosPosts() {
    // Obter o banco de dados "imersao-dev-back-end"
    const db = conexao.db("imersao-dev-back-end");
    // Obter a coleção "posts"
    const colecao = db.collection("posts");
    // Encontrar todos os documentos na coleção e retornar como um array
    return colecao.find().toArray();
}
