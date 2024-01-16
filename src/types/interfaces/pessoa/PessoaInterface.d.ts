import IFiltroTurma from "../filtroTurma/filtroTurma.interface";

interface IPessoa {
    id: number;
    n_identificador: string;
    nome: string;
    classificacao_id: number;
    filtro3_id?: number | null;
    filtro4_id?: number | null;
    filtroTurma?: IFiltroTurma | null;
  }