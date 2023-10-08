import estoqueService from "../service/serviceEstoque";
import { Data, Output } from "../model/data.interface";
import { readCSV } from "../model/CSVreader";
import { writeCSV } from "../model/CSVwriter";

const filePath : string = "semana2/Atividades-semana-2/model/estoque.csv"

function adicionarProduto(data: Data[]) {
    estoqueService.produtoExiste(filePath, data)
        .then((resultado) => {
            if (resultado.success) {

                // Produto já existe no estoque
                return new Output(false, resultado.msg);
            } else {

                // Produto não existe no estoque, continue com a criação
                return estoqueService.criar(filePath, data);
            }
        })
        .then((resultado) => {return resultado;})
        .catch((error) => {
            return new Output(false, "ERRO INESPERADO:" + error.message);

        });
}
function removerProduto(data : Data[]){
    estoqueService.produtoExiste(filePath,data)
    .then((resultado) =>{
        if(resultado.success){
            return estoqueService.deletar(filePath, data);
        }
        else{
            return new Output(false, resultado.msg );
        }
    })
}
