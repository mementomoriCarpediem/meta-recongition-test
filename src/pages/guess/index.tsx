import React from 'react';
import { Container } from '@mui/system';
import GuidelineBox from '../../components/GuidelineBox';
import { Button, Input, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';

const Guess = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <GuidelineBox
        title="단어들을 잘 외우셨나요?"
        contents={[
          '외운 단어를 입력하기 전에,',
          '스스로 몇 개를 기억하고 있는지 예상하는 단어 수를 입력해주세요',
        ]}
      />

      <Stack gap={2}>
        <Input type="number" fullWidth placeholder="예상하는 단어 수를 입력해주세요." />
        <Button fullWidth variant="contained" onClick={() => navigate(PATH.submit)}>
          확인
        </Button>
      </Stack>
    </Container>
  );
};

export default Guess;
