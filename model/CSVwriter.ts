import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';
import { Data } from './data.interface'; 
export const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      {id: 'Nome', title: 'Nome'},
      {id: 'Peso', title: 'Peso'},
      {id: 'Valor', title: 'Valor'},
      {id: 'Quantidade', title: 'Quantidade'}
    ],
  });
  return csvWriter.writeRecords(data);
};
