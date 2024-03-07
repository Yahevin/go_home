import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Content = styled.div`
  color: ${colors.white};
`;

export const ContentChecked = styled(Content)`
  color: ${colors.yellow};
`;
