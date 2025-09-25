import React, { useState } from 'react';
import { Save, ArrowLeft } from 'lucide-react';
import { storageUtils } from '../utils/storage';
import { companyConfig } from '../utils/companyConfig';

function InternForm({ onSave, intern = null }) {
  const [formData, setFormData] = useState({
    name: intern?.name || '',
    email: intern?.email || '',
    position: intern?.position || '',
    startDate: intern?.startDate || '',
    duration: intern?.duration || '',
    location: intern?.location || companyConfig.address, // Default to company address
    stipend: intern?.stipend || '',
    date: intern?.date || new Date().toISOString().split('T')[0],
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.duration.trim()) newErrors.duration = 'Duration is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.stipend.trim()) newErrors.stipend = 'Stipend information is required';
    if (!formData.date) newErrors.date = 'Date is required';

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Validate name contains only letters and spaces
    if (formData.name && !/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should contain only letters and spaces';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const internData = {
        id: intern?.id || Date.now().toString(),
        ...formData,
        createdAt: intern?.createdAt || new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      storageUtils.saveIntern(internData);
      
      // Simulate async operation
      await new Promise(resolve => setTimeout(resolve, 500));
      
      alert(`✅ Intern details saved successfully!\n\nName: ${internData.name}\nPosition: ${internData.position}\nEmail: ${internData.email}\n\nYou can now generate offer letters and completion certificates.`);
      
      onSave();
    } catch (error) {
      console.error('Error saving intern:', error);
      alert('❌ Failed to save intern details. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const resetToCompanyAddress = () => {
    setFormData(prev => ({ ...prev, location: companyConfig.address }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-semibold text-gray-900">
            {intern ? 'Edit Intern Details' : 'Add New Intern'}
          </h2>
          <p className="text-gray-600 mt-1">
            Enter the intern's information to generate professional letters
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="Enter intern's full name"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
                placeholder="intern@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position *
              </label>
              <select
                value={formData.position}
                onChange={(e) => handleChange('position', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.position ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              >
                <option value="">Select Position</option>
                <option value="Software Development Intern">Software Development Intern</option>
                <option value="Full Stack Developer Intern">Full Stack Developer Intern</option>
                <option value="Frontend Developer Intern">Frontend Developer Intern</option>
                <option value="Backend Developer Intern">Backend Developer Intern</option>
                <option value="Mobile App Developer Intern">Mobile App Developer Intern</option>
                <option value="UI/UX Designer Intern">UI/UX Designer Intern</option>
                <option value="Digital Marketing Intern">Digital Marketing Intern</option>
                <option value="Data Science Intern">Data Science Intern</option>
                <option value="DevOps Intern">DevOps Intern</option>
                <option value="Quality Assurance Intern">Quality Assurance Intern</option>
                <option value="Business Analyst Intern">Business Analyst Intern</option>
                <option value="HR Intern">HR Intern</option>
              </select>
              {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date *
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => handleChange('startDate', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.startDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.startDate && <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration *
              </label>
              <select
                value={formData.duration}
                onChange={(e) => handleChange('duration', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.duration ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              >
                <option value="">Select Duration</option>
                <option value="1 Week">1 Week</option>
                <option value="2 Weeks">2 Weeks</option>
                <option value="3 Weeks">3 Weeks</option>
                <option value="1 Month">1 Month</option>
                <option value="2 Months">2 Months</option>
                <option value="3 Months">3 Months</option>
                <option value="4 Months">4 Months</option>
                <option value="5 Months">5 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
              </select>
              {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Letter Date *
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Office Location *
              </label>
              <button
                type="button"
                onClick={resetToCompanyAddress}
                className="text-xs text-blue-600 hover:text-blue-800 underline"
              >
                Use Company Address
              </button>
            </div>
            <textarea
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              rows="3"
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.location ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
              placeholder="Enter complete office address"
            />
            {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
            <p className="text-xs text-gray-500 mt-1">
              Default: {companyConfig.address}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stipend Information *
            </label>
            <select
              value={formData.stipend}
              onChange={(e) => handleChange('stipend', e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.stipend ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Select Stipend</option>
              <option value="Unpaid">Unpaid</option>
              <option value="₹5,000 per month">₹5,000 per month</option>
              <option value="₹8,000 per month">₹8,000 per month</option>
              <option value="₹10,000 per month">₹10,000 per month</option>
              <option value="₹12,000 per month">₹12,000 per month</option>
              <option value="₹15,000 per month">₹15,000 per month</option>
              <option value="₹20,000 per month">₹20,000 per month</option>
              <option value="Performance-based stipend">Performance-based stipend</option>
              <option value="Certificate only">Certificate only</option>
            </select>
            {errors.stipend && <p className="text-red-500 text-xs mt-1">{errors.stipend}</p>}
          </div>

          <div className="flex justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Save className="h-4 w-4" />
              <span>{isSubmitting ? 'Saving...' : 'Save Intern Details'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InternForm;