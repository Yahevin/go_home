import styled from 'styled-components';
import { Slider as SliderRaw, SliderTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import colors from 'src/constants/colors';
import { Subtitle } from 'src/shared/Subtitle';

export const Slider: OverridableComponent<SliderTypeMap> = styled(SliderRaw)`
  margin-top: 20px;

  & + & {
    margin-top: 0;
  }

  & .MuiSlider-markLabel {
    color: ${colors.yellow};
  }
`;

export const StyledSubtitle = styled(Subtitle)`
  margin: 24px 0 -12px 0;
`;
