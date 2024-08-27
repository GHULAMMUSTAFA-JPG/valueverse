// import { NextApiRequest, NextApiResponse } from "next";
// // import stripe from "stripe";

// const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
// const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// const stripeInstance = new stripe(stripeSecretKey, {
//   apiVersion: "2022-11-15",
// });

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== "GET") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const notifications = await stripeInstance.webhooks.list({
//     limit: 10,
//   });

//   return res.json(notifications.data);
// }
