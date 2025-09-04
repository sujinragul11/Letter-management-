@@ .. @@
 import React, { useState } from 'react';
-import { Eye, Trash2, Edit, Mail, FileText } from 'lucide-react';
+import { Eye, Trash2, Edit, Mail, FileText, Search, Filter } from 'lucide-react';
 import { storageUtils } from '../utils/storage';
+import SearchAndFilter from './SearchAndFilter';
import BulkActions from './BulkActions';
 
 function InternsList({ interns, onRefresh, onViewLetter }) {
-  const [selectedIntern, setSelectedIntern] = useState(null);
+  const [searchTerm, setSearchTerm] = useState('');
+  const [activeFilters, setActiveFilters] = useState({});
+  const [filteredInterns, setFilteredInterns] = useState(interns);
+
+  React.useEffect(() => {
+    let filtered = interns;
+
+    // Apply search filter
+    if (searchTerm) {
+      filtered = filtered.filter(intern =>
+        intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
+        intern.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
+        intern.position.toLowerCase().includes(searchTerm.toLowerCase())
+      );
+    }
+
+    // Apply position filters
+    if (activeFilters.positions?.length > 0) {
+      filtered = filtered.filter(intern =>
+        activeFilters.positions.some(pos => 
+          intern.position.toLowerCase().includes(pos.toLowerCase())
+        )
+      );
+    }
+
+    // Apply duration filters
+    if (activeFilters.durations?.length > 0) {
+      filtered = filtered.filter(intern =>
+        activeFilters.durations.includes(intern.duration)
+      );
+    }
+
+    setFilteredInterns(filtered);
+  }, [interns, searchTerm, activeFilters]);
 
@@ .. @@
       <div className="flex justify-between items-center">
         <div>
           <h2 className="text-2xl font-bold text-gray-900">Manage Interns</h2>
           <p className="text-gray-600 mt-1">
-            View, edit, and manage intern records and letters
+            View, edit, and manage intern records and letters ({filteredInterns.length} of {interns.length} shown)
           </p>
         </div>
       </div>

      <BulkActions 
        interns={filteredInterns}
        onRefresh={onRefresh}
      />

-      {interns.length === 0 ? (
+      <SearchAndFilter
+        onSearch={setSearchTerm}
+        onFilter={setActiveFilters}
+        searchTerm={searchTerm}
+        activeFilters={activeFilters}
+      />
+
+      {interns.length === 0 ? (
         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
@@ .. @@
           <p className="text-gray-600">Start by adding your first intern to begin generating letters.</p>
         </div>
+      ) : filteredInterns.length === 0 ? (
+        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
+          <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
+          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results Found</h3>
+          <p className="text-gray-600">Try adjusting your search terms or filters.</p>
+        </div>
       ) : (
@@ .. @@
               <tbody className="bg-white divide-y divide-gray-200">
-                {interns.map((intern) => (
+                {filteredInterns.map((intern) => {
+                  const internLetters = storageUtils.getLettersByIntern(intern.id);
+                  const hasOfferLetter = internLetters.some(l => l.letterType === 'offer');
+                  const hasCompletionLetter = internLetters.some(l => l.letterType === 'completion');
+                  
+                  return (
                   <tr key={intern.id} className="hover:bg-gray-50 transition-colors">
@@ .. @@
                     <td className="px-6 py-4 whitespace-nowrap">
                       <div>
                         <div className="text-sm text-gray-900">{intern.position}</div>
-                        <div className="text-sm text-gray-500">{intern.duration}</div>
+                        <div className="text-sm text-gray-500">
+                          {intern.duration}
+                          {hasOfferLetter && <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">Offer</span>}
+                          {hasCompletionLetter && <span className="ml-1 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">Complete</span>}
+                        </div>
                       </div>
@@ .. @@
                       <div className="flex space-x-2">
                         <button
                           onClick={() => onViewLetter(intern, 'offer')}
-                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs flex items-center space-x-1 transition-colors"
+                          className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-colors ${
+                            hasOfferLetter 
+                              ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
+                              : 'bg-blue-600 hover:bg-blue-700 text-white'
+                          }`}
                           title="View Offer Letter"
@@ .. @@
                         <button
                           onClick={() => onViewLetter(intern, 'completion')}
-                          className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs flex items-center space-x-1 transition-colors"
+                          className={`px-3 py-1 rounded text-xs flex items-center space-x-1 transition-colors ${
+                            hasCompletionLetter 
+                              ? 'bg-green-100 text-green-700 hover:bg-green-200' 
+                              : 'bg-green-600 hover:bg-green-700 text-white'
+                          }`}
                           title="View Completion Letter"
@@ .. @@
                     </td>
                   </tr>
-                ))}
+                  );
+                })}
               </tbody>