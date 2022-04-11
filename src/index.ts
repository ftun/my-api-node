import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());
const port = 3000;

app.use('/api', routes);


app.listen(port, () => {
    // if (err) {
    //     return console.error(err);
    // }
    console.log(`server is listening on ${port}`);
});