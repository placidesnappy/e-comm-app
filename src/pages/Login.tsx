import { account, OAuthProvider } from "../lib/appwrite"; // ✅ use exported type

const Login = () => {
  const loginWithGoogle = () => {
    account.createOAuth2Session(
      OAuthProvider.Google, // ✅ use the enum safely
      "http://localhost:5173/dashboard",
      "http://localhost:5173/login"
    );
  };

  return (
    <div className="text-center p-10">
      <h2 className="text-xl mb-4">Login with Google</h2>
      <button onClick={loginWithGoogle} className="bg-black text-white px-4 py-2 rounded">
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
