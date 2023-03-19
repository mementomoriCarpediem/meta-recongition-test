import React from 'react';
import { Stack, stepContentClasses, Typography, useTheme } from '@mui/material';

type Props = {
  title: string;
  contents?: string[];
};

const BoxTextGroup = ({ title, contents }: Props) => {
  const theme = useTheme();

  return (
    <Stack alignItems={'center'} width="100%" gap={3} sx={{ my: 3 }} justifyContent="space-around">
      <Typography variant="h5" fontWeight={theme.typography.fontWeightMedium}>
        {title}
      </Typography>

      {contents && (
        <Stack sx={{ border: [1, 'solid', 'black'], p: 2 }} width="100%" gap={1}>
          {contents.map((content) => (
            <Typography key={content}>{content}</Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export default BoxTextGroup;
