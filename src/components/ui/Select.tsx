import { FC } from 'react';
import { MenuItem, Select as MuiSelect } from '@mui/material';

type SelectProps = {
  items?: string[];
};

export const Select: FC<SelectProps> = () => {
  return (
    <MuiSelect
      value="USD"
      placeholder="Currency"
      color="secondary"
      sx={{ fontSize: 28, borderRadius: 3 }}
    >
      <MenuItem value="USD">USD</MenuItem>
      <MenuItem value="EUR">EUR</MenuItem>
    </MuiSelect>
  );
};
