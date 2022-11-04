import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin-bottom: 20px;
`;

export const OptionButton = styled.button`
  width: 100px;
  padding: 10px;
  font-weight: bold;
  text-transform: capitalize;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
