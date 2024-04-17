import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Sorry, we couldn&apos;t find the page you were looking for.🥸</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
