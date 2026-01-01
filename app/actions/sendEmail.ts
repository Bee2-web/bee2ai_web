'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const company = formData.get('company') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
      return { error: 'Please fill in all required fields.' };
  }

  try {
    const { error } = await resend.emails.send({
      from: 'Bee2AI Contact Form <onboarding@resend.dev>', // Default Resend test email, user should update if they verify domain
      to: ['info@bee2ai.com'],
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company}
        
        Message:
        ${message}
      `,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { error: 'Failed to send email. Please try again later.' };
  }
}
