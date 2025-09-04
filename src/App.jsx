@@ .. @@
 import React, { useState, useEffect } from 'react';
-import { FileText, Users, Plus, Home } from 'lucide-react';
+import { FileText, Users, Plus, Home, Settings } from 'lucide-react';
 import Dashboard from './components/Dashboard';
@@ .. @@
 import InternsList from './components/InternsList';
 import { storageUtils } from './utils/storage';
+import SettingsPanel from './components/SettingsPanel';
 
@@ .. @@
   const [letters, setLetters] = useState([]);
+  const [showSettings, setShowSettings] = useState(false);
 
@@ .. @@
             <div className="text-sm text-gray-600">
-              HR Management System
+              <button
+                onClick={() => setShowSettings(true)}
+                className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
+              >
+                <Settings className="h-4 w-4" />
+                <span>Settings</span>
+              </button>
             </div>
@@ .. @@
             />
           )}
         </main>
+
+        {showSettings && (
+          <SettingsPanel onClose={() => setShowSettings(false)} />
+        )}
       </div>