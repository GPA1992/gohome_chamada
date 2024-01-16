import { Request, Response } from 'express';
import EventoAcessoServices from '../services/EventoAcessos/eventoAcessos.services';
import { IEventoAcesso } from '../types/interfaces/eventoAcessos/IEventoAcessos';


class EventoAcessoController {
  public findLast10 = async (req: Request, res: Response) => {
    try {
      const { classId } = req.params;
      const last10Acessos: IEventoAcesso[] = await EventoAcessoServices.findTodayEventsByStudentClass(Number(classId));
      return res.status(200).json(last10Acessos);
    } catch (error) {
      console.log('erro: ', error);
      return res.status(500).json({
        message: 500,
        error: error.message,
      });
    }
  };
}

export default new EventoAcessoController();
