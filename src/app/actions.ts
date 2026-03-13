"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEnquiryAction(formData: {
  fullName: string;
  email: string;
  phone: string;
  course: string;
  age: string;
  experience: string;
}) {
  try {
    const { fullName, email, phone, course, age, experience } = formData;
    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || 'iiasofficials77@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'IIAS Leads <onboarding@resend.dev>',
      to: recipientEmail,
      subject: `New Lead: ${fullName} - ${course}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">New Course Enquiry</h2>
          <p>You have received a new lead from the IIAS Admission 2026 page.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background-color: #f8fafc;">
                <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left; color: #64748b;">Field</th>
                <th style="border: 1px solid #e2e8f0; padding: 12px; text-align: left; color: #1e293b;">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: bold; color: #64748b;">Full Name</td>
                <td style="border: 1px solid #e2e8f0; padding: 12px; color: #1e293b;">${fullName}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: bold; color: #64748b;">Email Address</td>
                <td style="border: 1px solid #e2e8f0; padding: 12px; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: bold; color: #64748b;">Phone Number</td>
                <td style="border: 1px solid #e2e8f0; padding: 12px; color: #1e293b;">
                  <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: bold; color: #64748b;">Course</td>
                <td style="border: 1px solid #e2e8f0; padding: 12px; color: #1e293b;">${course}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: bold; color: #64748b;">Age</td>
                <td style="border: 1px solid #e2e8f0; padding: 12px; color: #1e293b;">${age}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="border: 1px solid #e2e8f0; padding: 12px; font-weight: bold; color: #64748b;">Experience</td>
                <td style="border: 1px solid #e2e8f0; padding: 12px; color: #1e293b;">${experience}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            <p>This lead was captured on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>
            <p>© 2026 Indore Institute of Advance Studies</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    // Sync to Google Sheets asynchronously
    syncToGoogleSheets({ fullName, email, phone, course, age, experience });

    return { success: true, data };
  } catch (err) {
    console.error('Server Action Error:', err);
    return { success: false, error: 'Internal server error' };
  }
}

export async function sendContactAction(formData: {
  fullName: string;
  email: string;
  course: string;
  message: string;
  age: string;
  experience: string;
}) {
  try {
    const { fullName, email, course, message, age, experience } = formData;
    const recipientEmail = process.env.LEAD_RECIPIENT_EMAIL || 'iiasofficials77@gmail.com';

    const { data, error } = await resend.emails.send({
      from: 'IIAS Contact <onboarding@resend.dev>',
      to: recipientEmail,
      subject: `New Message: ${fullName} - ${course}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #8b5cf6; border-bottom: 2px solid #8b5cf6; padding-bottom: 10px;">New Contact Message</h2>
          <p>You have received a new message from the IIAS Contact Form.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <thead>
              <tr style="background-color: #f5f3ff;">
                <th style="border: 1px solid #ddd6fe; padding: 12px; text-align: left; color: #6d28d9;">Field</th>
                <th style="border: 1px solid #ddd6fe; padding: 12px; text-align: left; color: #1e1b4b;">Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1px solid #ddd6fe; padding: 12px; font-weight: bold; color: #6d28d9;">Full Name</td>
                <td style="border: 1px solid #ddd6fe; padding: 12px; color: #1e1b4b;">${fullName}</td>
              </tr>
              <tr style="background-color: #f5f3ff;">
                <td style="border: 1px solid #ddd6fe; padding: 12px; font-weight: bold; color: #6d28d9;">Email Address</td>
                <td style="border: 1px solid #ddd6fe; padding: 12px; color: #1e1b4b;">
                  <a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd6fe; padding: 12px; font-weight: bold; color: #6d28d9;">Course of Interest</td>
                <td style="border: 1px solid #ddd6fe; padding: 12px; color: #1e1b4b;">${course}</td>
              </tr>
              <tr style="background-color: #f5f3ff;">
                <td style="border: 1px solid #ddd6fe; padding: 12px; font-weight: bold; color: #6d28d9;">Message</td>
                <td style="border: 1px solid #ddd6fe; padding: 12px; color: #1e1b4b; white-space: pre-wrap;">${message}</td>
              </tr>
              <tr>
                <td style="border: 1px solid #ddd6fe; padding: 12px; font-weight: bold; color: #6d28d9;">Age</td>
                <td style="border: 1px solid #ddd6fe; padding: 12px; color: #1e1b4b;">${age}</td>
              </tr>
              <tr style="background-color: #f5f3ff;">
                <td style="border: 1px solid #ddd6fe; padding: 12px; font-weight: bold; color: #6d28d9;">Experience</td>
                <td style="border: 1px solid #ddd6fe; padding: 12px; color: #1e1b4b;">${experience}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center;">
            <p>This message was sent on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</p>
            <p>© 2026 Indore Institute of Advance Studies</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Error:', error);
      return { success: false, error: error.message };
    }

    // Sync to Google Sheets asynchronously
    syncToGoogleSheets({ fullName, email, course, message, age, experience });

    return { success: true, data };
  } catch (err) {
    console.error('Server Action Error:', err);
    return { success: false, error: 'Internal server error' };
  }
}

async function syncToGoogleSheets(data: any) {
  const webappUrl = process.env.GOOGLE_SHEET_WEBAPP_URL;
  if (!webappUrl) {
    console.warn('GOOGLE_SHEET_WEBAPP_URL not set. Skipping sheet sync.');
    return;
  }

  try {
    await fetch(webappUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (err) {
    console.error('Google Sheets Sync Error:', err);
  }
}
