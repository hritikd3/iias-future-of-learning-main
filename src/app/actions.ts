"use server";

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEnquiryAction(formData: {
    fullName: string;
    email: string;
    phone: string;
    course: string;
}) {
    try {
        const { fullName, email, phone, course } = formData;
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

        return { success: true, data };
    } catch (err) {
        console.error('Server Action Error:', err);
        return { success: false, error: 'Internal server error' };
    }
}
