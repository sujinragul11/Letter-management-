import { companyConfig } from './companyConfig';

// Enhanced PDF generation with proper styling matching the letterhead design
export const pdfGenerator = {
  generateOfferLetter: async (internData, letterContent) => {
    // Simulate PDF generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Enhanced PDF content with proper styling for print that matches the letterhead
    const styledContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Internship Offer Letter - ${internData.name}</title>
        <style>
          @page {
            size: A4;
            margin: 15mm;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            font-size: 11pt;
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
            position: relative;
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
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          }
          
          .company-name {
            font-size: 28px;
            font-weight: bold;
            color: #1a1a1a;
            margin: 0;
            letter-spacing: 1px;
          }
          
          .company-tagline {
            font-size: 9px;
            color: #666;
            margin: 0;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
          }
          
          .corner-design {
            width: 80px;
            height: 60px;
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
            position: relative;
          }
          
          .corner-design::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 8px;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
          }
          
          .contact-info {
            background: linear-gradient(90deg, #f8fafc, #e2e8f0);
            padding: 10px 0;
            text-align: center;
            border-radius: 6px;
            margin: 15px 0;
          }
          
          .contact-row {
            font-size: 9pt;
            color: #374151;
            font-weight: 500;
            margin: 4px 0;
          }
          
          .contact-item {
            margin: 0 15px;
            display: inline-block;
          }
          
          .date-section {
            text-align: right;
            margin: 25px 0;
            font-weight: 600;
            color: #374151;
          }
          
          .content {
            text-align: justify;
            margin: 20px 0;
            line-height: 1.7;
          }
          
          .details-box {
            background: linear-gradient(135deg, #f8fafc, #e2e8f0);
            padding: 20px;
            border-left: 5px solid #1e40af;
            margin: 25px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          
          .details-title {
            color: #1e40af;
            font-weight: bold;
            margin: 0 0 15px 0;
            font-size: 13pt;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          
          .detail-item {
            background: white;
            padding: 12px;
            border-radius: 6px;
            border-left: 3px solid #3b82f6;
          }
          
          .detail-label {
            color: #1e40af;
            font-weight: bold;
            font-size: 10pt;
            margin-bottom: 4px;
          }
          
          .detail-value {
            color: #374151;
            font-size: 10pt;
          }
          
          .terms-box {
            background: linear-gradient(135deg, #fef3c7, #fde68a);
            padding: 20px;
            border-left: 5px solid #f59e0b;
            margin: 25px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          
          .terms-title {
            color: #92400e;
            font-weight: bold;
            margin: 0 0 15px 0;
            font-size: 13pt;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .terms-list {
            margin: 0;
            padding-left: 20px;
            color: #78350f;
            line-height: 1.7;
          }
          
          .terms-list li {
            margin: 8px 0;
          }
          
          .important-note {
            background: #e0f2fe;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #0288d1;
            margin: 20px 0;
          }
          
          .signature-section {
            margin: 50px 0 30px 0;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          
          .signature-left {
            flex: 1;
          }
          
          .signature-name {
            font-weight: bold;
            font-size: 14pt;
            color: #1e40af;
            margin: 5px 0;
          }
          
          .signature-title {
            color: #666;
            font-style: italic;
            margin: 5px 0;
          }
          
          .signature-company {
            color: #666;
            font-weight: 600;
            margin: 5px 0;
          }
          
          .signature-contact {
            color: #1e40af;
            font-size: 12pt;
            margin: 5px 0;
          }
          
          .seal-area {
            width: 80px;
            height: 80px;
            border: 3px solid #1e40af;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 9pt;
            text-align: center;
            color: #1e40af;
            font-weight: bold;
            background: linear-gradient(45deg, #f8fafc, #e2e8f0);
            margin-left: 20px;
          }
          
          .footer {
            border-top: 3px solid #1e40af;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
            font-size: 10pt;
            color: #6b7280;
            background: linear-gradient(90deg, #f8fafc, #e2e8f0);
            border-radius: 8px;
          }
          
          .footer-main {
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .footer-contact {
            margin: 5px 0;
          }
          
          @media print {
            body { 
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
            .letterhead { page-break-inside: avoid; }
            .details-box { page-break-inside: avoid; }
            .terms-box { page-break-inside: avoid; }
          }
        </style>
      </head>
      <body>
        ${letterContent}
      </body>
      </html>
    `;
    
    const pdfData = {
      filename: `roriri-offer-letter-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
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
    console.log('✅ Offer Letter PDF generated:', pdfData.filename);
    
    // Simulate PDF download
    const blob = new Blob([styledContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = pdfData.filename.replace('.pdf', '.html'); // For demo, download as HTML
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`✅ PDF generated successfully!\n\nFilename: ${pdfData.filename}\n\nNote: In production, this would generate a proper PDF file with the exact letterhead design.`);
    
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
    
    // Enhanced PDF content with certificate styling matching the letterhead
    const styledContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Internship Completion Certificate - ${internData.name}</title>
        <style>
          @page {
            size: A4;
            margin: 15mm;
          }
          
          body {
            font-family: 'Arial', sans-serif;
            font-size: 11pt;
            line-height: 1.6;
            color: #000;
            margin: 0;
            padding: 0;
            background: white;
          }
          
          .certificate-border {
            border: 4px solid #1e40af;
            padding: 20px;
            margin: 5px;
            min-height: calc(100vh - 60px);
            position: relative;
            border-radius: 12px;
          }
          
          .letterhead {
            border-bottom: 3px solid #1e40af;
            padding-bottom: 20px;
            margin-bottom: 30px;
            position: relative;
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
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: white;
            font-weight: bold;
            font-size: 18px;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
          }
          
          .company-name {
            font-size: 28px;
            font-weight: bold;
            color: #1a1a1a;
            margin: 0;
            letter-spacing: 1px;
          }
          
          .company-tagline {
            font-size: 9px;
            color: #666;
            margin: 0;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
          }
          
          .corner-design {
            width: 80px;
            height: 60px;
            background: linear-gradient(135deg, #1e40af, #3b82f6);
            clip-path: polygon(0 0, 100% 0, 100% 100%);
            position: relative;
          }
          
          .corner-design::after {
            content: '';
            position: absolute;
            top: 8px;
            right: 8px;
            width: 6px;
            height: 6px;
            background: white;
            border-radius: 50%;
            opacity: 0.8;
          }
          
          .contact-info {
            background: linear-gradient(90deg, #f8fafc, #e2e8f0);
            padding: 10px 0;
            text-align: center;
            border-radius: 6px;
            margin: 15px 0;
          }
          
          .contact-row {
            font-size: 9pt;
            color: #374151;
            font-weight: 500;
            margin: 4px 0;
          }
          
          .contact-item {
            margin: 0 15px;
            display: inline-block;
          }
          
          .certificate-title {
            text-align: center;
            padding: 20px;
            background: linear-gradient(135deg, #e0f2fe, #b3e5fc);
            border-radius: 12px;
            border: 2px solid #0288d1;
            margin: 30px 0;
          }
          
          .certificate-title h2 {
            color: #1e40af;
            font-size: 24pt;
            margin: 0;
            font-weight: bold;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          }
          
          .title-underline {
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #1e40af, #3b82f6);
            margin: 10px auto;
            border-radius: 2px;
          }
          
          .content {
            text-align: justify;
            margin: 20px 0;
            line-height: 1.8;
          }
          
          .details-box {
            background: linear-gradient(135deg, #f0f9ff, #dbeafe);
            padding: 25px;
            border-left: 5px solid #0ea5e9;
            margin: 25px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          
          .performance-box {
            background: linear-gradient(135deg, #f0fdf4, #dcfce7);
            padding: 25px;
            border-left: 5px solid #22c55e;
            margin: 25px 0;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }
          
          .box-title {
            font-weight: bold;
            margin: 0 0 18px 0;
            font-size: 13pt;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          
          .details-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
          }
          
          .detail-item {
            background: white;
            padding: 12px;
            border-radius: 6px;
            border-left: 3px solid #0ea5e9;
          }
          
          .detail-label {
            font-weight: bold;
            font-size: 10pt;
            margin-bottom: 4px;
          }
          
          .detail-value {
            color: #374151;
            font-size: 10pt;
          }
          
          .signature-area {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin: 50px 0 30px 0;
          }
          
          .signature-left {
            flex: 1;
          }
          
          .signature-name {
            font-weight: bold;
            font-size: 14pt;
            color: #1e40af;
            margin: 5px 0;
          }
          
          .signature-title {
            color: #666;
            font-style: italic;
            margin: 5px 0;
          }
          
          .signature-company {
            color: #666;
            font-weight: 600;
            margin: 5px 0;
          }
          
          .signature-contact {
            color: #1e40af;
            font-size: 12pt;
            margin: 5px 0;
          }
          
          .seal-area {
            width: 90px;
            height: 90px;
            border: 3px solid #1e40af;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 9pt;
            text-align: center;
            color: #1e40af;
            font-weight: bold;
            background: linear-gradient(45deg, #f8fafc, #e2e8f0);
            margin-left: 20px;
            position: relative;
          }
          
          .seal-checkmark {
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background: #22c55e;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 12px;
            font-weight: bold;
          }
          
          .footer {
            border-top: 3px solid #1e40af;
            padding: 20px;
            margin-top: 40px;
            text-align: center;
            font-size: 10pt;
            color: #6b7280;
            background: linear-gradient(90deg, #f8fafc, #e2e8f0);
            border-radius: 8px;
          }
          
          .footer-main {
            font-weight: 600;
            margin-bottom: 8px;
          }
          
          .footer-contact {
            margin: 5px 0;
          }
          
          @media print {
            body { 
              print-color-adjust: exact;
              -webkit-print-color-adjust: exact;
            }
            .certificate-border { page-break-inside: avoid; }
            .details-box { page-break-inside: avoid; }
            .performance-box { page-break-inside: avoid; }
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
      filename: `roriri-completion-certificate-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
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

    console.log('✅ Completion Certificate PDF generated:', pdfData.filename);
    
    // Simulate PDF download
    const blob = new Blob([styledContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = pdfData.filename.replace('.pdf', '.html'); // For demo, download as HTML
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`✅ PDF generated successfully!\n\nFilename: ${pdfData.filename}\n\nNote: In production, this would generate a proper PDF file with the exact letterhead design and certificate border.`);
    
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