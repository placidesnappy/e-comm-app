const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function (req, res) {
  try {
    const body = JSON.parse(req.bodyRaw || "{}");
    const { priceId, mode } = body;

    if (!priceId || !mode) {
      return res.send(JSON.stringify({ error: "Missing priceId or mode" }));
    }

    const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "http://localhost:5173/checkout-success",
      cancel_url: "http://localhost:5173/checkout-cancel",
    });

    if (!session.url) {
      return res.send(JSON.stringify({ error: "No checkout URL returned" }));
    }

    return res.send(JSON.stringify({ url: session.url }));

  } catch (err) {
    return res.send(JSON.stringify({ error: err.message || "Something went wrong" }));
  }
};

