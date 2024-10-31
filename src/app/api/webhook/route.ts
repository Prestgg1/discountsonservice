import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const endpointSecret = process.env.STRIPE_WEBHOOK!;

interface CheckoutSession extends Omit<Stripe.Checkout.Session, 'subscription'> {
  client_reference_id: string;
  subscription?: string | null;
  amount_total: number;
}

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature')!;
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(body, sig, endpointSecret) as Stripe.Event;

    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as CheckoutSession;
        await handleCheckoutSession(session);
        break;
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent;
        console.log('PaymentIntent was successful!', paymentIntent);
        break;
      case 'payment_intent.payment_failed':
        const paymentFailed = event.data.object as Stripe.PaymentIntent;
        console.log('Payment failed', paymentFailed);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    const error = err as Error;
    console.error(`Error processing webhook: ${error.message}`);
    return NextResponse.json({ error: 'Webhook failed' }, { status: 400 });
  }
}

async function handleCheckoutSession(session: CheckoutSession) {
  // {Ödəniş Uğurludursa}, DBya elave et.
  const userId = session.client_reference_id;
  /* const subscriptionId = session.subscription;
  const price = session.amount_total / 100;
  */
  console.log(`Subscription for user ${userId} is successful!`);
}
