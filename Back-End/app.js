import express from "express";
import cors from 'cors'
import bd from "./BD/bd.js";
import newsRoutes from "./routes/routes.js";


const app = express();


app.use(cors());
app.use(express.json()); 
app.use('/News', newsRoutes);

const initializeDatabase = async () => {
    try {
        await bd.authenticate();
        console.log('Conectado a la BD');
        await bd.sync({ alter: true });
        console.log('Tablas sincronizadas');
    } catch (error) {
        console.error(`El error es: ${error}`);
    }
};


initializeDatabase();


app.get('/', (req, res) => {
    res.send('HOLA MUNDO');
});


app.listen(5000, () => {
    console.log('Server listening en puerto http://localhost:5000/');
});
