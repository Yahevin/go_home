import React from 'react';
import { Radio } from '@mui/material';
import { Content, ContentChecked } from './styles';
import { Props } from './model';

export const RadioBtn = (props: Props) => {
  return (
    <Radio
      disableRipple
      checkedIcon={<ContentChecked>{props.content}</ContentChecked>}
      icon={<Content>{props.content}</Content>}
      {...props}
    />
  );
};
