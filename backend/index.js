import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fetchEvents from './routes/fetchEvents.routes.js';
import local from './routes/localService.routes.js';
import hotels from './routes/fetchHotels.routes.js';

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'https://downtown-io-its3.onrender.com'
}));

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.use(fetchEvents);
app.use(local);
app.use(hotels);


