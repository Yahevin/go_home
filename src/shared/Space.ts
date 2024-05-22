import styled from 'styled-components';

export const Space = styled.div<{ margin: number }>`
  margin: ${({ margin }) => `${margin / 2}px 0`};
`;
