import { Divider, Link, Stack } from '@mui/material';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Stack justifyContent={'center'} alignItems="center">
      <Divider sx={{ width: 1, my: 1 }} />

      <Link href="mailto: carpediem.mementomori.1984@gmail.com">
        carpediem.mementomori.1984@gmail.com
      </Link>
    </Stack>
  );
};

export default Footer;
