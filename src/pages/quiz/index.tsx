import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, Container, Typography, useTheme } from '@mui/material';
import { useWords } from '../../hooks/useWords';
import { PATH } from '../../routes/path';

const Quiz = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const {
    state: { randomWords },
  } = useLocation();

  const { total, currentIndex, word } = useWords(randomWords);

  useEffect(() => {
    let timer: NodeJS.Timer;

    if (total === currentIndex + 1) timer = setTimeout(() => navigate(PATH.guess), 3000);

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
