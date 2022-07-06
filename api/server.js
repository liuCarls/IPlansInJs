// api/server.js
import express from "express";
import db from "./config/database.js";
import planRoutes from "./routes/index.js";
import cors from "cors";


const app = express()
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(express.json())
app.use(cors());
app.use(express.json());
app.use('/plans', planRoutes);

app.get('/test', function (req, res) {
  // res.send("It's working!")
  res.json({ name: '张三' })
})

app.listen(3001, () => {
  console.log('app listening on port 3001')
})