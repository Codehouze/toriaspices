import { createClient } from "contentful";
const { CONTENTFUL_SPACE_ID, CONTENTFUL_DELIVERY_ACCESS_TOKEN } = process.env;

// Initialize the Contentful client
export const client = createClient({
  space: CONTENTFUL_SPACE_ID, // Your space ID
  accessToken: CONTENTFUL_DELIVERY_ACCESS_TOKEN, // Your access token
});
