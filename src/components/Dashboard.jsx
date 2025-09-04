@@ .. @@
 import React from 'react';
-import { FileText, Users, Calendar, Plus, Eye, Mail } from 'lucide-react';
+import { FileText, Users, Calendar, Plus, Eye, Mail, TrendingUp, Clock } from 'lucide-react';
 
 function Dashboard({ interns, letters, onViewLetter, onNavigate }) {
@@ .. @@
     totalLetters: letters.length,
     offerLetters: letters.filter(l => l.letterType === 'offer').length,
     completionLetters: letters.filter(l => l.letterType === 'completion').length,
+    emailsSent: letters.filter(l => l.emailSent).length,
   };

+  const recentLetters = letters.slice(-3).reverse();
   const recentInterns = interns.slice(-5).reverse();
 
@@ .. @@
         <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
           <div className="flex items-center justify-between">
             <div>
-              <p className="text-sm font-medium text-gray-600">Completion Letters</p>
-              <p className="text-2xl font-bold text-gray-900">{stats.completionLetters}</p>
+              <p className="text-sm font-medium text-gray-600">Emails Sent</p>
+              <p className="text-2xl font-bold text-gray-900">{stats.emailsSent}</p>
             </div>
-            <FileText className="h-8 w-8 text-orange-600" />
+            <Mail className="h-8 w-8 text-orange-600" />
           </div>
         </div>
       </div>

+      {/* Recent Activity */}
+      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
+        {/* Recent Letters */}
+        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
+          <div className="px-6 py-4 border-b border-gray-200">
+            <h3 className="text-lg font-semibold text-gray-900">Recent Letters</h3>
+          </div>
+          <div className="p-6">
+            {recentLetters.length === 0 ? (
+              <div className="text-center py-4">
+                <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
+                <p className="text-gray-500 text-sm">No letters generated yet</p>
+              </div>
+            ) : (
+              <div className="space-y-3">
+                {recentLetters.map((letter) => {
+                  const intern = interns.find(i => i.id === letter.internId);
+                  return (
+                    <div key={letter.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
+                      <div className="flex-1">
+                        <p className="font-medium text-gray-900 text-sm">{intern?.name}</p>
+                        <p className="text-xs text-gray-600">
+                          {letter.letterType === 'offer' ? 'Offer Letter' : 'Completion Certificate'}
+                          {letter.emailSent && ' • Email Sent'}
+                        </p>
+                      </div>
+                      <div className="text-xs text-gray-500">
+                        {new Date(letter.generatedAt).toLocaleDateString()}
+                      </div>
+                    </div>
+                  );
+                })}
+              </div>
+            )}
+          </div>
+        </div>

       {/* Recent Interns */}
-      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
+        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
         <div className="px-6 py-4 border-b border-gray-200">
@@ .. @@
           )}
         </div>
       </div>
+      </div>
     </div>
   );