import React, { useState } from 'react';
import { Mail, Send, X, CheckCircle } from 'lucide-react';

function EmailConfirmation({ 
  isOpen, 
  onClose, 
  onConfirm, 
  internName, 
  internEmail, 
  letterType,
  isLoading 
}) {
  const [customMessage, setCustomMessage] = useState('');

  if (!isOpen) return null;

  const handleSend = () => {
    onConfirm(customMessage);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <Mail className="h-6 w-6 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">Send Email</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <CheckCircle className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-blue-900">Email Details</span>
            </div>
            <div className="text-sm text-blue-800 space-y-1">
              <p><strong>To:</strong> {internEmail}</p>
              <p><strong>Subject:</strong> Your Internship {letterType === 'offer' ? 'Offer Letter' : 'Completion Certificate'}</p>
              <p><strong>Attachment:</strong> {letterType === 'offer' ? 'Offer Letter' : 'Completion Certificate'} PDF</p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Message (Optional)
            </label>
            <textarea
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Add a personal message to include in the email..."
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 p-6 border-t border-gray-200">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
          >
            <Send className="h-4 w-4" />
            <span>{isLoading ? 'Sending...' : 'Send Email'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmation;