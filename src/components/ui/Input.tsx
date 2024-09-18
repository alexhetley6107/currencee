import { FC } from 'react';
import { TextField } from '@mui/material';

type InputProps = {
  value?: string;
};

export const Input: FC<InputProps> = ({ value }) => {
  return (
    <TextField
      value={value}
      type="number"
      color="secondary"
      sx={{ width: '200px' }}
      slotProps={{
        input: {
          sx: { fontSize: 28, borderRadius: 3 },
        },
      }}
    />
  );
};
