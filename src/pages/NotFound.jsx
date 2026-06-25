import { NavLink } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 py-12 lg:px-8">
      <div className="text-center">
        <div className="flex justify-center mb-10">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1CFVb1-8Y4suwNzgY9h7QGB2HYglqKSJybR-6tVl3EA&s=10"
            alt="Page not found"
            className="w-full max-w-sm h-[] rounded-lg object-cover"
          />
        </div>

        <div className="max-w-xl mx-auto">
          <h1 className="text-9xl font-extrabold text-gray-900 tracking-tight">404</h1>
          <p className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
            Oops! Page not found.
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL or the page has been moved.
          </p>
          
          <div className="mt-10 flex items-center justify-center">
            <NavLink
              to="/"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Back to Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}