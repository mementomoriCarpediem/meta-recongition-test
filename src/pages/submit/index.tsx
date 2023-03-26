import React, { useState } from 'react';
import { Button, Container, Stack, TextField } from '@mui/material';

import BoxTextGroup from '../../components/BoxTextGroup';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';
import { useRecoilState, useRecoilValue } from 'recoil';
import { quizWords, recordRecoil } from '../../recoil/atom';
import { TDataType } from '../../db/AWSDynamoDB';
import { useDB } from '../../hooks/useDB';

const Submit = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<string>('');

  const words = useRecoilValue(quizWords);
  const [record, setRecord] = useRecoilState(recordRecoil);

  const { saveRecord } = useDB();

  return (
    <Container>
      <BoxTextGroup
        title="단어 입력"
        contents={['외우고 있는 단어를 모두 입력해주세요.', '쉼표로 단어를 구분해주세요.']}
      />

      <Stack gap={3}>
        <TextField
          id="memorized-words"
          label="단어 목록"
          multiline
          fullWidth
          onChange={(e) => setAnswers(e.target.value)}
        />
        <Button fullWidth variant="contained" onClick={onSaveData}>
          제출
        </Button>
      </Stack>
    </Container>
  );

  function onSaveData() {
    const data: TDataType = {
      nickname: record.nickname || '',
      guessNumber: record.guessNumber || 0,
      date: new Date().toISOString(),
      wordsTotal: words.length,
      correctNumber: countCorrectAnswer(answers, words),
    };

    saveRecord(data);
    setRecord(data);

    navigate(PATH.result);
  }
};

export default Submit;

export function countCorrectAnswer(answers: string, words: string[]) {
  let correctNumber = 0;

  answers.split(',').forEach((answer) => words.includes(answer.trim()) && correctNumber++);

  return correctNumber;
}
