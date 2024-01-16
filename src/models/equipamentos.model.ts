import { Model, DataTypes } from 'sequelize';
import db from './index';

class Equipamento extends Model {
  public id!: number;
  public descricao!: string;
  public codigo!: string | null;
  public porta!: number | null;
  public ip!: string;
  public catraca!: boolean | null;
  public versaoAntena!: number | null;
  public antId!: number | null;
  public onLine!: boolean | null;
  public acessos!: number | null;
  public status!: number | null;
  public controlarRefeitorio!: boolean | null;
  public numeroSerieFabricante!: string | null;
  public acessoSentido!: number | null;
  public controlidDeviceIdCatraca!: string | null;
  public sentidoHorarioEntrada!: boolean | null;
  public reconhecimentoFacial!: boolean | null;
  public impressaoDigital!: boolean | null;
}

Equipamento.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    porta: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    ip: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catraca: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    versaoAntena: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    antId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    onLine: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    acessos: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    controlarRefeitorio: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    numeroSerieFabricante: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    acessoSentido: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    controlidDeviceIdCatraca: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sentidoHorarioEntrada: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    reconhecimentoFacial: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    impressaoDigital: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    createdAt: false,
    updatedAt: false,
    underscored: false,
    modelName: 'Equipamento',
    tableName: 'equipamentos',
  }
);

export default Equipamento;
