import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());

export default app;