export interface Data {
  Nome: string,
  Peso: string,
  Valor: string,
  Quantidade: string,
}
export class Output{
    
    success: boolean;
    msg: string;

    constructor(success: boolean, msg: string) {
        this.success = success;
        this.msg = msg;
    }
}