import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Input,
  Typography,
  useTheme,
} from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../routes/path';
import { useSetRecoilState } from 'recoil';
import { recordRecoil } from '../../recoil/atom';
import { countCorrectAnswer } from '../submit';

const Entry = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const setRecord = useSetRecoilState(recordRecoil);

  const [nickname, setNickname] = useState<string>('');

  return (
    <Container sx={{ height: '100vh' }}>
      <Stack
        direction={'column'}
        justifyContent="space-around"
        alignItems="center"
        sx={{ margin: 5, height: '90%' }}>
        <Stack>
          <Typography
            variant="h4"
            gutterBottom
            component={'h1'}
            fontWeight={theme.typography.fontWeightMedium}>
            메타인지 테스트
          </Typography>
          <Divider />
        </Stack>

        <Stack sx={{ width: '100%', m: 5 }} gap={5}>
          <Stack>
            <Input
              placeholder="이름을 입력해주세요."
              fullWidth
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            {/* <Typography variant="caption">
              (고유값이며, 동일 유저의 기록은 자동 누적 저장됩니다.)
            </Typography> */}
          </Stack>

          <Button
            variant="contained"
            type="submit"
            size="large"
            onClick={() => {
              setRecord((prev) => ({ ...prev, nickname }));
              navigate(PATH.ready);
            }}>
            시작하기
          </Button>
        </Stack>

        <ExperimentVideo />
      </Stack>
    </Container>
  );
};

export default Entry;

function ExperimentVideo() {
  const theme = useTheme();

  return (
    <Card sx={{ width: '100%', mt: 10 }}>
      <CardHeader
        sx={{ backgroundColor: theme.palette.primary.light }}
        title={
          <Typography variant="body1" fontWeight={theme.typography.fontWeightMedium}>
            메타인지 실험영상 - EBS
          </Typography>
        }
      />
      <CardContent sx={{ mb: 0 }}>
        <iframe
          width="100%"
          height={'100%'}
          src="https://www.youtube.com/embed/5aQHBVR2l50"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </CardContent>
    </Card>
  );
}
