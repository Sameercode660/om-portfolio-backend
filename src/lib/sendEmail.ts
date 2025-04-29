import nodemailer from "nodemailer";

type emailData = {
    name: string;
    email: string;
    message: string;
}

// Function to send email

async function sendEmail({ name, email, message }: emailData) {
  try {
   
    const transporter = nodemailer.createTransport({
      service: "gmail", 
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password", 
      },
    });

    // Define email template
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #4CAF50;">New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 16px; color: #555;">${message}</blockquote>
        <hr />
        <p style="font-size: 0.9em; color: #999;">This message was sent from your application contact form.</p>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: `"Contact Form" <your-email@gmail.com>`, // Sender's address
      to: "omkarkadam123@gmail.com", // Receiver's address
      subject: `Message from ${name}`, // Subject line
      html: htmlTemplate, // HTML body
    });

    console.log("Email sent successfully: ", info.messageId);
  } catch (error) {
    console.error("Error sending email: ", error);
  }
}

// Example usage
sendEmail({
  name: "John Doe",
  email: "johndoe@example.com",
  message: "Hello, this is a test message!",
});
