"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const services_1 = require("../services");
class UserController {
    constructor() {
        this.listAllUser = async (req, res) => {
            try {
                const users = await services_1.UserServices.findAll();
                return res.status(200).json(users);
            }
            catch (error) {
                console.log('erro: ', error);
                return res.status(500).json({
                    message: 500,
                    error: error.message,
                });
            }
        };
    }
}
exports.default = new UserController;
