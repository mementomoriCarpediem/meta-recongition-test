import React from 'react';
import { Container, Divider, Fab, Stack, Typography, useTheme, Zoom } from '@mui/material';
import BoxTextGroup from '../../components/BoxTextGroup';
import ShareIcon from '@mui/icons-material/Share';
import { useLocation } from 'react-router-dom';

type Props = {};

const Result = (props: Props) => {
  const theme = useTheme();
  const location = useLocation();

  //TODO: (고도화) 전체 테스트 기록에서, 일치 율 순위 % 표시, 링크 공유, 동일 닉네임으로 히스토리 표시

  return (
    <Container>
      <Stack direction={'column'} alignItems="center" sx={{ my: 5 }} gap={3}>
        <Typography
          variant="h4"
          fontWeight={theme.typography.fontWeightBold}
          bgcolor={theme.palette.primary.main}
          textAlign="center"
          borderRadius={theme.shape.borderRadius}
          p={1}
          width="100%">
          OOO 님의
          <Typography variant="h4"> 메타인지 테스트 결과</Typography>
        </Typography>

        <Stack sx={{ p: 2 }} width="100%" gap={2}>
          <Typography variant="h6" textAlign={'center'}>
            Score:{'  '}
            <Typography
              component={'span'}
              variant="h2"
              fontWeight={theme.typography.fontWeightBold}>
              85 %
            </Typography>
            <Typography>(예상 숫자와 실제 정답 수 일치율)</Typography>
          </Typography>
        </Stack>

        <Divider sx={{ width: 1 }} />

        <BoxTextGroup
          title="상세 내역"
          contents={['전체 단어 개수: 10개', '예상 결과: 10개', '실제 맞춘 개수 : 10개']}
        />
      </Stack>

      <Stack>
        <Zoom
          in
          timeout={{
            enter: theme.transitions.duration.enteringScreen,
            exit: theme.transitions.duration.leavingScreen,
          }}
          style={{
            transitionDelay: `${theme.transitions.duration.leavingScreen}ms`,
            marginLeft: 'auto',
          }}
          unmountOnExit
          onClick={async () => await copyTextUrl()}>
          <Fab sx={{ bgcolor: theme.palette.primary.main }}> {<ShareIcon color={'success'} />}</Fab>
        </Zoom>
      </Stack>
    </Container>
  );

  async function copyTextUrl() {
    await navigator.clipboard.writeText(window.location.href);
    alert('링크 복사 완료!');
  }
};

export default Result;
