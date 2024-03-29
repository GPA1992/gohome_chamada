import express from 'express';
import { AcessosRouter, PessoasRouter, UserRoutes } from './routes';
import cors from 'cors';
;

class App {
    public app: express.Express;
    constructor() {
        this.app = express();

        this.config();

        this.app.get('/', (req, res) => res.json({ ok: true }));
    }

    private config(): void {
        const accessControl: express.RequestHandler = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Methods',
                'GET,POST,DELETE,OPTIONS,PUT,PATCH'
            );
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };

        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(accessControl);
        this.app.use('/user', UserRoutes);
        this.app.use('/acessos', AcessosRouter);
        this.app.use('/pessoas', PessoasRouter);
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}

export { App };