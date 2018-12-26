export interface Evento {
    id: string;
    contrato: string;
    migracaoEcfVenda?: any;
    observacao: string;
    quando: string;
    titulo: string;
    valor: number;
    projeto_id: string;
    razaoSocial_id: string;
    dataLancamento: string;
    arquivo_id?: any;
}