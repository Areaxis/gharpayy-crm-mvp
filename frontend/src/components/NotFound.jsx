import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center h-screen">

      <div className="text-center">

        <h1 className="text-4xl font-bold mb-4">404</h1>

        <p className="text-gray-600 mb-4">
          Page not found
        </p>

        <Link to="/">Go back home</Link>

      </div>

    </div>
  );
}