import { Sequelize } from 'sequelize';
import * as config from '../db/config/config';

export default new Sequelize(config);