// Importa o MongoClient do módulo mongodb
import { MongoClient } from "mongodb";

// Função assíncrona para conectar ao banco de dados MongoDB usando uma string de conexão
export default async function conectarAoBanco(stringConexao) {
    // Declara variável para armazenar a instância do cliente MongoDB
    let mongoClient;
    
    try {
        // Cria uma nova instância do MongoClient com a string de conexão fornecida
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectado ao cluster do banco de dados");
        // Estabelece a conexão com o MongoDB
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso");

        // Retorna o cliente MongoDB conectado
        return mongoClient;
    } catch (error) {
        // Em caso de erro na conexão, exibe mensagem de erro e encerra o processo
        console.error("Falha ao conectar com o banco!", error);
        process.exit();
    }
}