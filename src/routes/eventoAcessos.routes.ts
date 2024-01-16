import express from 'express';
import eventoAcessosController from '../controllers/eventoAcessos.controller';


const router = express.Router();

router.get('/:classId', eventoAcessosController.findLast10);
export default router;