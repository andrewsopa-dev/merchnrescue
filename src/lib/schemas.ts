import { z } from "zod";

export const quoteSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    details: z.string().min(5, "Please share some details"),
    artworkUrl: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

export type QuoteFormData = z.infer<typeof quoteSchema>;
