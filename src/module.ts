
interface Data {
  title: string;
  value: string;
}

import fs from 'fs';
import csv from 'csv-parser';

const readCSV = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const writeCSV = async (filePath: string, data: Data[]): Promise<void> => {
  const csvWriter = createCsvWriter({
    path: filePath,
    header: [
      { id: 'title', title: 'TÍTULO' },
      { id: 'value', title: 'VALOR' },
    ],
  });

  return csvWriter.writeRecords(data);
};

const main = async () => {
  try {
    const data = await readCSV('db/input.csv');
    console.log('Dados lidos:', data);

    await writeCSV('db/output.csv', data);
    console.log('Dados escritos em output.csv');
  } catch (error) {
    console.error('Erro:', error);
  }
};

main();
