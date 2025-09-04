import React, { useState } from 'react';
import { Settings, Save, Download, Upload, Trash2, Building } from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { companyConfig } from '../utils/companyConfig';

function SettingsPanel({ onClose }) {
  const [activeTab, setActiveTab] = useState('company');
  const [companyData, setCompanyData] = useState(companyConfig);
  const [isExporting, setIsExporting] = useState(false);

  const handleExportData = () => {
    setIsExporting(true);
    
    try {
      const data = storageUtils.exportData();
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const element = document.createElement('a');
      element.href = url;
      element.download = `internship-data-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to export data');
    } finally {
      setIsExporting(false);
    }
  };

  const handleImportData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        storageUtils.importData(data);
        alert('Data imported successfully!');
        window.location.reload();
      } catch (error) {
        alert('Failed to import data. Please check the file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      storageUtils.clearAllData();
      alert('All data cleared successfully!');
      window.location.reload();
    }
  };

  const tabs = [
    { id: 'company', name: 'Company Info', icon: Building },
    { id: 'data', name: 'Data Management', icon: Settings },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <Settings className="h-5 w-5" />
          </button>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-48 bg-gray-50 border-r border-gray-200">
            <nav className="p-4 space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{tab.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {activeTab === 'company' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h3>
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-blue-800">
                      This information will be used in all generated letters and certificates.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={companyData.name}
                      onChange={(e) => setCompanyData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      type="text"
                      value={companyData.contact.website}
                      onChange={(e) => setCompanyData(prev => ({ 
                        ...prev, 
                        contact: { ...prev.contact, website: e.target.value }
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Address
                  </label>
                  <textarea
                    value={companyData.address}
                    onChange={(e) => setCompanyData(prev => ({ ...prev, address: e.target.value }))}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HR Manager Name
                    </label>
                    <input
                      type="text"
                      value={companyData.hrManager.name}
                      onChange={(e) => setCompanyData(prev => ({ 
                        ...prev, 
                        hrManager: { ...prev.hrManager, name: e.target.value }
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      HR Manager Title
                    </label>
                    <input
                      type="text"
                      value={companyData.hrManager.title}
                      onChange={(e) => setCompanyData(prev => ({ 
                        ...prev, 
                        hrManager: { ...prev.hrManager, title: e.target.value }
                      }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => alert('Company settings saved! (In a real app, this would update the config)')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                  >
                    <Save className="h-4 w-4" />
                    <span>Save Changes</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Data Management</h3>
                  <p className="text-gray-600 mb-6">
                    Export your data for backup or import data from a previous backup.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Export Data</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Download all intern records and letter history as a JSON file.
                    </p>
                    <button
                      onClick={handleExportData}
                      disabled={isExporting}
                      className="bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      <span>{isExporting ? 'Exporting...' : 'Export Data'}</span>
                    </button>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Import Data</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Upload a previously exported JSON file to restore data.
                    </p>
                    <input
                      type="file"
                      accept=".json"
                      onChange={handleImportData}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>

                  <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <h4 className="font-medium text-red-900 mb-2">Clear All Data</h4>
                    <p className="text-sm text-red-700 mb-3">
                      Permanently delete all intern records and letter history. This action cannot be undone.
                    </p>
                    <button
                      onClick={handleClearData}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Clear All Data</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;