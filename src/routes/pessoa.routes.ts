import express from 'express';
import pessoaController from '../controllers/pessoa.controller';



const router = express.Router();

router.get('/', pessoaController.findLast10);

export default router;