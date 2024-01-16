import { Request, Response } from 'express';
import { UserServices } from '../services';
import { IUser } from '../types/interfaces/user/UserInterface';


class UserController {
    public listAllUser = async (req: Request, res: Response) => {
        try {
            const users: IUser[] = await UserServices.findAll()
            return res.status(200).json(users);
        } catch (error) {
            console.log('erro: ', error)
            return res.status(500).json({
                message: 500,
                error: error.message,
            });
        }
    };
}


export default new UserController;