import { Container, Stack } from '@mui/material';
import { FC, PropsWithChildren } from 'react';

export const MainContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Container>
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ height: '100svh' }}
      >
        <Stack spacing={2}>{children}</Stack>
      </Stack>
    </Container>
  );
};
