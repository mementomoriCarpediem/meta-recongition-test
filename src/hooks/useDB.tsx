import { useRecoilValue } from 'recoil';
import { AWSDynamoDB, TDataType } from '../db/AWSDynamoDB';
import { recordRecoil } from '../recoil/atom';

export const useDB = () => {
  const dynamoDBInstance = new AWSDynamoDB();
  const record = useRecoilValue(recordRecoil);

  function saveRecord(data: TDataType) {
    return dynamoDBInstance.putData(data);
  }

  async function getResults() {
    if (record.wordsTotal && record.correctNumber && record.guessNumber) {
      const allDatas = await dynamoDBInstance.fetchAllDatas();
    }
  }

  function getMyRecords(nickname: string) {
    return dynamoDBInstance.getMyDatas(nickname);
  }

  return { getMyRecords, saveRecord, getResults };
};
