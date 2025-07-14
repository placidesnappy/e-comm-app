import { APPWRITE_API_KEY, APPWRITE_ENDPOINT, APPWRITE_FUNCTION_ID, APPWRITE_PROJECT } from "../lib/appwrite";

export async function createCheckoutSession(
  priceId: string,
  mode: "subscription" | "payment"
): Promise<string> {
  const url = `${APPWRITE_ENDPOINT}/functions/${APPWRITE_FUNCTION_ID}/executions`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Appwrite-Project": APPWRITE_PROJECT,
      "X-Appwrite-Key": APPWRITE_API_KEY, // Use with care!
    },
    body: JSON.stringify({ priceId, mode }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error);
  }

  const data = await response.json();

  if (!data.url) {
    throw new Error("No checkout URL returned");
  }

  return data.url;
}
