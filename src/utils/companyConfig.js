// Company configuration based on Roriri Software Solutions letterhead
export const companyConfig = {
  name: 'Roriri Software Solutions Pvt Ltd',
  address: `RORIRI PARK
Kolakod, Tirunelveli - 627502`,
  
  contact: {
    phone: '+91 73380 41679',
    phone2: '+91 96770 18421',
    email: 'services@roririsoft.com',
    website: 'www.roririsoft.com'
  },
  
  ceo: {
    name: 'Ragupathi R',
    title: 'Chief Executive Officer (CEO)',
    email: 'ceo@roririsoft.com'
  },
  
  // Enhanced letterhead with Roriri branding and styling
  letterhead: `
    <div style="position: relative; margin-bottom: 40px; padding: 20px 0; border-bottom: 3px solid #1e40af;">
      <!-- Header with logo area and company name -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <div style="display: flex; align-items: center;">
          <!-- Logo placeholder (colorful star-like design) -->
          <div style="width: 40px; height: 40px; margin-right: 15px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <span style="color: white; font-weight: bold; font-size: 18px;">✦</span>
          </div>
          <div>
            <h1 style="color: #1a1a1a; font-size: 28px; margin: 0; font-weight: bold; letter-spacing: 1px;">Roriri</h1>
            <p style="margin: 0; color: #666; font-size: 12px; font-weight: 500; letter-spacing: 0.5px;">SOFTWARE SOLUTIONS</p>
          </div>
        </div>
        <!-- Decorative blue corner element -->
        <div style="width: 80px; height: 60px; background: linear-gradient(135deg, #1e40af, #3b82f6); clip-path: polygon(0 0, 100% 0, 100% 100%);"></div>
      </div>
      
      <!-- Contact information -->
      <div style="text-align: center; color: #555; font-size: 11px; line-height: 1.4;">
        <div style="margin-bottom: 8px;">
          <span style="margin: 0 15px;">📞 +91 73380 41679</span>
          <span style="margin: 0 15px;">📞 +91 96770 18421</span>
          <span style="margin: 0 15px;">🌐 www.roririsoft.com</span>
        </div>
        <div>
          <span style="margin: 0 15px;">✉️ services@roririsoft.com</span>
          <span style="margin: 0 15px;">📍 RORIRI PARK, Kolakod, Tirunelveli - 627502</span>
        </div>
      </div>
    </div>
  `,

  // Email template styling
  emailStyles: `
    <style>
      .email-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 600px;
        margin: 0 auto;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
      }
      .email-header {
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        color: white;
        padding: 20px;
        text-align: center;
      }
      .email-body {
        padding: 30px;
        line-height: 1.6;
        color: #374151;
      }
      .email-footer {
        background: #f9fafb;
        padding: 20px;
        text-align: center;
        border-top: 1px solid #e5e7eb;
        font-size: 12px;
        color: #6b7280;
      }
    </style>
  `
};