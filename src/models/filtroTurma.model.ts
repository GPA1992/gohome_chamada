import { Model, DataTypes } from 'sequelize';
import db from './index';

class FiltroTurma extends Model {
  public id!: number;
  public descricao!: string;
  public processo_id_liberado!: number;
  public processo_id_negado!: number;
}

FiltroTurma.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    processo_id_liberado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    processo_id_negado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    createdAt: false,
    updatedAt: false,
    underscored: false,
    modelName: 'FiltroTurma',
    tableName: 'filtro4',
  }
);

export default FiltroTurma;
