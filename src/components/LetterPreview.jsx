@@ .. @@
 import React, { useState } from 'react';
-import { ArrowLeft, Download, Mail, Send, FileText } from 'lucide-react';
+import { ArrowLeft, Download, Mail, Send, FileText, CheckCircle } from 'lucide-react';
 import { letterTemplates } from '../utils/letterTemplates';
 import { storageUtils } from '../utils/storage';
+import { pdfGenerator } from '../utils/pdfGenerator';
+import { emailService } from '../utils/emailService';
+import EmailConfirmation from './EmailConfirmation';
+import NotificationToast from './NotificationToast';
 
 function LetterPreview({ intern, letterType, onBack, onLetterGenerated }) {
-  const [emailSent, setEmailSent] = useState(false);
   const [isGenerating, setIsGenerating] = useState(false);
+  const [showEmailModal, setShowEmailModal] = useState(false);
+  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
 
@@ .. @@
-  const handleDownload = async () => {
+  const showNotification = (type, message) => {
+    setNotification({ show: true, type, message });
+  };
+
+  const handleDownload = async () => {
     setIsGenerating(true);
     
-    // Simulate PDF generation
-    await new Promise(resolve => setTimeout(resolve, 1500));
-    
-    const letterData = {
-      id: Date.now().toString(),
-      internId: intern.id,
-      letterType,
-      content: generateLetterContent(),
-      generatedAt: new Date().toISOString(),
-      emailSent: false,
-    };
-
-    storageUtils.saveLetter(letterData);
-    onLetterGenerated();
-    
-    // Simulate download
-    alert(`${letterType === 'offer' ? 'Offer' : 'Completion'} letter downloaded as PDF!`);
-    setIsGenerating(false);
+    try {
+      const letterContent = generateLetterContent();
+      const pdfResult = await pdfGenerator[letterType === 'offer' ? 'generateOfferLetter' : 'generateCompletionCertificate'](intern, letterContent);
+      
+      if (pdfResult.success) {
+        const letterData = {
+          id: Date.now().toString(),
+          internId: intern.id,
+          letterType,
+          content: letterContent,
+          generatedAt: new Date().toISOString(),
+          emailSent: false,
+        };
+
+        storageUtils.saveLetter(letterData);
+        onLetterGenerated();
+        
+        // Create download link
+        const element = document.createElement('a');
+        element.href = pdfResult.downloadUrl;
+        element.download = pdfResult.filename;
+        document.body.appendChild(element);
+        element.click();
+        document.body.removeChild(element);
+        
+        showNotification('success', `${letterType === 'offer' ? 'Offer letter' : 'Completion certificate'} downloaded successfully!`);
+      }
+    } catch (error) {
+      showNotification('error', 'Failed to generate PDF. Please try again.');
+    } finally {
+      setIsGenerating(false);
+    }
   };

-  const handleSendEmail = async () => {
+  const handleSendEmail = async (customMessage = '') => {
     setIsGenerating(true);
+    setShowEmailModal(false);
     
-    // Simulate email sending
-    await new Promise(resolve => setTimeout(resolve, 2000));
-    
-    const letterData = {
-      id: Date.now().toString(),
-      internId: intern.id,
-      letterType,
-      content: generateLetterContent(),
-      generatedAt: new Date().toISOString(),
-      emailSent: true,
-    };
-
-    storageUtils.saveLetter(letterData);
-    onLetterGenerated();
-    
-    setEmailSent(true);
-    setIsGenerating(false);
-    
-    setTimeout(() => setEmailSent(false), 3000);
+    try {
+      const letterContent = generateLetterContent();
+      const emailResult = await emailService[letterType === 'offer' ? 'sendOfferLetter' : 'sendCompletionCertificate'](intern, letterContent, customMessage);
+      
+      if (emailResult.success) {
+        const letterData = {
+          id: Date.now().toString(),
+          internId: intern.id,
+          letterType,
+          content: letterContent,
+          generatedAt: new Date().toISOString(),
+          emailSent: true,
+          emailSentAt: emailResult.sentAt,
+          messageId: emailResult.messageId,
+        };
+
+        storageUtils.saveLetter(letterData);
+        onLetterGenerated();
+        
+        showNotification('success', `Email sent successfully to ${intern.email}!`);
+      }
+    } catch (error) {
+      showNotification('error', 'Failed to send email. Please try again.');
+    } finally {
+      setIsGenerating(false);
+    }
   };
 
@@ .. @@
           <button
-            onClick={handleSendEmail}
-            disabled={isGenerating || emailSent}
-            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
+            onClick={() => setShowEmailModal(true)}
+            disabled={isGenerating}
+            className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
           >
-            {emailSent ? (
-              <>
-                <Send className="h-4 w-4" />
-                <span>Email Sent!</span>
-              </>
-            ) : (
-              <>
-                <Mail className="h-4 w-4" />
-                <span>{isGenerating ? 'Sending...' : 'Send Email'}</span>
-              </>
-            )}
+            <Mail className="h-4 w-4" />
+            <span>Send Email</span>
           </button>
@@ .. @@
         </div>
       </div>
+
+      <EmailConfirmation
+        isOpen={showEmailModal}
+        onClose={() => setShowEmailModal(false)}
+        onConfirm={handleSendEmail}
+        internName={intern.name}
+        internEmail={intern.email}
+        letterType={letterType}
+        isLoading={isGenerating}
+      />
+
+      <NotificationToast
+        type={notification.type}
+        message={notification.message}
+        isVisible={notification.show}
+        onClose={() => setNotification({ show: false, type: '', message: '' })}
+      />
     </div>
   );