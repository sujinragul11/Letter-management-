import { companyConfig } from './companyConfig';

export const letterTemplates = {
  offer: `${companyConfig.letterhead}

<div style="margin: 30px 0; text-align: right; color: #666; font-size: 14px;">
  <strong>Date:</strong> {{date}}
</div>

<div style="margin: 30px 0; font-size: 16px; color: #1a1a1a;">
  <strong>Dear {{name}},</strong>
</div>

<div style="font-size: 14px; line-height: 1.8; color: #333; text-align: justify;">
  <p>We are pleased to offer you an internship position as <strong>{{position}}</strong> at Roriri Software Solutions Pvt Ltd. We believe your skills and enthusiasm will be a valuable addition to our team.</p>

  <div style="background: #f8fafc; padding: 20px; border-left: 4px solid #1e40af; margin: 25px 0;">
    <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 16px;">INTERNSHIP DETAILS:</h3>
    <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
      <li style="margin: 8px 0;"><strong>Position:</strong> {{position}}</li>
      <li style="margin: 8px 0;"><strong>Start Date:</strong> {{start_date}}</li>
      <li style="margin: 8px 0;"><strong>Duration:</strong> {{duration}}</li>
      <li style="margin: 8px 0;"><strong>Location:</strong> {{location}}</li>
      <li style="margin: 8px 0;"><strong>Stipend:</strong> {{stipend}}</li>
    </ul>
  </div>

  <p>During your internship, you will have the opportunity to:</p>
  <ul style="padding-left: 25px; color: #555;">
    <li>Gain hands-on experience in software development and technology solutions</li>
    <li>Work alongside experienced professionals in a dynamic environment</li>
    <li>Participate in real projects and contribute to meaningful work</li>
    <li>Develop professional skills and expand your technical knowledge</li>
    <li>Receive mentorship and guidance from our expert team</li>
  </ul>

  <div style="background: #fef3c7; padding: 20px; border-left: 4px solid #f59e0b; margin: 25px 0;">
    <h3 style="color: #92400e; margin: 0 0 15px 0; font-size: 16px;">TERMS AND CONDITIONS:</h3>
    <ol style="margin: 0; padding-left: 20px; color: #78350f;">
      <li style="margin: 5px 0;">This internship is subject to satisfactory completion of any pre-joining requirements.</li>
      <li style="margin: 5px 0;">You will be expected to maintain confidentiality regarding company information.</li>
      <li style="margin: 5px 0;">Regular attendance and professional conduct are expected throughout the internship period.</li>
      <li style="margin: 5px 0;">You may be required to sign additional agreements regarding intellectual property and confidentiality.</li>
    </ol>
  </div>

  <p>We are excited about the possibility of having you join our team and contribute to our ongoing projects. Please confirm your acceptance of this offer by replying to this email within <strong>7 days</strong>.</p>

  <p>If you have any questions or need clarification on any aspect of this offer, please don't hesitate to contact us.</p>

  <p>We look forward to working with you and supporting your professional development.</p>
</div>

<div style="margin: 40px 0 20px 0; color: #333;">
  <p style="margin: 5px 0;"><strong>Sincerely,</strong></p>
  <br/>
  <p style="margin: 5px 0; font-weight: bold;">${companyConfig.ceo.name}</p>
  <p style="margin: 5px 0; color: #666;">${companyConfig.ceo.title}</p>
  <p style="margin: 5px 0; color: #666;">${companyConfig.name}</p>
  <p style="margin: 5px 0; color: #1e40af;">Email: ${companyConfig.ceo.email}</p>
  <p style="margin: 5px 0; color: #666;">Phone: ${companyConfig.contact.phone}</p>
</div>

<div style="border-top: 2px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center; color: #6b7280; font-size: 12px;">
  <p style="margin: 0;">This letter serves as an official offer of internship. Please retain this document for your records.</p>
  <p style="margin: 10px 0 0 0;"><strong>${companyConfig.name}</strong> | ${companyConfig.contact.website}</p>
</div>`,

  completion: `${companyConfig.letterhead}

<div style="text-align: center; margin: 30px 0;">
  <h2 style="color: #1e40af; font-size: 24px; margin: 0; font-weight: bold; letter-spacing: 1px;">INTERNSHIP COMPLETION LETTER</h2>
</div>

<div style="margin: 30px 0; text-align: right; color: #666; font-size: 14px;">
  <strong>Date:</strong> {{date}}
</div>

<div style="margin: 30px 0; font-size: 16px; color: #1a1a1a;">
  <strong>Dear {{name}},</strong>
</div>

<div style="font-size: 14px; line-height: 1.8; color: #333; text-align: justify;">
  <p>We are delighted to acknowledge the successful completion of your internship with <strong>Roriri Software Solutions Pvt Ltd</strong>. Your internship, which started from <strong>{{start_date}}</strong> to <strong>{{date}}</strong>, has come to a successful close, and we are pleased to report that you achieved a perfect attendance record throughout this period.</p>

  <div style="background: #f0f9ff; padding: 20px; border-left: 4px solid #0ea5e9; margin: 25px 0;">
    <h3 style="color: #0369a1; margin: 0 0 15px 0; font-size: 16px;">INTERNSHIP DETAILS:</h3>
    <ul style="margin: 0; padding-left: 20px; list-style-type: none;">
      <li style="margin: 8px 0;"><strong>Intern Name:</strong> {{name}}</li>
      <li style="margin: 8px 0;"><strong>Position:</strong> {{position}}</li>
      <li style="margin: 8px 0;"><strong>Start Date:</strong> {{start_date}}</li>
      <li style="margin: 8px 0;"><strong>Duration:</strong> {{duration}}</li>
      <li style="margin: 8px 0;"><strong>Location:</strong> {{location}}</li>
      <li style="margin: 8px 0;"><strong>Stipend:</strong> {{stipend}}</li>
    </ul>
  </div>

  <p>Your commitment to your role and your consistent presence at the office have been truly commendable. Your contributions to our <strong>{{position}}</strong> projects were highly valued, and your dedication and work ethic have not gone unnoticed.</p>

  <div style="background: #f0fdf4; padding: 20px; border-left: 4px solid #22c55e; margin: 25px 0;">
    <h3 style="color: #15803d; margin: 0 0 15px 0; font-size: 16px;">PERFORMANCE SUMMARY:</h3>
    <p style="margin: 0; color: #166534;">During the internship period, <strong>{{name}}</strong> demonstrated exceptional qualities including strong commitment to learning, excellent work ethic, effective teamwork, initiative in assigned tasks, and professional communication skills.</p>
  </div>

  <p>It has been a pleasure having you with us as an intern. You brought a fresh perspective to our team, and we hope that your time here was both insightful and rewarding.</p>

  <p><strong>Thank you once again for your exceptional performance and dedication during this {{duration}} internship period.</strong></p>

  <p>We wish <strong>{{name}}</strong> continued success in academic and professional pursuits.</p>
</div>

<div style="margin: 40px 0 20px 0; color: #333;">
  <p style="margin: 5px 0;"><strong>Best regards,</strong></p>
  <br/>
  <div style="display: flex; align-items: center; margin: 20px 0;">
    <div style="margin-right: 30px;">
      <p style="margin: 5px 0; font-weight: bold;">${companyConfig.ceo.name}</p>
      <p style="margin: 5px 0; color: #666;">${companyConfig.ceo.title}</p>
      <p style="margin: 5px 0; color: #666;">${companyConfig.name}</p>
    </div>
    <div style="width: 80px; height: 80px; border: 2px solid #1e40af; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #1e40af; font-size: 12px; text-align: center;">
      [Official<br/>Company<br/>Seal]
    </div>
  </div>
</div>

<div style="border-top: 2px solid #e5e7eb; padding-top: 20px; margin-top: 30px; text-align: center; color: #6b7280; font-size: 12px;">
  <p style="margin: 0;">This is an official completion certificate issued by <strong>${companyConfig.name}</strong>.</p>
  <p style="margin: 5px 0;">For verification, please contact our office at ${companyConfig.contact.email}</p>
  <p style="margin: 10px 0 0 0;"><strong>${companyConfig.name}</strong> | ${companyConfig.contact.website}</p>
</div>`
};

export const placeholderReplacements = {
  '{{name}}': 'Intern Name',
  '{{date}}': 'Letter Date',
  '{{position}}': 'Position Title',
  '{{start_date}}': 'Start Date',
  '{{duration}}': 'Duration',
  '{{location}}': 'Office Location',
  '{{stipend}}': 'Stipend Information'
};