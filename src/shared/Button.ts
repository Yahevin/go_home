import { styled as materialStyled } from '@mui/material/styles';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import { ButtonTypeMap } from '@mui/material/Button/Button';
import { Button as ButtonRaw } from '@mui/material';

export type ButtonType = ExtendButtonBase<ButtonTypeMap>;

export const ButtonShared: ButtonType = materialStyled(ButtonRaw)(() => ({
  fontFamily: 'Kode Mono, monospace',
}));
