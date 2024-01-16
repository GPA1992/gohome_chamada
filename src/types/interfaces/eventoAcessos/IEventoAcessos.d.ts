import { IPessoa } from "../pessoa/PessoaInterface";

export interface IEventoAcesso {id: number;
  pessoaId: number | null;
  equipamentoId: number | null;
  refeicaoId: number | null;
  data: Date;
  hora: number;
  descricao: string;
  negado: number;
  confirmado: number;
  tipoAcesso: number;
  valorRefeicao: number | null;
  chamada: boolean;
  numChamada: number;
  status: number;
  statusTotem: number;
  statusLista: number;
  statusSala: number;
  statusH1: number;
  statusH2: number;
  statusH3: number;
  statusEem: number;
  statusPrincipal: number;
  appSincronizado: boolean | null;
  appSincronizadoErro: boolean | null;
  statusWhatsapp: boolean;
  }
  