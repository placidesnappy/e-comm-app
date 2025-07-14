const Subscribe = () => {
  const handleSubscribe = async () => {
    // Replace with real Stripe session logic later
    window.location.href = "https://your-backend.com/create-checkout-session";
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
