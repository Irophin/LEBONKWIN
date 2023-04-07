import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Sidebar } from "../layouts";

const ErrorPage = () => {

  const error = useRouteError()

  if (!isRouteErrorResponse(error)){
    throw new Error('Not an error response')
  }

  return (
    <>
      <Sidebar/>

      <main>
        <h1>
          {error.status} - {error.statusText}
        </h1>
      </main>
    </>
  );
}

export default ErrorPage;