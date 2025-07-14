const Premium = () => {
  return (
    <div className="max-w-2xl mx-auto p-10 text-center">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Welcome to Premium Access 🎉</h1>
      <p className="text-lg">
        You now have full access to premium features and exclusive tools.
      </p>

      <div className="mt-6 p-6 border border-dashed rounded bg-white shadow">
        <h2 className="text-xl font-semibold mb-2">Your Premium Perks</h2>
        <ul className="text-left text-sm text-gray-700 list-disc list-inside">
          <li>Exclusive product offers</li>
          <li>Early feature access</li>
          <li>Downloadable resources</li>
          <li>Priority support</li>
        </ul>
      </div>
    </div>
  );
};

export default Premium;
