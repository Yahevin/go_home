import styled from 'styled-components';
import colors from 'src/constants/colors';

export const Content = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${colors.yellow};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
`;

export const ContentChecked = styled(Content)`
  transform: scale(1.2);
  box-shadow: 0 0 4px 1px ${colors.grey};
`;
