import express from 'express'
import AppRoutes from './src/routes/student-menotr-routes.js'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT;
const app = express();
app.use(express.json())
app.use(AppRoutes);

app.listen(PORT, () => console.log(`App is listening to ${PORT}`))