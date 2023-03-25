import React, { useState } from 'react';
import { Container } from '@mui/system';
import BoxTextGroup from '../../components/BoxTextGroup';
import { Button, Input, Stack } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';
import { useRecoilState } from 'recoil';
import { recordRecoil } from '../../recoil/atom';

const Guess = () => {
  const navigate = useNavigate();
  const [guessNumber, setGuessNumber] = useState<number>(0);
  const [record, setRecord] = useRecoilState(recordRecoil);

  const { state } = useLocation();

  return (
    <Container>
      <BoxTextGroup
        title="단어들을 잘 외우셨나요?"
        contents={[
          '외운 단어를 입력하기 전에,',
          '스스로 몇 개를 기억하고 있는지 예상하는 단어 수를 입력해주세요',
        ]}
      />

      <Stack gap={2}>
        <Input
          type="number"
          fullWidth
          placeholder="예상하는 단어 수를 입력해주세요."
          onChange={(e) => setGuessNumber(Number(e.target.value))}
        />
        <Button
          fullWidth
          variant="contained"
          onClick={() => {
            const minimumNumber = Math.floor(state.wordsNumber * 0.2);

            if (guessNumber < minimumNumber) {
              return window.alert(
                `너무 숫자가 작습니다. ${minimumNumber}개 이상으로 입력해주세요.`
              );
            }
            setRecord((prev) => ({ ...prev, guessNumber }));
            navigate(PATH.submit);
          }}>
          확인
        </Button>
      </Stack>
    </Container>
  );
};

export default Guess;
