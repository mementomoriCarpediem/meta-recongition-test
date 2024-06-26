import { Button, Container, FormControl, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { quizWords } from '../../recoil/atom';
import BoxTextGroup from '../../components/BoxTextGroup';
import words from '../../assets/korean_list.json';

import { PATH } from '../../routes/path';

const TEST_WORD_NUMBER_LIST = [10, 20, 30];

const Ready = () => {
  const navigate = useNavigate();

  const [wordNumber, setWordNumber] = useState<number>(10);

  const setQuizWords = useSetRecoilState(quizWords);

  return (
    <Container>
      <BoxTextGroup
        title="테스트 설명"
        contents={[
          '1. 아래에서 테스트 단어 수를 선택하세요.',
          '2. 테스트 시작 버튼을 누르면, 테스트가 시작됩니다.',
          '3. 각 단어가 연속적으로 화면에서 3초 동안 보여지게 됩니다. 최대한 많은 단어를 외우세요.',
        ]}
      />

      <Stack gap={5}>
        <FormControl fullWidth>
          <InputLabel id="word-number-select-label">테스트 단어 수</InputLabel>
          <Select
            labelId="word-number-select-label"
            value={wordNumber}
            label="테스트 단어 수"
            onChange={(e) => setWordNumber(Number(e.target.value))}>
            {TEST_WORD_NUMBER_LIST.map((number) => (
              <MenuItem key={number} value={number}>
                {number}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          onClick={() => {
            setQuizWords(pickRandomWords(wordNumber));
            navigate(PATH.quiz);
          }}>
          테스트 시작
        </Button>
      </Stack>
    </Container>
  );

  function pickRandomWords(wordsNumber: number) {
    let result = [];
    const maxLength = words.length;

    for (let i = 0; i < wordsNumber; i++) {
      const randomIndex = Math.floor(Math.random() * maxLength);
      result.push(words[randomIndex].단어);
    }
    return result;
  }
};

export default Ready;
