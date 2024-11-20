import express from "express";

const posts = [
    {
      id: 1,
      descrição: "Um gatinho fofo chamado Neo tomando sol na janela.",
      imagem: "https://placecats.com/neo/300/200",
    },
    {
      id: 2,
      descrição: "Millicent, a gata mais elegante do bairro.",
      imagem: "https://placecats.com/millie/300/150",
    },
    {
      id: 3,
      descrição: "Uma combinação perfeita: Millie e Neo.",
      imagem: "https://placecats.com/millie_neo/300/200",
    },
    {
      id: 4,
      descrição: "Neo e Banana",
      imagem: "https://placecats.com/neo_banana/300/200",
    },
    {
      id: 5,
      descrição: "Bella, a gata mais fofa do mundo.",
      imagem: "https://placecats.com/bella/300/200",
    },
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor Escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
