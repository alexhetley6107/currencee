import { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

export const Input: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      {...props}
      type="number"
      placeholder="Input number..."
      color="secondary"
      sx={{ width: '240px' }}
      slotProps={{
        input: {
          sx: { fontSize: 28, borderRadius: 3 },
        },
      }}
    />
  );
};
