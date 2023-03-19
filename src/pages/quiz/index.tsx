import { Card, CardContent, CardHeader, Paper, Stack, Typography, useTheme } from '@mui/material';
import { Container } from '@mui/system';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWords } from '../../hooks/useWords';
import { PATH } from '../../routes/path';

//TODO: API 연결 후 교체
const mock_words = ['가나다라마바사', '라마다', '남사읍', '사과', '자전거'];

const Quiz = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { total, currentIndex, word } = useWords(mock_words);

  useEffect(() => {
    let timer: NodeJS.Timer;

    if (total === currentIndex + 1) {
      timer = setTimeout(() => navigate(PATH.guess), 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex]);

  return (
    <Container
      sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
          }}>
          <Typography variant="h1" textAlign={'center'}>
            {word.length > 0 ? word : '준비중..'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Quiz;
