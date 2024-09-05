import { FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
          <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-700 to-gray-900 text-white">
           
            <p className="text-2xl mt-4">Uh-oh! Page Not Found</p>
            <img 
                src="https://media.giphy.com/media/14uQ3cOFteDaU/giphy.gif" 
                alt="Funny confused dog gif" 
                className="w-1/2 max-w-md mt-6 rounded-lg shadow-lg"
            />
            <p className="text-lg mt-4 text-center">
                It looks like you took a wrong turn. Even this dog is confused!
            </p>
            <NavLink to="/" className="mt-6 inline-flex items-center px-4 py-2 bg-green-600 text-white text-lg font-semibold rounded-md hover:bg-green-500">
                <FaHome className="mr-2" /> Go Back Home
            </NavLink>
        </div>
        </div>
    );
};

export default ErrorPage;