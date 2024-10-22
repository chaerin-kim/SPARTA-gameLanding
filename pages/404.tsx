import ErrorPage from '@/app/pages/ErrorPage/template';

export default function Custom404() {
  return (
    <ErrorPage errorCode={'404'} error={'Not Found'} globalErrorInfo={null} />
  );
}
