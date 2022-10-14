import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error_page">
      <h1>Erro</h1>
      <p>A página não foi encontrada!</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
