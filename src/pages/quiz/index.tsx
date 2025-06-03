import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Container, Typography, useTheme } from '@mui/material';
import { useWords } from '../../hooks/useWords';
import { PATH } from '../../routes/path';
import { useRecoilValue } from 'recoil';
import { quizWords } from '../../recoil/atom';

const Quiz = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const randomWords = useRecoilValue(quizWords);

  const { total, currentIndex, word } = useWords(randomWords);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (total === currentIndex + 1)
      timer = setTimeout(
        () => navigate(PATH.guess, { state: { wordsNumber: randomWords.length } }),
        3000
      );

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Container sx={{ mt: 10 }}>
      <Card>
        <CardHeader
          sx={{
            bgcolor: theme.palette.secondary.main,
            color: theme.palette.secondary.contrastText,
          }}
          title={
            <Typography variant="h6" textAlign={'center'}>{`${
              word.length > 0 ? currentIndex + 1 : 0
            }/${total}`}</Typography>
          }
        />
        <CardContent
          sx={{
            bgcolor: theme.palette.primary.light,
            minHeight: 200,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant={word.length > 0 ? 'h1' : 'h3'} textAlign={'center'}>
            {word.length > 0 ? word : '곧 시작합니다...'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Quiz;
