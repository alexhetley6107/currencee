import { Skeleton, Stack } from '@mui/material';
import { FC } from 'react';

export const Skeletons: FC = () => {
  return (
    <>
      <Stack spacing={2} direction="row" sx={{ px: 1, pb: 2 }}>
        <Skeleton
          variant="rectangular"
          width={240}
          height={74}
          sx={{ borderRadius: 3 }}
        />
        <Skeleton
          variant="rectangular"
          width={110}
          height={74}
          sx={{ borderRadius: 3 }}
        />
      </Stack>
      <Stack spacing={2} direction="row" sx={{ px: 1, pb: 2 }}>
        <Skeleton
          variant="rectangular"
          width={240}
          height={74}
          sx={{ borderRadius: 3 }}
        />
        <Skeleton
          variant="rectangular"
          width={110}
          height={74}
          sx={{ borderRadius: 3 }}
        />
      </Stack>
    </>
  );
};
