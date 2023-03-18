import {
  Button,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';

const Ready = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [wordNumber, setWordNumber] = useState<number>();

  return (
    <Container>
      <Stack
        alignItems={'center'}
        width="100%"
        gap={3}
        sx={{ my: 5 }}
        justifyContent="space-around">
        <Typography variant="h5" fontWeight={theme.typography.fontWeightMedium}>
          테스트 설명
        </Typography>
        <Stack sx={{ border: [1, 'solid', 'black'], p: 2 }} width="100%" gap={1}>
          <Typography>1. 아래에서 테스트 단어 수를 선택하세요.</Typography>
          <Typography>2. "테스트 시작" 버튼을 누르면, 테스트가 시작됩니다.</Typography>
          <Typography>
            3. 각 단어가 연속적으로 화면에서 3초 동안 보여지게 됩니다. 최대한 많은 단어를 외우세요.
          </Typography>
        </Stack>
      </Stack>

      <Stack gap={5}>
        <FormControl fullWidth>
          <InputLabel id="word-number-select-label">테스트 단어 수</InputLabel>
          <Select
            labelId="word-number-select-label"
            value={wordNumber}
            label="테스트 단어 수"
            onChange={(e) => setWordNumber(Number(e.target.value))}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>

        <Button variant="contained" onClick={() => navigate(PATH.quiz)}>
          테스트 시작
        </Button>
      </Stack>
    </Container>
  );
};

export default Ready;
