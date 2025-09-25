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
  
  // Enhanced letterhead with Roriri branding matching the image
  letterhead: `
    <div style="position: relative; margin-bottom: 40px; padding: 20px 0;">
      <!-- Header with logo and company name -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
        <div style="display: flex; align-items: center;">
          <!-- Roriri Logo (colorful star design) -->
          <div style="width: 45px; height: 45px; margin-right: 15px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4); border-radius: 8px; display: flex; align-items: center; justify-content: center; position: relative;">
            <div style="color: white; font-weight: bold; font-size: 20px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">✦</div>
          </div>
          <div>
            <h1 style="color: #1a1a1a; font-size: 32px; margin: 0; font-weight: bold; letter-spacing: 1.2px; font-family: 'Arial', sans-serif;">Roriri</h1>
            <p style="margin: 0; color: #666; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase;">SOFTWARE SOLUTIONS</p>
          </div>
        </div>
        <!-- Blue corner design matching the letterhead -->
        <div style="width: 100px; height: 80px; background: linear-gradient(135deg, #1e40af, #3b82f6); clip-path: polygon(0 0, 100% 0, 100% 100%); position: relative;">
          <div style="position: absolute; top: 10px; right: 10px; width: 8px; height: 8px; background: white; border-radius: 50%; opacity: 0.8;"></div>
        </div>
      </div>
      
      <!-- Contact information bar -->
      <div style="background: linear-gradient(90deg, #f8fafc, #e2e8f0); padding: 12px 0; text-align: center; border-radius: 6px; margin: 20px 0;">
        <div style="color: #374151; font-size: 11px; line-height: 1.4; font-weight: 500;">
          <div style="margin-bottom: 6px;">
            <span style="margin: 0 20px; display: inline-flex; align-items: center;">
              <span style="margin-right: 5px;">📞</span> +91 73380 41679
            </span>
            <span style="margin: 0 20px; display: inline-flex; align-items: center;">
              <span style="margin-right: 5px;">📞</span> +91 96770 18421
            </span>
            <span style="margin: 0 20px; display: inline-flex; align-items: center;">
              <span style="margin-right: 5px;">🌐</span> www.roririsoft.com
            </span>
          </div>
          <div>
            <span style="margin: 0 20px; display: inline-flex; align-items: center;">
              <span style="margin-right: 5px;">✉️</span> services@roririsoft.com
            </span>
            <span style="margin: 0 20px; display: inline-flex; align-items: center;">
              <span style="margin-right: 5px;">📍</span> RORIRI PARK, Kolakod, Tirunelveli - 627502
            </span>
          </div>
        </div>
      </div>
      
      <!-- Bottom border -->
      <div style="height: 3px; background: linear-gradient(90deg, #1e40af, #3b82f6, #1e40af); margin-top: 20px; border-radius: 2px;"></div>
    </div>
  `,

  // Email template styling
  emailStyles: `
    <style>
      .email-container {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        max-width: 650px;
        margin: 0 auto;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .email-header {
        background: linear-gradient(135deg, #1e40af, #3b82f6);
        color: white;
        padding: 25px;
        text-align: center;
        position: relative;
      }
      .email-header::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 80px;
        height: 60px;
        background: rgba(255,255,255,0.1);
        clip-path: polygon(0 0, 100% 0, 100% 100%);
      }
      .email-body {
        padding: 35px;
        line-height: 1.7;
        color: #374151;
      }
      .email-footer {
        background: linear-gradient(90deg, #f8fafc, #e2e8f0);
        padding: 25px;
        text-align: center;
        border-top: 1px solid #e5e7eb;
        font-size: 12px;
        color: #6b7280;
      }
      .logo-email {
        width: 35px;
        height: 35px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
        border-radius: 6px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        vertical-align: middle;
      }
    </style>
  `
};