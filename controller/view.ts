import { Data } from '../model/data.interface';
import { readCSV } from '../model/CSVreader';
import { writeCSV } from '../model/CSVwriter';

console.log("Bem vindo ao gestor de estoque 5000")
while (true){

    const readline = require('readline-sync');

    const userInput = readline.question("Qual método deseja utilizar?\n1 - Adicionar item\n2 - Remover item\n3 - Listar itens\n4 - Ver valor total do inventário\n5 - Ver Peso Total do Inventário\n6 - Calcular Média de Valor dos Itens\n7 - Calcular Média de Peso dos Itens\n8 - Ver Quantidade Total de Itens no Inventário\n9 - Ver Quantidade Total de Produtos no Inventário\n0 - Fechar o programa\nDigite um número: ");
    
    console.log(`Você digitou: ${userInput}`);

    if (userInput < 0 || userInput > 9 || isNaN(userInput))
    {
        console.log("Essa entrada não é aceita, tente novamente\n");
    }
    if (userInput == 0)  
    {
        break;
    }
    console.log("################", userInput)

    switch (userInput){
            case 1:
                //TODO logica de adicionar
                const inputs :Data[] = [];
                while(true){
                    var adding : string = readline.question("Digite separado por espaço as seguintes informações sobre o que deseja adicionar: Nome(ÚNICO), Peso(De cada unidade), Valor(De cada unidade), Quantidade.\nAperte enter sem nenhuma entrada para confirmar a entrada dos itens\nCaso deseje aboratar a operação digite 0");
                    let elements = adding.split(" ");
                    if(elements.length==1 && elements[0] == "0"){
                        break;
                    }
                    if (elements.length == 4){

                        let temp : Data = {
                            Nome : elements[0],
                            Peso : elements[1],
                            Valor : elements[2],
                            Quantidade: elements[3]
                        };

                        inputs.push(temp);
                        console.log(inputs);
                        break;
                    }
                }

                break;
            case 2: 
        }
    }
