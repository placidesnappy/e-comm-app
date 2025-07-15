const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function (req, res) {
  const body = JSON.parse(req.bodyRaw || "{}");
  const { priceId, mode } = body;

  if (!priceId || !mode) {
    console.error("❌ Missing priceId or mode");
    return res.json({ error: "Missing priceId or mode" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "http://localhost:5173/checkout-success",
      cancel_url: "http://localhost:5173/checkout-cancel",
    });

    if (!session.url) {
      console.error("❌ No session URL returned from Stripe");
      return res.json({ error: "No checkout URL returned" });
    }

    console.log("✅ Checkout session created:", session.url);
    return res.json({ url: session.url });

  } catch (err) {
    console.error("❌ Stripe error:", err);
    return res.status(500).json({ error: err.message });
  }
};
