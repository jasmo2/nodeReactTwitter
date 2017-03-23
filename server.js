import express from 'express';
import router from './routes/index';

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));

app.use('/', router);
app.use('/view/*', router);

const port = 3000;
app.listen(port, () => {
	console.log(`Hello World listening on port ${port}!`);
});
