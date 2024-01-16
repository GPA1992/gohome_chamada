import { Model, DataTypes, Sequelize } from 'sequelize';
import db from './index';
import Pessoa from './pessoa.model';
import Equipamento from './equipamentos.model';


class Acesso extends Model {
  public id!: number;
  public pessoaId!: number;
  public equipamentoId!: number;
  public refeicaoId!: number | null;
  public data!: Date;
  public hora!: number;
  public descricao!: string;
  public negado!: number;
  public confirmado!: number;
  public tipoAcesso!: number;
  public valorRefeicao!: number | null;
  public chamada!: boolean;
  public numChamada!: number;
  public status!: number;
  public statusTotem!: number;
  public statusLista!: number;
  public statusSala!: number;
  public statusH1!: number;
  public statusH2!: number;
  public statusH3!: number;
  public statusEem!: number;
  public statusPrincipal!: number;
  public appSincronizado!: boolean;
  public appSincronizadoErro!: boolean;
  public statusWhatsapp!: boolean;
}

Acesso.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    pessoaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Pessoa,
        key: 'id',
      },
    },
    equipamentoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Equipamento,
        key: 'id',
      },
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    negado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    confirmado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipoAcesso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tipo_acesso',
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    statusTotem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_totem',
    },
    statusLista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_lista',
    },
    statusSala: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_sala',
    },
    statusH1: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_h1',
    },
    statusH2: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_h2',
    },
    statusH3: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_h3',
    },
    statusEem: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_eem',
    },
    statusPrincipal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'status_principal',
    },
    appSincronizado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'app_sincronizado',
    },
    appSincronizadoErro: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'app_sincronizado_erro',
    },
    statusWhatsapp: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'status_whatsapp',
    },
  },
  {
    sequelize: db,
    createdAt: false,
    updatedAt: false,
    underscored: true,
    modelName: 'Acesso',
    tableName: 'eventos_acessos',
  }
);

Acesso.hasOne(Pessoa, { foreignKey: 'id', as: 'pessoa' });
export default Acesso;
