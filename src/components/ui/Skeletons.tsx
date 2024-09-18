import { Skeleton, Stack } from '@mui/material';
import { FC } from 'react';

export const Skeletons: FC = () => {
  return (
    <Stack spacing={2} direction="row">
      <Skeleton
        variant="rectangular"
        width={200}
        height={74}
        sx={{ borderRadius: 3 }}
      />
      <Skeleton
        variant="rectangular"
        width={106}
        height={74}
        sx={{ borderRadius: 3 }}
      />
    </Stack>
  );
};
