import { companyConfig } from './companyConfig';

// Enhanced email service with proper HTML templates
export const emailService = {
  sendOfferLetter: async (internData, letterContent) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const htmlContent = `
      ${companyConfig.emailStyles}
      <div class="email-container">
        <div class="email-header">
          <h1 style="margin: 0; font-size: 24px;">🎉 Internship Offer Letter</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Welcome to Roriri Software Solutions!</p>
        </div>
        
        <div class="email-body">
          <h2 style="color: #1e40af; margin: 0 0 20px 0;">Dear ${internData.name},</h2>
          
          <p>Congratulations! We are excited to offer you an internship position as <strong>${internData.position}</strong> at Roriri Software Solutions Pvt Ltd.</p>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e40af;">
            <h3 style="color: #1e40af; margin: 0 0 15px 0;">Quick Details:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li><strong>Position:</strong> ${internData.position}</li>
              <li><strong>Start Date:</strong> ${new Date(internData.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</li>
              <li><strong>Duration:</strong> ${internData.duration}</li>
              <li><strong>Stipend:</strong> ${internData.stipend}</li>
            </ul>
          </div>
          
          <p>Please find the detailed offer letter attached to this email. We look forward to having you join our team and contribute to exciting projects!</p>
          
          <p style="margin: 30px 0;"><strong>Please confirm your acceptance within 7 days by replying to this email.</strong></p>
          
          <p>If you have any questions, feel free to reach out to us.</p>
        </div>
        
        <div class="email-footer">
          <p style="margin: 0 0 10px 0;"><strong>Roriri Software Solutions Pvt Ltd</strong></p>
          <p style="margin: 0;">📧 ${companyConfig.contact.email} | 📞 ${companyConfig.contact.phone} | 🌐 ${companyConfig.contact.website}</p>
          <p style="margin: 10px 0 0 0;">📍 ${companyConfig.address}</p>
        </div>
      </div>
    `;

    const emailData = {
      to: internData.email,
      subject: `🎉 Your Internship Offer Letter – ${companyConfig.name}`,
      html: htmlContent,
      text: `Dear ${internData.name},

Congratulations! We are pleased to offer you an internship position as ${internData.position} at ${companyConfig.name}.

Position: ${internData.position}
Start Date: ${new Date(internData.startDate).toLocaleDateString()}
Duration: ${internData.duration}
Stipend: ${internData.stipend}

Please find the detailed offer letter attached. We look forward to having you join our team!

Best regards,
${companyConfig.ceo.name}
${companyConfig.name}`,
      attachment: 'offer-letter.pdf',
      sentAt: new Date().toISOString()
    };

    // In a real implementation, this would call an email service API like SendGrid, Mailgun, or SMTP
    console.log('Offer Letter Email sent:', emailData);
    
    // Simulate successful email sending
    return {
      success: true,
      messageId: generateMessageId(),
      sentAt: emailData.sentAt,
      emailData
    };
  },

  sendCompletionCertificate: async (internData, letterContent) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const htmlContent = `
      ${companyConfig.emailStyles}
      <div class="email-container">
        <div class="email-header">
          <h1 style="margin: 0; font-size: 24px;">🏆 Internship Completion Certificate</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Congratulations on your successful completion!</p>
        </div>
        
        <div class="email-body">
          <h2 style="color: #059669; margin: 0 0 20px 0;">Dear ${internData.name},</h2>
          
          <p>Congratulations on successfully completing your internship with <strong>Roriri Software Solutions Pvt Ltd</strong>!</p>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #059669;">
            <h3 style="color: #059669; margin: 0 0 15px 0;">Internship Summary:</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li><strong>Position:</strong> ${internData.position}</li>
              <li><strong>Duration:</strong> ${internData.duration}</li>
              <li><strong>Completion Date:</strong> ${new Date(internData.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</li>
            </ul>
          </div>
          
          <p>Your dedication, professionalism, and contributions during your time with us have been truly commendable. The skills and experience you've gained will undoubtedly benefit your future career endeavors.</p>
          
          <p>Please find your official completion certificate attached to this email.</p>
          
          <p style="margin: 30px 0;"><strong>We wish you continued success in all your future endeavors!</strong></p>
          
          <p>Thank you for being a valuable part of our team.</p>
        </div>
        
        <div class="email-footer">
          <p style="margin: 0 0 10px 0;"><strong>Roriri Software Solutions Pvt Ltd</strong></p>
          <p style="margin: 0;">📧 ${companyConfig.contact.email} | 📞 ${companyConfig.contact.phone} | 🌐 ${companyConfig.contact.website}</p>
          <p style="margin: 10px 0 0 0;">📍 ${companyConfig.address}</p>
        </div>
      </div>
    `;

    const emailData = {
      to: internData.email,
      subject: `🏆 Your Internship Completion Certificate – ${companyConfig.name}`,
      html: htmlContent,
      text: `Dear ${internData.name},

Congratulations on successfully completing your internship with ${companyConfig.name}!

Position: ${internData.position}
Duration: ${internData.duration}
Completion Date: ${new Date(internData.date).toLocaleDateString()}

Your dedication and contributions have been truly commendable. Please find your official completion certificate attached.

We wish you continued success in all your future endeavors!

Best regards,
${companyConfig.ceo.name}
${companyConfig.name}`,
      attachment: 'completion-certificate.pdf',
      sentAt: new Date().toISOString()
    };

    console.log('Completion Certificate Email sent:', emailData);
    
    return {
      success: true,
      messageId: generateMessageId(),
      sentAt: emailData.sentAt,
      emailData
    };
  },

  // Test email functionality
  testEmailConnection: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Email service is working properly',
      provider: 'Simulated Email Service',
      timestamp: new Date().toISOString()
    };
  }
};

const generateMessageId = () => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Email validation helper
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Email status tracking
export const emailStatus = {
  PENDING: 'pending',
  SENT: 'sent',
  DELIVERED: 'delivered',
  FAILED: 'failed',
  BOUNCED: 'bounced'
};