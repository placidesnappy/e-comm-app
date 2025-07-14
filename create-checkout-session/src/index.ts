import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-06-30.basil",
});

type ReqType = {
  bodyRaw?: string;
};

module.exports = async function (req: ReqType, res: any) {
  const body = JSON.parse(req.bodyRaw || "{}");
  const { priceId, mode } = body;

  if (!priceId || !mode) {
    return res.json({ error: "Missing priceId or mode" });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: "http://localhost:5173/checkout-success", 
      cancel_url: "http://localhost:5173/checkout-cancel",  
    });

    res.json({ url: session.url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
