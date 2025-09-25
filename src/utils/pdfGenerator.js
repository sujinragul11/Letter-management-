import { companyConfig } from './companyConfig';

// Enhanced PDF generation with proper styling
export const pdfGenerator = {
  generateOfferLetter: async (internData, letterContent) => {
    // Simulate PDF generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Enhanced PDF content with proper styling for print
    const styledContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Internship Offer Letter - ${internData.name}</title>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }
          
          body {
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
            background: white;
          }
          
          .letterhead {
            border-bottom: 3px solid #1e40af;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          
          .company-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
          }
          
          .logo-section {
            display: flex;
            align-items: center;
          }
          
          .logo {
            width: 35px;
            height: 35px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            color: white;
            font-weight: bold;
            font-size: 16px;
          }
          
          .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            margin: 0;
            letter-spacing: 0.5px;
          }
          
          .company-tagline {
            font-size: 10px;
            color: #666;
            margin: 0;
            font-weight: 500;
            letter-spacing: 0.3px;
          }
          
          .corner-design {
            width: 60px;
            height: 45px;
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
          }
          
          .contact-info {
            text-align: center;
            font-size: 9pt;
            color: #555;
            line-height: 1.3;
          }
          
          .date-section {
            text-align: right;
            margin: 20px 0;
            font-weight: bold;
          }
          
          .content {
            text-align: justify;
            margin: 20px 0;
          }
          
          .details-box {
            background: #f8fafc;
            padding: 15px;
            border-left: 4px solid #1e40af;
            margin: 20px 0;
          }
          
          .details-title {
            color: #1e40af;
            font-weight: bold;
            margin: 0 0 10px 0;
            font-size: 14pt;
          }
          
          .details-list {
            margin: 0;
            padding-left: 0;
            list-style: none;
          }
          
          .details-list li {
            margin: 6px 0;
            padding-left: 15px;
            position: relative;
          }
          
          .details-list li:before {
            content: "•";
            color: #1e40af;
            font-weight: bold;
            position: absolute;
            left: 0;
          }
          
          .terms-box {
            background: #fef3c7;
            padding: 15px;
            border-left: 4px solid #f59e0b;
            margin: 20px 0;
          }
          
          .terms-title {
            color: #92400e;
            font-weight: bold;
            margin: 0 0 10px 0;
            font-size: 14pt;
          }
          
          .signature-section {
            margin: 40px 0 20px 0;
          }
          
          .footer {
            border-top: 2px solid #e5e7eb;
            padding-top: 15px;
            margin-top: 30px;
            text-align: center;
            font-size: 10pt;
            color: #6b7280;
          }
          
          @media print {
            body { print-color-adjust: exact; }
            .letterhead { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        ${letterContent}
      </body>
      </html>
    `;
    
    const pdfData = {
      filename: `${companyConfig.name.replace(/\s+/g, '-').toLowerCase()}-offer-letter-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
      content: styledContent,
      metadata: {
        title: `Internship Offer Letter - ${companyConfig.name}`,
        author: `${companyConfig.ceo.name}, ${companyConfig.ceo.title}`,
        subject: `Offer Letter for ${internData.name}`,
        creator: `${companyConfig.name} - Internship Management System`,
        createdAt: new Date().toISOString(),
        keywords: 'internship, offer letter, roriri software solutions'
      },
      size: 'A4',
      orientation: 'portrait'
    };

    // In a real implementation, this would use a PDF library like Puppeteer, PDFKit, or jsPDF
    console.log('Offer Letter PDF generated:', pdfData);
    
    return {
      success: true,
      filename: pdfData.filename,
      size: calculateFileSize(styledContent),
      downloadUrl: `data:application/pdf;base64,${btoa(styledContent)}`,
      metadata: pdfData.metadata
    };
  },

  generateCompletionCertificate: async (internData, letterContent) => {
    // Simulate PDF generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Enhanced PDF content with certificate styling
    const styledContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Internship Completion Certificate - ${internData.name}</title>
        <style>
          @page {
            size: A4;
            margin: 20mm;
          }
          
          body {
            font-family: 'Times New Roman', serif;
            font-size: 12pt;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
            background: white;
          }
          
          .certificate-border {
            border: 3px solid #1e40af;
            padding: 20px;
            margin: 10px;
            min-height: calc(100vh - 80px);
            position: relative;
          }
          
          .letterhead {
            border-bottom: 3px solid #1e40af;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          
          .company-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 15px;
          }
          
          .logo-section {
            display: flex;
            align-items: center;
          }
          
          .logo {
            width: 35px;
            height: 35px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 12px;
            color: white;
            font-weight: bold;
            font-size: 16px;
          }
          
          .company-name {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a1a;
            margin: 0;
            letter-spacing: 0.5px;
          }
          
          .company-tagline {
            font-size: 10px;
            color: #666;
            margin: 0;
            font-weight: 500;
            letter-spacing: 0.3px;
          }
          
          .certificate-title {
            text-align: center;
            font-size: 20pt;
            font-weight: bold;
            color: #1e40af;
            margin: 30px 0;
            letter-spacing: 1px;
          }
          
          .content {
            text-align: justify;
            margin: 20px 0;
          }
          
          .details-box {
            background: #f0f9ff;
            padding: 15px;
            border-left: 4px solid #0ea5e9;
            margin: 20px 0;
          }
          
          .performance-box {
            background: #f0fdf4;
            padding: 15px;
            border-left: 4px solid #22c55e;
            margin: 20px 0;
          }
          
          .signature-area {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 40px 0;
          }
          
          .signature-left {
            flex: 1;
          }
          
          .seal-area {
            width: 80px;
            height: 80px;
            border: 2px solid #1e40af;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 9pt;
            text-align: center;
            color: #1e40af;
            margin-left: 20px;
          }
          
          .footer {
            border-top: 2px solid #e5e7eb;
            padding-top: 15px;
            margin-top: 30px;
            text-align: center;
            font-size: 10pt;
            color: #6b7280;
          }
          
          @media print {
            body { print-color-adjust: exact; }
            .certificate-border { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        <div class="certificate-border">
          ${letterContent}
        </div>
      </body>
      </html>
    `;
    
    const pdfData = {
      filename: `${companyConfig.name.replace(/\s+/g, '-').toLowerCase()}-completion-certificate-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
      content: styledContent,
      metadata: {
        title: `Internship Completion Certificate - ${companyConfig.name}`,
        author: `${companyConfig.ceo.name}, ${companyConfig.ceo.title}`,
        subject: `Completion Certificate for ${internData.name}`,
        creator: `${companyConfig.name} - Internship Management System`,
        createdAt: new Date().toISOString(),
        keywords: 'internship, completion certificate, roriri software solutions'
      },
      size: 'A4',
      orientation: 'portrait'
    };

    console.log('Completion Certificate PDF generated:', pdfData);
    
    return {
      success: true,
      filename: pdfData.filename,
      size: calculateFileSize(styledContent),
      downloadUrl: `data:application/pdf;base64,${btoa(styledContent)}`,
      metadata: pdfData.metadata
    };
  },

  // Batch PDF generation
  generateBatchPDFs: async (interns, letterType) => {
    const results = [];
    
    for (const intern of interns) {
      try {
        const result = await (letterType === 'offer' 
          ? pdfGenerator.generateOfferLetter(intern, '') 
          : pdfGenerator.generateCompletionCertificate(intern, ''));
        results.push({ intern: intern.name, success: true, filename: result.filename });
      } catch (error) {
        results.push({ intern: intern.name, success: false, error: error.message });
      }
    }
    
    return results;
  }
};

const calculateFileSize = (content) => {
  const bytes = new Blob([content]).size;
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};