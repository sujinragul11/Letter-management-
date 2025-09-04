@@ .. @@
+import { companyConfig } from './companyConfig';
+
 export const letterTemplates = {
-  offer: `[COMPANY LETTERHEAD]
+  offer: \`${companyConfig.letterhead}
 
 Date: {{date}}
 
@@ .. @@
-[HR Manager Name]
-[Title]
-[Company Name]
-[Contact Information]
+${companyConfig.hrManager.name}
+${companyConfig.hrManager.title}
+${companyConfig.name}
+Email: ${companyConfig.hrManager.email}
+Phone: ${companyConfig.contact.phone}
 
 ---
-This letter serves as an official offer of internship. Please retain this document for your records.`,
+This letter serves as an official offer of internship. Please retain this document for your records.
+
+${companyConfig.name} | ${companyConfig.contact.website}`,
 
-  completion: `[COMPANY LETTERHEAD]
+  completion: \`${companyConfig.letterhead}
 
 Date: {{date}}
 
@@ .. @@
-[HR Manager Name]
-[Title]
-[Company Name]
-[Company Seal/Signature]
+${companyConfig.hrManager.name}
+${companyConfig.hrManager.title}
+${companyConfig.name}
+
+[Official Company Seal]
 
 ---
-This is an official completion certificate issued by [Company Name]. For verification, please contact our HR department.`
+This is an official completion certificate issued by ${companyConfig.name}. 
+For verification, please contact our HR department at ${companyConfig.contact.email}
+
+${companyConfig.name} | ${companyConfig.contact.website}`
 };