import { Container, Stack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container maxWidth="md">
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ height: '100svh' }}
      >
        <Stack direction="row" spacing={2} flexWrap={'wrap'}>
          {children}
        </Stack>
      </Stack>
    </Container>
  );
};
