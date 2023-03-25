import { atom } from 'recoil';
import { TDataType } from '../db/AWSDynamoDB';

export const recordRecoil = atom<Partial<TDataType>>({
  key: 'record',
  default: {},
});

export const quizWords = atom<string[]>({
  key: 'words',
  default: [],
});
