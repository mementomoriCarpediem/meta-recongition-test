import moment from 'moment';
import { atom } from 'recoil';

export const nicknameRecoil = atom({ key: 'nickname', default: '' });

type TRecord = {
  date: string;
  wordsTotal?: number;
  guessNumber?: number;
  correctNumber?: number;
};

export const recordRecoil = atom<TRecord>({
  key: 'record',
  default: {
    date: moment().format('YYYY-MM-DD hh:mm:ss'),
  },
});
