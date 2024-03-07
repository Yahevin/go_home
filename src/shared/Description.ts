import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Description = (title: string) => styled.div`
  position: relative;
  border: 2px solid ${colors.white};
  border-radius: 5px;
  padding: 8px 12px;

  &::after {
    content: '${title}';
    position: absolute;
    top: -14px;
    left: 10px;
    padding: 4px;
    background: ${colors.purple};
    line-height: 15px;
    font-size: 15px;
  }
`;
