import { Model, DataTypes } from 'sequelize';
import db from './index';

class Classificacao extends Model {
  public id!: number;
  public descricao!: string;
  public usar_urna!: boolean;
  public estacionamento_vagas_maxima!: number;
  public estacionamento_vagas_ocupadas!: number;
  public apartamento_obrigatorio!: boolean;
  public box_obrigatorio!: boolean;
  public deposito_obrigatorio!: boolean;
}

Classificacao.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descricao: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    usar_urna: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    estacionamento_vagas_maxima: {
      type: DataTypes.INTEGER,
    },
    estacionamento_vagas_ocupadas: {
      type: DataTypes.INTEGER,
    },
    apartamento_obrigatorio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    box_obrigatorio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    deposito_obrigatorio: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    modelName: 'Classificacao',
    tableName: 'Classificacoes',
  }
);

export default Classificacao;
