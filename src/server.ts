import '@config/env';
import express from 'express';
import routes from './routes';

const port = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(routes);

app
  .listen(port, () => {
    console.log(`Back-end started in ${port || 3333} port!`);
  })
  .on('error', e => console.log(`Back-end don't started`, e));
