
import userModel from '../../models/user.model';
import { IUser } from '../../types/interfaces/user/UserInterface';

export default class UserServices {

    public static findAll = async (): Promise<IUser[]> => {
        try {
            const findOne: IUser[] = await userModel.findAll();
            return findOne;
        } catch (error) {
            return error;
        }
    };

}