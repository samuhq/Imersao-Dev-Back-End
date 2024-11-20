import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringConexao) {
    let mongoClient;
    
    try {
        mongoClient = new MongoClient(stringConexao);
        console.log("Conectado ao cluster do banco de dados");
        await mongoClient.connect();
        console.log("Conectado ao MongoDB Atlas com sucesso");

        return mongoClient;
    } catch (error) {
        console.error("Falha ao conectar com o banco!", error);
        process.exit();
    }
}