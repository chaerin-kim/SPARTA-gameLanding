import * as S from './style';

interface ErrorPageProps {
  errorCode: string;
  error: string;
  globalErrorInfo?: string | null;
}

const ErrorPage = ({ errorCode, error, globalErrorInfo }: ErrorPageProps) => {
  return (
    <S.ErrorWrapper>
      <S.ErrorCode>{errorCode}</S.ErrorCode>
      <S.ErrorMessage>{error}</S.ErrorMessage>
      {globalErrorInfo && <S.ErrorInfo>{globalErrorInfo}</S.ErrorInfo>}
    </S.ErrorWrapper>
  );
};

export default ErrorPage;
