const express = require('express');
const cors = require('cors');

const alunosRoutes = require("./src/routes/alunos.routes");
const inscricoesRoutes = require("./src/routes/inscricoes.routes");
const oficinasRoutes = require("./src/routes/oficinas.routes");
const relatoriosRoutes = require("./src/routes/relatorios.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(alunosRoutes);
app.use(inscricoesRoutes);
app.use(oficinasRoutes);
app.use(relatoriosRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
