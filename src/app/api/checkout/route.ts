import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!,{
  typescript: true
});

export async function POST(req: NextRequest) {
  const cart = await req.json();

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: cart.name,
            },
            unit_amount: cart.price * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      cancel_url: `${process.env.NEXTAUTH_URL}`,
      success_url: `${process.env.NEXTAUTH_URL}?success=true&session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.json({ session: session.url });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
