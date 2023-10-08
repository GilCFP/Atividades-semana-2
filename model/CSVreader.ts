import { Data } from './data.interface';
import fs from 'fs';
import csv from 'csv-parser';

export const readCSV = async (filePath: string): Promise<Data[]> => {
  return new Promise((resolve, reject) => {
    const results: Data[] = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: Data) => results.push(data))
      .on('end', () => {
        console.log(results);
        resolve(results);
        })
      .on('error', (error) => reject(error));
  });
};
