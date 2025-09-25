import { companyConfig } from './companyConfig';

export const letterTemplates = {
  offer: `${companyConfig.letterhead}

<div style="margin: 30px 0; text-align: right; color: #666; font-size: 14px; font-weight: 500;">
  <strong>Date:</strong> {{date}}
</div>

<div style="margin: 30px 0; font-size: 16px; color: #1a1a1a;">
  <strong>Dear {{name}},</strong>
</div>

<div style="font-size: 14px; line-height: 1.8; color: #333; text-align: justify;">
  <p>We are pleased to offer you an internship position as <strong>{{position}}</strong> at Roriri Software Solutions Pvt Ltd. We believe your skills and enthusiasm will be a valuable addition to our team.</p>

  <div style="background: linear-gradient(135deg, #f8fafc, #e2e8f0); padding: 25px; border-left: 5px solid #1e40af; margin: 25px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h3 style="color: #1e40af; margin: 0 0 18px 0; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">INTERNSHIP DETAILS:</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
        <strong style="color: #1e40af;">Position:</strong><br/>
        <span style="color: #374151;">{{position}}</span>
      </div>
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
        <strong style="color: #1e40af;">Start Date:</strong><br/>
        <span style="color: #374151;">{{start_date}}</span>
      </div>
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
        <strong style="color: #1e40af;">Duration:</strong><br/>
        <span style="color: #374151;">{{duration}}</span>
      </div>
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6;">
        <strong style="color: #1e40af;">Stipend:</strong><br/>
        <span style="color: #374151;">{{stipend}}</span>
      </div>
    </div>
    <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #3b82f6; margin-top: 12px;">
      <strong style="color: #1e40af;">Location:</strong><br/>
      <span style="color: #374151;">{{location}}</span>
    </div>
  </div>

  <p>During your internship, you will have the opportunity to:</p>
  <ul style="padding-left: 25px; color: #555; line-height: 1.8;">
    <li style="margin: 8px 0;">Gain hands-on experience in software development and technology solutions</li>
    <li style="margin: 8px 0;">Work alongside experienced professionals in a dynamic environment</li>
    <li style="margin: 8px 0;">Participate in real projects and contribute to meaningful work</li>
    <li style="margin: 8px 0;">Develop professional skills and expand your technical knowledge</li>
    <li style="margin: 8px 0;">Receive mentorship and guidance from our expert team</li>
  </ul>

  <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 25px; border-left: 5px solid #f59e0b; margin: 25px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h3 style="color: #92400e; margin: 0 0 18px 0; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">TERMS AND CONDITIONS:</h3>
    <ol style="margin: 0; padding-left: 20px; color: #78350f; line-height: 1.7;">
      <li style="margin: 8px 0;">This internship is subject to satisfactory completion of any pre-joining requirements.</li>
      <li style="margin: 8px 0;">You will be expected to maintain confidentiality regarding company information.</li>
      <li style="margin: 8px 0;">Regular attendance and professional conduct are expected throughout the internship period.</li>
      <li style="margin: 8px 0;">You may be required to sign additional agreements regarding intellectual property and confidentiality.</li>
    </ol>
  </div>

  <p style="background: #e0f2fe; padding: 15px; border-radius: 8px; border-left: 4px solid #0288d1; margin: 20px 0;">
    <strong>Important:</strong> We are excited about the possibility of having you join our team and contribute to our ongoing projects. Please confirm your acceptance of this offer by replying to this email within <strong style="color: #d32f2f;">7 days</strong>.
  </p>

  <p>If you have any questions or need clarification on any aspect of this offer, please don't hesitate to contact us.</p>

  <p>We look forward to working with you and supporting your professional development.</p>
</div>

<div style="margin: 50px 0 30px 0; color: #333;">
  <p style="margin: 5px 0;"><strong>Sincerely,</strong></p>
  <br/>
  <div style="display: flex; align-items: center; justify-content: space-between; margin: 25px 0;">
    <div>
      <p style="margin: 5px 0; font-weight: bold; font-size: 16px; color: #1e40af;">${companyConfig.ceo.name}</p>
      <p style="margin: 5px 0; color: #666; font-style: italic;">${companyConfig.ceo.title}</p>
      <p style="margin: 5px 0; color: #666; font-weight: 600;">${companyConfig.name}</p>
      <p style="margin: 5px 0; color: #1e40af; font-size: 14px;">📧 ${companyConfig.ceo.email}</p>
      <p style="margin: 5px 0; color: #666; font-size: 14px;">📞 ${companyConfig.contact.phone}</p>
    </div>
    <div style="width: 80px; height: 80px; border: 3px solid #1e40af; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #1e40af; font-size: 10px; text-align: center; font-weight: bold; background: linear-gradient(45deg, #f8fafc, #e2e8f0);">
      [Official<br/>Company<br/>Seal]
    </div>
  </div>
</div>

<div style="border-top: 3px solid #1e40af; padding-top: 20px; margin-top: 40px; text-align: center; color: #6b7280; font-size: 12px; background: linear-gradient(90deg, #f8fafc, #e2e8f0); padding: 20px; border-radius: 8px;">
  <p style="margin: 0; font-weight: 600;">This letter serves as an official offer of internship. Please retain this document for your records.</p>
  <p style="margin: 10px 0 0 0;"><strong>${companyConfig.name}</strong> | 🌐 ${companyConfig.contact.website} | 📧 ${companyConfig.contact.email}</p>
</div>`,

  completion: `${companyConfig.letterhead}

<div style="text-align: center; margin: 30px 0; padding: 20px; background: linear-gradient(135deg, #e0f2fe, #b3e5fc); border-radius: 12px; border: 2px solid #0288d1;">
  <h2 style="color: #1e40af; font-size: 28px; margin: 0; font-weight: bold; letter-spacing: 1.5px; text-transform: uppercase; text-shadow: 1px 1px 2px rgba(0,0,0,0.1);">INTERNSHIP COMPLETION LETTER</h2>
  <div style="width: 60px; height: 3px; background: linear-gradient(90deg, #1e40af, #3b82f6); margin: 10px auto; border-radius: 2px;"></div>
</div>

<div style="margin: 30px 0; text-align: right; color: #666; font-size: 14px; font-weight: 500;">
  <strong>Date:</strong> {{date}}
</div>

<div style="margin: 30px 0; font-size: 16px; color: #1a1a1a;">
  <strong>Dear {{name}},</strong>
</div>

<div style="font-size: 14px; line-height: 1.8; color: #333; text-align: justify;">
  <p>We are delighted to acknowledge the successful completion of your internship with <strong>Roriri Software Solutions Pvt Ltd</strong>. Your internship, which started from <strong>{{start_date}}</strong> and concluded on <strong>{{date}}</strong>, has come to a successful close, and we are pleased to report that you achieved a perfect attendance record throughout this period.</p>

  <div style="background: linear-gradient(135deg, #f0f9ff, #dbeafe); padding: 25px; border-left: 5px solid #0ea5e9; margin: 25px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h3 style="color: #0369a1; margin: 0 0 18px 0; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">INTERNSHIP DETAILS:</h3>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0ea5e9;">
        <strong style="color: #0369a1;">Intern Name:</strong><br/>
        <span style="color: #374151;">{{name}}</span>
      </div>
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0ea5e9;">
        <strong style="color: #0369a1;">Position:</strong><br/>
        <span style="color: #374151;">{{position}}</span>
      </div>
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0ea5e9;">
        <strong style="color: #0369a1;">Start Date:</strong><br/>
        <span style="color: #374151;">{{start_date}}</span>
      </div>
      <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0ea5e9;">
        <strong style="color: #0369a1;">Duration:</strong><br/>
        <span style="color: #374151;">{{duration}}</span>
      </div>
    </div>
    <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0ea5e9; margin-top: 12px;">
      <strong style="color: #0369a1;">Location:</strong><br/>
      <span style="color: #374151;">{{location}}</span>
    </div>
    <div style="background: white; padding: 12px; border-radius: 6px; border-left: 3px solid #0ea5e9; margin-top: 12px;">
      <strong style="color: #0369a1;">Stipend:</strong><br/>
      <span style="color: #374151;">{{stipend}}</span>
    </div>
  </div>

  <p>Your commitment to your role and your consistent presence at the office have been truly commendable. Your contributions to our <strong>{{position}}</strong> projects were highly valued, and your dedication and work ethic have not gone unnoticed.</p>

  <div style="background: linear-gradient(135deg, #f0fdf4, #dcfce7); padding: 25px; border-left: 5px solid #22c55e; margin: 25px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
    <h3 style="color: #15803d; margin: 0 0 18px 0; font-size: 16px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">PERFORMANCE SUMMARY:</h3>
    <p style="margin: 0; color: #166534; line-height: 1.8;">During the internship period, <strong>{{name}}</strong> demonstrated exceptional qualities including:</p>
    <ul style="margin: 15px 0 0 0; padding-left: 20px; color: #166534; line-height: 1.8;">
      <li style="margin: 6px 0;">Strong commitment to learning and professional development</li>
      <li style="margin: 6px 0;">Excellent work ethic and punctuality</li>
      <li style="margin: 6px 0;">Effective teamwork and collaboration skills</li>
      <li style="margin: 6px 0;">Initiative in taking on assigned tasks and responsibilities</li>
      <li style="margin: 6px 0;">Professional communication and interpersonal skills</li>
    </ul>
  </div>

  <p>It has been a pleasure having you with us as an intern. You brought a fresh perspective to our team, and we hope that your time here was both insightful and rewarding.</p>

  <p style="background: #e8f5e8; padding: 15px; border-radius: 8px; border-left: 4px solid #4caf50; margin: 20px 0; font-weight: 600;">
    <strong>Thank you once again for your exceptional performance and dedication during this {{duration}} internship period.</strong>
  </p>

  <p>We wish <strong>{{name}}</strong> continued success in all academic and professional pursuits.</p>
</div>

<div style="margin: 50px 0 30px 0; color: #333;">
  <p style="margin: 5px 0;"><strong>Best regards,</strong></p>
  <br/>
  <div style="display: flex; align-items: center; justify-content: space-between; margin: 25px 0;">
    <div>
      <p style="margin: 5px 0; font-weight: bold; font-size: 16px; color: #1e40af;">${companyConfig.ceo.name}</p>
      <p style="margin: 5px 0; color: #666; font-style: italic;">${companyConfig.ceo.title}</p>
      <p style="margin: 5px 0; color: #666; font-weight: 600;">${companyConfig.name}</p>
      <p style="margin: 5px 0; color: #1e40af; font-size: 14px;">📧 ${companyConfig.ceo.email}</p>
      <p style="margin: 5px 0; color: #666; font-size: 14px;">📞 ${companyConfig.contact.phone}</p>
    </div>
    <div style="width: 90px; height: 90px; border: 3px solid #1e40af; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #1e40af; font-size: 10px; text-align: center; font-weight: bold; background: linear-gradient(45deg, #f8fafc, #e2e8f0); position: relative;">
      <div style="position: absolute; top: -5px; right: -5px; width: 20px; height: 20px; background: #22c55e; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">✓</div>
      [Official<br/>Company<br/>Seal]
    </div>
  </div>
</div>

<div style="border-top: 3px solid #1e40af; padding-top: 20px; margin-top: 40px; text-align: center; color: #6b7280; font-size: 12px; background: linear-gradient(90deg, #f8fafc, #e2e8f0); padding: 20px; border-radius: 8px;">
  <p style="margin: 0; font-weight: 600;">This is an official completion certificate issued by <strong>${companyConfig.name}</strong>.</p>
  <p style="margin: 5px 0;">For verification, please contact our office at ${companyConfig.contact.email}</p>
  <p style="margin: 10px 0 0 0;"><strong>${companyConfig.name}</strong> | 🌐 ${companyConfig.contact.website} | 📧 ${companyConfig.contact.email}</p>
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