import { Client, Account, Databases, OAuthProvider } from "appwrite";

const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT!;
const APPWRITE_PROJECT= import.meta.env.VITE_APPWRITE_PROJECT_ID!;
const APPWRITE_FUNCTION_ID = import.meta.env.VITE_APPWRITE_FUNCTION_ID!;
const APPWRITE_API_KEY = import.meta.env.VITE_APPWRITE_API_KEY!;
const STRIPE_SUBSCRIPTION_PRICE_ID = import.meta.env.VITE_STRIPE_SUBSCRIPTION_PRICE_ID!;

const client = new Client()
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT);

const account = new Account(client);
const databases = new Databases(client);

export {
  client,
  account,
  databases,
  OAuthProvider,
  APPWRITE_ENDPOINT,
  APPWRITE_PROJECT,
  APPWRITE_FUNCTION_ID,
  APPWRITE_API_KEY,
  STRIPE_SUBSCRIPTION_PRICE_ID,
};
