import React, { useState } from 'react';
import { Calendar, Mail, Download, Eye, FileText, ExternalLink } from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { formatDate } from '../utils/dateHelpers';
import { pdfGenerator } from '../utils/pdfGenerator';

function LetterHistory({ internId }) {
  const [letters, setLetters] = useState(() => storageUtils.getLettersByIntern(internId));
  const [isDownloading, setIsDownloading] = useState(null);

  React.useEffect(() => {
    setLetters(storageUtils.getLettersByIntern(internId));
  }, [internId]);

  const handleDownload = async (letter) => {
    setIsDownloading(letter.id);
    
    try {
      const intern = storageUtils.getInterns().find(i => i.id === letter.internId);
      if (!intern) return;

      const pdfResult = await pdfGenerator[letter.letterType === 'offer' ? 'generateOfferLetter' : 'generateCompletionCertificate'](intern, letter.content);
      
      if (pdfResult.success) {
        const element = document.createElement('a');
        element.href = pdfResult.downloadUrl;
        element.download = pdfResult.filename;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
      }
    } catch (error) {
      console.error('Download failed:', error);
    } finally {
      setIsDownloading(null);
    }
  };

@@ .. @@
                    {letter.emailSent && (
                      <span className="flex items-center space-x-1 text-green-600">
                        <Mail className="h-3 w-3" />
                        <span>Sent: {formatDate(letter.emailSentAt, 'short')}</span>
                      </span>
                    )}
@@ .. @@
              <div className="flex space-x-2">
                <button
                  onClick={() => {
                    const newWindow = window.open('', '_blank');
                    newWindow.document.write(`
                      <html>
                        <head>
                          <title>${letter.letterType === 'offer' ? 'Offer Letter' : 'Completion Certificate'}</title>
                          <style>
                            body { font-family: Times, serif; line-height: 1.6; padding: 40px; max-width: 800px; margin: 0 auto; }
                            .letterhead { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #1e40af; padding-bottom: 20px; }
                          </style>
                        </head>
                        <body>${letter.content.replace(/\n/g, '<br>')}</body>
                      </html>
                    `);
                    newWindow.document.close();
                  }}
                  className="text-gray-600 hover:text-gray-900 p-1 transition-colors"
                  title="Preview Letter"
                >
                  <ExternalLink className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDownload(letter)}
                  disabled={isDownloading === letter.id}
                  className="text-gray-600 hover:text-gray-900 p-1 transition-colors disabled:opacity-50"
                  title="Download PDF"
                >
                  {isDownloading === letter.id ? (
                    <div className="animate-spin h-4 w-4 border-2 border-gray-600 border-t-transparent rounded-full"></div>
                  ) : (
                    <Download className="h-4 w-4" />
                  )}
                </button>
              </div>