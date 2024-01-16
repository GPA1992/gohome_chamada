import PessoaServices from "../services/Pessoas/pessoa.service";
import { Request, Response } from 'express';



class PessoaController {
  public findLast10 = async (req: Request, res: Response) => {
    try {

      const last10Pessoas = await PessoaServices.findLast10();
      return res.status(200).json(last10Pessoas);
    } catch (error) {
      console.log('erro: ', error);
      return res.status(500).json({
        message: 500,
        error: error.message,
      });
    }
  };
}

export default new PessoaController();
