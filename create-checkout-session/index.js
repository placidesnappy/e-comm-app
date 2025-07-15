const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function (req) {
  try {
    const body = JSON.parse(req.bodyRaw || "{}");
    const { priceId, mode } = body;

    if (!priceId || !mode) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing priceId or mode" })
      };
    }

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "http://localhost:5173/checkout-success",
      cancel_url: "http://localhost:5173/checkout-cancel"
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
