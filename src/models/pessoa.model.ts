import { Model, DataTypes } from 'sequelize';
import db from './index';
import Classificacao from './classificacao.model';
import FiltroSerie from './filtroSerie.model';
import Acesso from './eventoAcesso.model';
import FiltroTurma from './filtroTurma.model';

class Pessoa extends Model {
  public id!: number;
  public n_identificador!: string;
  public nome!: string;
  public classificacao_id!: number;
  public filtro3_id!: number;
  public filtro4_id!: number;
  public filtroTurma!: FiltroTurma | null;
}

Pessoa.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    n_identificador: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    classificacao_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    filtro3_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'filtroSerie',
          key: 'id',
        },
      },
    filtro4_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'filtroTurma',
        key: 'id',
      },
    },
  },
  {
    sequelize: db,
    createdAt: false,
    updatedAt: false,
    underscored: false,
    modelName: 'Pessoa',
    tableName: 'pessoas',
  }
);


Pessoa.belongsTo(Classificacao, { foreignKey: 'classificacao_id', as: 'classificacao' });
Pessoa.hasOne(FiltroSerie, { foreignKey: 'id', as: 'filtroSerie' });
Pessoa.hasOne(FiltroTurma, { foreignKey: 'id', as: 'filtroTurma' });

export default Pessoa;
