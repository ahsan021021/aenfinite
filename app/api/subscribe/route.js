import nodemailer from 'nodemailer';

export async function POST(req) {
    try {
        // Parse JSON body from the request
        const { email } = await req.json();

        // Check if email is provided
        if (!email) {
            return new Response(
                JSON.stringify({ message: 'Email is required' }),
                { status: 400 }
            );
        }

        // Configure the transporter for Zoho SMTP settings
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 587, // For Zoho, use 587 with `secure: false`
            secure: false, // Must be false for port 587
            auth: {
                user: 'info@aenfinite.com',
                pass: 'Subnetmask255**', // Make sure this is correct
            },
        });

        // Define email options
        const mailOptions = {
            from: 'info@aenfinite.com', // Must match Zoho SMTP user
            to: email,
            subject: 'Welcome to AenFinite Newsletter',
            text: 'Thank you for subscribing to our newsletter!',
        };

        // Send email
        await transporter.sendMail(mailOptions);

        // Respond with success message
        return new Response(
            JSON.stringify({ message: 'Subscription successful' }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);

        // Respond with error message
        return new Response(
            JSON.stringify({ message: 'Subscription failed', error: error.message }),
            { status: 500 }
        );
    }
}
