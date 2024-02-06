const cors = require('cors');
const express = require('express');
const connectDB = require('./services/database');
require('dotenv').config();


const questionRoutes = require('./routes/questionRoutes');




const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
  }));
app.use(express.json());


app.use('/api/questions', questionRoutes);


app.get('/', (req, res) => {
    res.send('Welcome to your API!');
});

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('Connected to MongoDB successfully!');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


start();