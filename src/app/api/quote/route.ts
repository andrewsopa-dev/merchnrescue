import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/schemas";
import { resend } from "@/lib/email";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate data
        const result = quoteSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { error: "Validation failed", details: result.error.issues },
                { status: 400 }
            );
        }

        const { name, email, details, artworkUrl, company_website } = result.data;

        // Spam protection: honeypot field
        if (company_website && company_website.length > 0) {
            console.log(`[SPAM BLOCKED] Honeypot filled by ${email}`);
            return NextResponse.json({ success: true, message: "Quote request received" }); // lie to the bot
        }
        // ... (logging remains same) ...

        console.log(`[ENTERPRISE QUOTE] From: ${name} (${email}) - ${details} [Art: ${artworkUrl || 'None'}]`);

        let emailStatus = "simulated";

        // Only attempt to send if a real API key might be present (length check or similar)
        // For now we simulate success if the key is the dummy one
        if (process.env.RESEND_API_KEY) {
            try {
                await resend.emails.send({
                    from: "Merch & Rescue Quotes <onboarding@resend.dev>", // Needs verified domain for prod
                    to: ["drew@shirtnasty.com"],
                    subject: `New Quote Request from ${name}`,
                    html: `
                    <h1>New Project Inquiry</h1>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Details:</strong></p>
                    <pre>${details}</pre>
                    ${artworkUrl ? `<p><strong>Artwork Link:</strong> <a href="${artworkUrl}">${artworkUrl}</a></p>` : ""}
                `
                });
                emailStatus = "sent";
            } catch (emailError) {
                console.error("Failed to send email:", emailError);
                emailStatus = "failed_but_logged";
                // We don't fail the request to the user, just log it
            }
        }

        return NextResponse.json({ success: true, message: "Quote request received", emailStatus });
    } catch (error) {
        console.error("Quote API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
