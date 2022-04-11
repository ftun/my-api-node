import express, {Request, Response} from "express";

const app = express();

app.get('/', (_req: Request, res: Response): void => {
    res.json({ message: "Api Node", date: Date.now() });
});

export default app;