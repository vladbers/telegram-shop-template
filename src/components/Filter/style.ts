import styled from 'styled-components';

import CB from 'commons/Checkbox';
import Button from 'commons/Button';

export const Container = styled.div``;

export const Checkbox = styled(Button)`
  display: inline-block;
  margin-bottom: 10px;
  .toggle-button {
    font-size: 15px;
    border-radius: 12px;
    box-sizing: border-box;
    text-align: center;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.primary};
    background-color: #ececec;
    border: 1px solid transparent;
  }
  .active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ececec;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const Title = styled.h4`
  margin-top: 2px;
  margin-bottom: 20px;
`;
