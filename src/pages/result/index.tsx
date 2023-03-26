import React from 'react';
import { Container, Divider, Fab, Rating, Stack, Typography, useTheme, Zoom } from '@mui/material';
import BoxTextGroup from '../../components/BoxTextGroup';
import ShareIcon from '@mui/icons-material/Share';
import { useRecoilValue } from 'recoil';
import { recordRecoil } from '../../recoil/atom';
import { TDataType } from '../../db/AWSDynamoDB';

const Result = () => {
  const theme = useTheme();
  const record = useRecoilValue(recordRecoil);

  // const { getResults } = useDB();
  //TODO: (고도화) 전체 테스트 기록에서, 일치 율 순위 % 표시, 링크 공유, 동일 닉네임으로 히스토리 표시

  const acurrateResult = getGussingAccurate(record);
  // console.log(record, acurrateResult);
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
          {`${record.nickname} 님의`}
          <Typography variant="h4" component={'p'}>
            메타인지 테스트 결과
          </Typography>
        </Typography>

        <Stack sx={{ p: 2 }} width="100%" gap={2}>
          <Typography variant="h6" textAlign={'center'}>
            Score:{'  '}
            <Typography
              component={'span'}
              variant="h2"
              fontWeight={theme.typography.fontWeightBold}>
              {acurrateResult} %
            </Typography>
            <Typography>(메타인지 정확도)</Typography>
          </Typography>

          <Rating
            sx={{ m: 'auto' }}
            name="half-rating-read"
            defaultValue={acurrateResult ? (acurrateResult / 100) * 5 : 0}
            precision={0.5}
            readOnly
          />
        </Stack>

        <Divider sx={{ width: 1 }} />

        <BoxTextGroup
          title="상세 내역"
          contents={[
            `전체 단어 개수: ${record.wordsTotal}개`,
            `예상 결과: ${record.guessNumber}개`,
            `실제 맞춘 개수 : ${record.correctNumber}개`,
          ]}
        />
      </Stack>

      <CopyLink />
    </Container>
  );
};

export default Result;

function getGussingAccurate(record: Partial<TDataType>) {
  const { correctNumber, guessNumber } = record;

  if (correctNumber !== undefined && guessNumber !== undefined) {
    return (
      Number(
        (1 - Math.abs(correctNumber - guessNumber) / Math.max(correctNumber, guessNumber)).toFixed(
          1
        )
      ) * 100
    );
  }
}

function CopyLink() {
  const theme = useTheme();

  return (
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
  );

  async function copyTextUrl() {
    await navigator.clipboard.writeText(window.location.href.replace('/result', ''));
    alert('링크 복사 완료!');
  }
}
