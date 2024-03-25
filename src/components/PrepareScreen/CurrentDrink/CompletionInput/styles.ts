import styled from 'styled-components';
import { Slider as SliderRaw, SliderTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import colors from 'src/constants/colors';

export const Slider: OverridableComponent<SliderTypeMap> = styled(SliderRaw)`
  margin-top: 0;

  & + & {
    margin-top: 12px;
  }

  & .MuiSlider-markLabel {
    color: ${colors.yellow};
  }
`;
