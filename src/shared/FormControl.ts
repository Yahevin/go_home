import { FormControl as FormControlBase } from '@mui/material';
import { styled as materialStyled } from '@mui/material/styles';

export const FormControl = materialStyled(FormControlBase)(() => ({
  display: 'flex',
  width: '100%',
}));
