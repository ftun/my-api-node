import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (_req: Request, res: Response): void => {
    res.json({ message: "Api Node", date: Date.now() });
});

app.listen(port, () => {
    // if (err) {
    //     return console.error(err);
    // }
    console.log(`server is listening on ${port}`);
});