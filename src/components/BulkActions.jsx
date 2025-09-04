import React, { useState } from 'react';
import { Download, Mail, FileText, Users, CheckSquare, Square } from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { pdfGenerator } from '../utils/pdfGenerator';
import { emailService } from '../utils/emailService';
import { letterTemplates } from '../utils/letterTemplates';
import NotificationToast from './NotificationToast';

function BulkActions({ interns, onRefresh }) {
  const [selectedInterns, setSelectedInterns] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
  };

  const toggleSelectAll = () => {
    if (selectedInterns.size === interns.length) {
      setSelectedInterns(new Set());
    } else {
      setSelectedInterns(new Set(interns.map(i => i.id)));
    }
  };

  const toggleSelectIntern = (internId) => {
    const newSelected = new Set(selectedInterns);
    if (newSelected.has(internId)) {
      newSelected.delete(internId);
    } else {
      newSelected.add(internId);
    }
    setSelectedInterns(newSelected);
  };

  const handleBulkDownload = async (letterType) => {
    if (selectedInterns.size === 0) {
      showNotification('warning', 'Please select at least one intern');
      return;
    }

    setIsProcessing(true);
    
    try {
      const selectedInternData = interns.filter(i => selectedInterns.has(i.id));
      let successCount = 0;

      for (const intern of selectedInternData) {
        try {
          const template = letterTemplates[letterType];
          const content = template
            .replace(/\{\{name\}\}/g, intern.name)
            .replace(/\{\{date\}\}/g, new Date(intern.date).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            }))
            .replace(/\{\{position\}\}/g, intern.position)
            .replace(/\{\{start_date\}\}/g, new Date(intern.startDate).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            }))
            .replace(/\{\{duration\}\}/g, intern.duration)
            .replace(/\{\{location\}\}/g, intern.location)
            .replace(/\{\{stipend\}\}/g, intern.stipend);

          const pdfResult = await pdfGenerator[letterType === 'offer' ? 'generateOfferLetter' : 'generateCompletionCertificate'](intern, content);
          
          if (pdfResult.success) {
            const letterData = {
              id: Date.now().toString() + Math.random(),
              internId: intern.id,
              letterType,
              content,
              generatedAt: new Date().toISOString(),
              emailSent: false,
            };

            storageUtils.saveLetter(letterData);
            successCount++;
          }
        } catch (error) {
          console.error(`Failed to generate letter for ${intern.name}:`, error);
        }
      }

      onRefresh();
      showNotification('success', `Successfully generated ${successCount} ${letterType} letters`);
      setSelectedInterns(new Set());
    } catch (error) {
      showNotification('error', 'Failed to generate letters');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleBulkEmail = async (letterType) => {
    if (selectedInterns.size === 0) {
      showNotification('warning', 'Please select at least one intern');
      return;
    }

    setIsProcessing(true);
    
    try {
      const selectedInternData = interns.filter(i => selectedInterns.has(i.id));
      let successCount = 0;

      for (const intern of selectedInternData) {
        try {
          const template = letterTemplates[letterType];
          const content = template
            .replace(/\{\{name\}\}/g, intern.name)
            .replace(/\{\{date\}\}/g, new Date(intern.date).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            }))
            .replace(/\{\{position\}\}/g, intern.position)
            .replace(/\{\{start_date\}\}/g, new Date(intern.startDate).toLocaleDateString('en-US', { 
              year: 'numeric', month: 'long', day: 'numeric' 
            }))
            .replace(/\{\{duration\}\}/g, intern.duration)
            .replace(/\{\{location\}\}/g, intern.location)
            .replace(/\{\{stipend\}\}/g, intern.stipend);

          const emailResult = await emailService[letterType === 'offer' ? 'sendOfferLetter' : 'sendCompletionCertificate'](intern, content);
          
          if (emailResult.success) {
            const letterData = {
              id: Date.now().toString() + Math.random(),
              internId: intern.id,
              letterType,
              content,
              generatedAt: new Date().toISOString(),
              emailSent: true,
              emailSentAt: emailResult.sentAt,
              messageId: emailResult.messageId,
            };

            storageUtils.saveLetter(letterData);
            successCount++;
          }
        } catch (error) {
          console.error(`Failed to send email to ${intern.name}:`, error);
        }
      }

      onRefresh();
      showNotification('success', `Successfully sent ${successCount} emails`);
      setSelectedInterns(new Set());
    } catch (error) {
      showNotification('error', 'Failed to send emails');
    } finally {
      setIsProcessing(false);
    }
  };

  if (interns.length === 0) return null;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSelectAll}
            className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            {selectedInterns.size === interns.length ? (
              <CheckSquare className="h-4 w-4" />
            ) : (
              <Square className="h-4 w-4" />
            )}
            <span>
              {selectedInterns.size === 0 
                ? 'Select All' 
                : `${selectedInterns.size} selected`
              }
            </span>
          </button>
        </div>

        {selectedInterns.size > 0 && (
          <div className="flex space-x-2">
            <button
              onClick={() => handleBulkDownload('offer')}
              disabled={isProcessing}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 transition-colors"
            >
              <Download className="h-3 w-3" />
              <span>Bulk Offer PDFs</span>
            </button>
            
            <button
              onClick={() => handleBulkDownload('completion')}
              disabled={isProcessing}
              className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 transition-colors"
            >
              <Download className="h-3 w-3" />
              <span>Bulk Completion PDFs</span>
            </button>

            <button
              onClick={() => handleBulkEmail('offer')}
              disabled={isProcessing}
              className="bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 text-white px-3 py-1 rounded text-sm flex items-center space-x-1 transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span>Email Offers</span>
            </button>
          </div>
        )}
      </div>

      <NotificationToast
        type={notification.type}
        message={notification.message}
        isVisible={notification.show}
        onClose={() => setNotification({ show: false, type: '', message: '' })}
      />
    </div>
  );
}

export default BulkActions;