"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = __importDefault(require("../../models/user.model"));
class UserServices {
}
_a = UserServices;
UserServices.findAll = async () => {
    try {
        const findOne = await user_model_1.default.findAll();
        return findOne;
    }
    catch (error) {
        return error;
    }
};
exports.default = UserServices;
