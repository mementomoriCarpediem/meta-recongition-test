import React from 'react';
import { Button, Stack, TextField } from '@mui/material';
import { Container } from '@mui/system';
import GuidelineBox from '../../components/GuidelineBox';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';

const Submit = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <GuidelineBox
        title="단어 입력"
        contents={['외우고 있는 단어를 모두 입력해주세요.', '쉼표로 단어를 구분해주세요.']}
      />

      <Stack gap={3}>
        <TextField id="memorized-words" label="단어 목록" multiline fullWidth />
        <Button fullWidth variant="contained" onClick={() => navigate(PATH.result)}>
          제출
        </Button>
      </Stack>
    </Container>
  );
};

export default Submit;
