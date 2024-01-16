import { Model, DataTypes, Sequelize } from 'sequelize';
import { IUser } from '../types/interfaces/user/UserInterface';
import db from './index';


class User extends Model {
  public id!: number;
  public firstName!: string;
  public lastName!: string;
  public email!: string;
}

User.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
  {
    sequelize: db,
    createdAt: true,
    updatedAt: true,
    underscored: false,
    modelName: 'User',
    tableName: 'Users',
  });


export default User;
