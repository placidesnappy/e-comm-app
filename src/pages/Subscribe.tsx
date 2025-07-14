import { useState } from "react";
import { createCheckoutSession } from "../api/stripe"; // Adjust path if needed
import { STRIPE_SUBSCRIPTION_PRICE_ID } from "../lib/appwrite";


const Subscribe = () => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      const url = await createCheckoutSession(STRIPE_SUBSCRIPTION_PRICE_ID, "subscription");
      console.log("Checkout URL from backend:", url);
      window.location.href = url;
      console.log("Checkout URL from backend:", url);
    } catch (error: any) {
      alert("Failed to start subscription: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold mb-4">Subscribe to Premium</h1>
      <p className="text-lg mb-6">
        Get unlimited access to exclusive features and premium content.
      </p>

      <div className="bg-gray-100 p-6 rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Premium Plan</h2>
        <p className="text-sm text-gray-600 mb-4">Only $5/month. Cancel anytime.</p>
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className={`bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading ? "Processing..." : "Subscribe Now"}
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
