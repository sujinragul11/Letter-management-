import { companyConfig } from './companyConfig';

// Email service simulation
export const emailService = {
  sendOfferLetter: async (internData, letterContent, customMessage = '') => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const emailData = {
      to: internData.email,
      subject: `Your Internship Offer Letter – ${companyConfig.name}`,
      body: `Dear ${internData.name},

Please find attached your internship offer letter for the position of ${internData.position}.

${customMessage ? `\n${customMessage}\n` : ''}
We look forward to having you join our team!

Best regards,
${companyConfig.hrManager.name}
${companyConfig.hrManager.title}, ${companyConfig.name}`,
      attachment: 'offer-letter.pdf',
      messageId: generateMessageId()
    };
    
    console.log('📧 Sending offer letter email:', emailData);
    return { success: true, messageId: emailData.messageId };
  },

  sendCompletionCertificate: async (internData, letterContent, customMessage = '') => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const emailData = {
      to: internData.email,
      subject: `Internship Completion Certificate – ${companyConfig.name}`,
      body: `Dear ${internData.name},

Congratulations on successfully completing your internship with us!

${customMessage ? `\n${customMessage}\n` : ''}
Please find attached your internship completion certificate.

Best regards,
${companyConfig.hrManager.name}
${companyConfig.hrManager.title}, ${companyConfig.name}`,
      attachment: 'completion-certificate.pdf',
      messageId: generateMessageId()
    };
    
    console.log('📧 Sending completion certificate email:', emailData);
    return { success: true, messageId: emailData.messageId };
  }
};

const generateMessageId = () => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};