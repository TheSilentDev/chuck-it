import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.secondary};
  color: ${({ theme }) => theme.palette.light};
  width: 100px;
  height: 100px;
  font-size: ${({ theme }) => theme.fontSize[4]};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 13px 3px ${({ theme }) => theme.palette.cardShadow};
  -moz-box-shadow: 0px 0px 13px 3px ${({ theme }) => theme.palette.cardShow};
  box-shadow: 0px 0px 13px 3px ${({ theme }) => theme.palette.cardShadow};
`;
