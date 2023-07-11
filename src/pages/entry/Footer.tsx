import { Divider, Link, Stack, useTheme } from '@mui/material';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  const theme = useTheme();
  return (
    <Stack justifyContent={'center'} alignItems="center">
      <Divider sx={{ width: 1, my: 1 }} />

      <Link
        href="mailto: carpediem.mementomori.1984@gmail.com"
        style={{ color: theme.palette.info.main }}>
        carpediem.mementomori.1984@gmail.com
      </Link>
    </Stack>
  );
};

export default Footer;
