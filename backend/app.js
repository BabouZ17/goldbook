import express from 'express';
import http from 'http';
import cors from 'cors';

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const hostname = '0.0.0.0';
const port = 8001;
const app = express()
const server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

routes(app);

app.get('*', (req, res) => res.status(404).send({
  message: 'Seems you are lost',
}));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});