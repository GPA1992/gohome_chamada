import FiltroSerie from '../../models/filtroSerie.model';
import FiltroTurma from '../../models/filtroTurma.model';
import Pessoa from '../../models/pessoa.model';
import { IEventoAcesso } from '../../types/interfaces/eventoAcessos/IEventoAcessos';
import { IPessoa } from '../../types/interfaces/pessoa/PessoaInterface';


export default class PessoaServices {

  public static findLast10 = async (): Promise<any> => {
    try {
      const last10Pessoas = await Pessoa.findAll({
        limit: 10,
        include: [
          {
            model: FiltroTurma,
            as: 'filtroTurma',
            attributes: ['id', 'descricao'],
          },
        ],
      });
      return last10Pessoas;
    } catch (error) {
      throw error;
    }
  };

  public static findByClassToday = async (classId: number): Promise<IPessoa[]> => {
    try {
      const last10Pessoas = await Pessoa.findAll({
        limit: 10,
        include: [
          {
            model: FiltroTurma,
            as: 'filtroTurma',
            attributes: ['id', 'descricao'],
          },
        ],
        where: {
          '$filtroTurma.id$': classId,
        },
      });
      return last10Pessoas;
    } catch (error) {
      throw error;
    }
  }

}
