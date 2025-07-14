import { useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    account
      .get()
      .then(setUser)
      .catch(() => navigate("/login"));
  }, []);

  const logout = () => {
    account.deleteSession("current").then(() => navigate("/"));
  };

  return (
    <div className="text-center p-10">
      {user ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Hello, {user.name}</h1>
          <p>Email: {user.email}</p>
          <button onClick={logout} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
            Log Out
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
