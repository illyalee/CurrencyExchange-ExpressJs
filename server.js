import express from "express"
import mongoose from 'mongoose';
import router from './router.js'
import fileUpload from "express-fileupload";
const app = express();
const DB_URL = "mongodb+srv://user:user@cluster0.o8nek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(express.json())
app.use(fileUpload({}))
app.use(express.static('static'))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to MongoDB');
        app.listen(3000, () => console.log('Server is running on port 3000'));
    } catch (e) {
        console.error('Error connecting to MongoDB:', e);
    }
}

startApp();

