// Next.js API route for handling contact form submissions
// Sends emails via SMTP using nodemailer
// Environment variables required:
//   EMAIL_USER: Your SMTP email address (e.g., your-email@gmail.com)
//   EMAIL_PASS: Your SMTP password or app-specific password
//   EMAIL_TO: Recipient email address (where form submissions should be sent)
//   SMTP_HOST: SMTP server hostname (e.g., smtp.gmail.com)
//   SMTP_PORT: SMTP server port (e.g., 587 for TLS, 465 for SSL)
//   SMTP_SECURE: 'true' for SSL (port 465), 'false' for TLS (port 587)

import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string; // Hidden field to catch bots
}

interface ApiResponse {
  success?: boolean;
  error?: string;
}

// Validate email format
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Sanitize input to prevent XSS
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Extract and validate environment variables
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const emailTo = process.env.EMAIL_TO || emailUser; // Default to EMAIL_USER if EMAIL_TO not set
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10);
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    if (!emailUser || !emailPass) {
      console.error('Missing SMTP credentials in environment variables');
      return res.status(500).json({
        error: 'Server configuration error. Please contact the administrator.',
      });
    }

    // Parse request body
    const { name, email, phone, message, honeypot }: ContactFormData = req.body;

    // Honeypot check - if this field is filled, it's likely a bot
    if (honeypot && honeypot.trim() !== '') {
      // Silently fail for bots (don't reveal we detected them)
      return res.status(200).json({ success: true });
    }

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Name, email, and message are required fields.',
      });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({
        error: 'Please provide a valid email address.',
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedPhone = phone ? sanitizeInput(phone) : 'Not provided';
    const sanitizedMessage = sanitizeInput(message);

    // Validate sanitized inputs aren't empty
    if (!sanitizedName || !sanitizedEmail || !sanitizedMessage) {
      return res.status(400).json({
        error: 'Invalid input detected. Please check your form fields.',
      });
    }

    // Create nodemailer transporter
    // For Gmail, you may need to:
    // 1. Enable "Less secure app access" (not recommended) OR
    // 2. Use an App Password (recommended): https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true for 465, false for other ports
      auth: {
        user: emailUser,
        pass: emailPass,
      },
      // For Gmail, you might need to add:
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    await transporter.verify();

    // Email content
    const mailOptions = {
      from: `"${sanitizedName}" <${emailUser}>`,
      replyTo: sanitizedEmail,
      to: emailTo,
      subject: `Contact Form Submission from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${sanitizedPhone}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <p style="white-space: pre-wrap; background-color: #fff; padding: 15px; border-left: 4px solid #4CAF50; border-radius: 3px;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

          <p style="color: #666; font-size: 12px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${sanitizedName}
Email: ${sanitizedEmail}
Phone: ${sanitizedPhone}

Message:
${sanitizedMessage}
      `.trim(),
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Success response
    return res.status(200).json({ success: true });
  } catch (error) {
    // Log error for debugging (don't expose sensitive info to client)
    console.error('Contact form error:', error);

    // Return generic error message
    return res.status(500).json({
      error: 'Failed to send message. Please try again later or contact us directly.',
    });
  }
}

// Optional: reCAPTCHA verification function (commented out)
// To enable reCAPTCHA:
// 1. Install: yarn add axios
// 2. Add RECAPTCHA_SECRET_KEY to your environment variables
// 3. Uncomment and use this function in the handler
/*
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn('RECAPTCHA_SECRET_KEY not set, skipping verification');
    return true;
  }

  try {
    const response = await axios.post(
      'https://www.google.com/recaptcha/api/siteverify',
      null,
      {
        params: {
          secret: secretKey,
          response: token,
        },
      }
    );

    return response.data.success === true;
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return false;
  }
}
*/
