import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useSubscription } from "../contexts/SubscriptionContext";

const Navbar = () => {
  const { user, loading: authLoading } = useAuth();
  const { subscribed, loading: subLoading } = useSubscription();
  const navigate = useNavigate();

  const handleLogout = async () => {
    // Replace with your Appwrite logout logic
    try {
      await import("../lib/appwrite").then(({ account }) => account.deleteSession("current"));
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex space-x-6 items-center">
        <Link to="/" className="text-xl font-bold hover:text-indigo-400">
          MyShop
        </Link>

        {/* Always visible */}
        <Link to="/" className="hover:text-indigo-400">
          Products
        </Link>

        {/* Visible only if logged in */}
        {!authLoading && user && (
          <>
            <Link to="/dashboard" className="hover:text-indigo-400">
              Dashboard
            </Link>
            <Link to="/subscribe" className="hover:text-indigo-400">
              Subscribe
            </Link>
          </>
        )}

        {/* Visible only if subscribed */}
        {!authLoading && !subLoading && subscribed && (
          <Link to="/premium" className="hover:text-indigo-400 font-semibold">
            Premium
          </Link>
        )}
      </div>

      <div>
        {/* Loading state */}
        {(authLoading || subLoading) && (
          <span className="italic text-gray-400 mr-4">Loading...</span>
        )}

        {/* Show login button if not logged in */}
        {!authLoading && !user && (
          <Link
            to="/login"
            className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
          >
            Login
          </Link>
        )}

        {/* Show logout button if logged in */}
        {!authLoading && user && (
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
