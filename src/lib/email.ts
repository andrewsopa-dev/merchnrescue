import { Resend } from "resend";

// Initialize Resend with API key from environment variable
// If no key is provided, it will throw an error when trying to send, 
// so we should handle that gracefully in the API route for now.
export const resend = new Resend(process.env.RESEND_API_KEY || "re_123456789"); 
