import styled from 'styled-components';

interface IWrapper {
  width?: string;
  column?: boolean;
  justify?: string;
  align?: string;
}

export const Wrapper = styled.div<IWrapper>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ justify }) => justify || 'center'};
  align-items: ${({ align }) => align || 'center'};
  flex-wrap: wrap;
`;

export const JokeText = styled.h1``;

export const ChucksFace = styled.img`
  width: 100px;
`;
