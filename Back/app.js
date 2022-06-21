import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import mongoose from 'mongoose';
import noteRouter from './routes/NoteRoutes.js';

const app = express();

mongoose
  .connect('mongodb://localhost:27017/AIO', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

app.use('/api/notes', noteRouter);

export default app;
