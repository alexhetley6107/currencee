import { FC } from 'react';
import { MenuItem, Select as MuiSelect, SelectProps } from '@mui/material';
import { CurrencyUnion } from '../../models';

type Props = SelectProps & {
  items: readonly CurrencyUnion[];
};

export const Select: FC<Props> = ({ items, ...props }) => {
  return (
    <MuiSelect
      {...props}
      color="secondary"
      sx={{ width: '110px', fontSize: 28, borderRadius: 3 }}
    >
      {items.map((value) => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};
