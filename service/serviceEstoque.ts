
import { Data, Output } from "../model/data.interface";
import { readCSV } from "../model/CSVreader";
import { writeCSV } from "../model/CSVwriter";

class estoqueService{

    async produtoExiste(filePath : string, data : Data[]){
        let dados_atuais = await readCSV(filePath);
        let rejeitados : string = "";
        dados_atuais.forEach(obj1 =>{
            const nome_para_verificar : string = obj1.Nome;
            const jaexiste : boolean = data.some(obj2 => obj2.Nome == nome_para_verificar);
            if (jaexiste){
                rejeitados = rejeitados + ` ,${nome_para_verificar}`;
            }
        })
        if(rejeitados.length == 0){
            return new Output(false,"Nenhum desses itens consta no banco de dados");
        }
        return new Output(true, `Os itens ${rejeitados} constam no banco de dados`)
    }

    async criar(filePath : string, data:Data[]){
        try{

            let dados_atuais = await readCSV(filePath);
            dados_atuais = dados_atuais.concat(data);
            writeCSV(filePath,data);
            return new Output(true, "O produto foi adicionado com sucesso");
            
        }
        catch(e){
            const errormsg : string = e.message;
            return new Output(false,errormsg);
        }

    }
    async deletar(filePath : string, data : Data[]){
        try{

            let dados_atuais = await readCSV(filePath);
            dados_atuais = dados_atuais.filter(obj => obj.Nome = data[0].Nome);
            writeCSV(filePath,data);
            return new Output(true, "O produto foi adicionado com sucesso");
            
        }
        catch(e){
            const errormsg : string = e.message;
            return new Output(false,errormsg);
        }

    }
    async pesoMedio(){

    }
    async valorMedio(){
        
    }
}
export default new estoqueService()