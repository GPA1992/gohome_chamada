import { Op, Sequelize, literal } from 'sequelize';
import EventoAcessoModel from '../../models/eventoAcesso.model';
import { IEventoAcesso } from '../../types/interfaces/eventoAcessos/IEventoAcessos';
import Pessoa from '../../models/pessoa.model';
import FiltroTurma from '../../models/filtroTurma.model';




export default class EventoAcessoServices {

  public static findLast10 = async (): Promise<IEventoAcesso[]> => {
    try {
      const last10Acessos: IEventoAcesso[] = await EventoAcessoModel.findAll({
        limit: 10,
      });
      return last10Acessos;
    } catch (error) {
      throw error;
    }
  };

  public static findTodayEventsByStudentClass = async (classId: number): Promise<IEventoAcesso[]> => {
    try {

      const today = new Date();
      today.setUTCHours(0, 0, 0, 0);
 
      
      const todayEvents = await EventoAcessoModel.findAll({
        limit: 10,
        where: {
          data: {
            [Op.gte]: literal(`CONVERT(smalldatetime, '${today.toISOString()}', 127)`),
          },
          '$pessoa.filtroTurma.id$': classId,
        },
        include: [
          {
            model: Pessoa,
            as: 'pessoa',
            include: [
              {
                model: FiltroTurma,
                as: 'filtroTurma',
                attributes: ['id', 'descricao'],
                where: {
                  id: classId,
                },
              },
            ],
          },
        ],
      });

      return todayEvents;
    } catch (error) {
      throw error;
    }
  };

  // public static findTodayEventsByStudentClass = async (classId: number): Promise<IEventoAcesso[]> => {
  //   try {
  //     const today = new Date();
  //     today.setHours(0,0,0,0);
  //     const formattedToday = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')} ` +
  //           `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}:${today.getSeconds().toString().padStart(2, '0')}.
  //           ${today.getMilliseconds().toString().padStart(3, '0')}`;
  //     console.log('formattedToday: ', formattedToday);
      
  //     const todayEvents: IEventoAcesso[] = await EventoAcessoModel.findAll({
  //       where: {
  //         data: formattedToday,
  //       },
  //       include: [
  //         {
  //           model: Pessoa,
  //           as: 'pessoa',
  //           include: [
  //             {
  //               model: FiltroTurma,
  //               as: 'filtroTurma',
  //               where: {
  //                 id: classId,
  //               },
  //             },
  //           ],
  //         },
  //       ],
  //     });
  
  //     return todayEvents;
  //   } catch (error) {
  //     throw error;
  //   }
  // };
}
