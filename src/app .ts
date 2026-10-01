import express, { Request, Response } from 'express';
import * as fs from 'fs';
import * as path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

const filePath = path.join(__dirname, '..', 'note.json');

interface Note {
  id: number;
  title: string;
  content: string;
}

const readNotesFromFile = (): Note[] => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
};