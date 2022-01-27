import { Endereco } from './endereco';

export class Fornecedor {
    id: string = '';
    nome: string = '';
    documento: string = '';
    ativo: boolean = false;
    tipoFornecedor: number = 0;
    endereco: Endereco | any;
}

