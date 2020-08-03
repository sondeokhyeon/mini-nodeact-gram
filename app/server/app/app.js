import path from 'path'
import express from 'express'
import morgran from 'morgan';
import helmet from 'helmet';
import router from './router'

const app = express();

app.use(morgran('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../../uploads')));

app.use('/api', router)

export default app;