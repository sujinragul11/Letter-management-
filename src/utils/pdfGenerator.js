@@ .. @@
+import { companyConfig } from './companyConfig';
+
 // PDF generation simulation
@@ .. @@
     const pdfData = {
-      filename: `offer-letter-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
+      filename: `${companyConfig.name.replace(/\s+/g, '-').toLowerCase()}-offer-letter-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
       content: letterContent,
       metadata: {
-        title: 'Internship Offer Letter',
-        author: 'HR Department',
+        title: `Internship Offer Letter - ${companyConfig.name}`,
+        author: `${companyConfig.hrManager.name}, ${companyConfig.hrManager.title}`,
         subject: `Offer Letter for ${internData.name}`,
-        creator: 'Internship Management System',
+        creator: `${companyConfig.name} - Internship Management System`,
         createdAt: new Date().toISOString()
@@ .. @@
     const pdfData = {
-      filename: `completion-certificate-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
+      filename: `${companyConfig.name.replace(/\s+/g, '-').toLowerCase()}-completion-certificate-${internData.name.replace(/\s+/g, '-').toLowerCase()}.pdf`,
       content: letterContent,
       metadata: {
-        title: 'Internship Completion Certificate',
-        author: 'HR Department',
+        title: `Internship Completion Certificate - ${companyConfig.name}`,
+        author: `${companyConfig.hrManager.name}, ${companyConfig.hrManager.title}`,
         subject: `Completion Certificate for ${internData.name}`,
-        creator: 'Internship Management System',
+        creator: `${companyConfig.name} - Internship Management System`,
         createdAt: new Date().toISOString()