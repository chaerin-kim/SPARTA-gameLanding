import styled from '@emotion/styled';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
`;

export const ErrorCode = styled.h1`
  font-size: 5rem;
  margin: 0;
  color: #e74c3c;
`;

export const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

export const ErrorInfo = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  color: #888;
`;
