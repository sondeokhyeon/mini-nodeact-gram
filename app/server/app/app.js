import path from 'path'
import express from 'express'
import morgran from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import router from './router'

const app = express();

const corsOptions = {
    origin:['http://mng.sondeokhyeon.site:88', 'http://124.60.103.172:3000']
}

app.use(morgran('dev'));
app.use(helmet());
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/photo', express.static(path.join(__dirname, '../../uploads')));

//app.use('/api', router)
app.use('/api', router);

export default app;