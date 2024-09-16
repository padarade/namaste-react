import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <h2>Sorry, an unexpected error has occurred.</h2>
      <p>
        <i>
          {error.status} : {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
}
