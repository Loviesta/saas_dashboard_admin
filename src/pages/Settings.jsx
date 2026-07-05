import React, { useState, useRef } from 'react';
import { User, Bell, Shield, CreditCard, Save, Upload, Camera } from 'lucide-react';

import NotificationSettings from '../components/NotificationSettings';
import SecuritySettings from '../components/SecuritySettings';
import PaymentSettings from '../components/PaymentSettings';

export default function Settings() {
  // State to track which tab is currently active
  const [activeTab, setActiveTab] = useState('profile');

  // State for personal profile data
  const [profileData, setProfileData] = useState({
    fullName: 'Budi Santoso',
    email: 'budi.santoso@saasflow.com'
  });

  // State to store the profile picture preview URL (default null)
  const [avatarPreview, setAvatarPreview] = useState(null);
  const fileInputRef = useRef(null);

  // Function handler when user selects a new photo file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  };

  // Function to trigger the click event on the hidden file input
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Profile Update Successful');
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 p-6 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 mt-4">
        
        {/* --- LEFT: SIDEBAR MENU SETTINGS --- */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          <button
            onClick={() => setActiveTab('profile')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition ${
              activeTab === 'profile'
                ? 'bg-[#181B3B] text-[#4F7CFF]'
                : 'text-slate-400 hover:bg-[#11172A]'
            }`}
          >
            <User size={18} className={activeTab === 'profile' ? 'text-[#7C5CFF]' : 'text-slate-400'} />
            User Profile
          </button>

          <button
            onClick={() => setActiveTab('notifications')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition ${
              activeTab === 'notifications'
                ? 'bg-[#181B3B] text-[#4F7CFF]'
                : 'text-slate-400 hover:bg-[#11172A]'
            }`}
          >
            <Bell size={18} className={activeTab === 'notifications' ? 'text-[#7C5CFF]' : 'text-slate-400'} />
            Notifications & Reports
          </button>

          <button
            onClick={() => setActiveTab('security')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition ${
              activeTab === 'security'
                ? 'bg-[#181B3B] text-[#4F7CFF]'
                : 'text-slate-400 hover:bg-[#11172A]'
            }`}
          >
            <Shield size={18} className={activeTab === 'security' ? 'text-[#7C5CFF]' : 'text-slate-400'} />
            Security Settings
          </button>

          <button
            onClick={() => setActiveTab('payments')}
            className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium text-sm transition ${
              activeTab === 'payments'
                ? 'bg-[#181B3B] text-[#4F7CFF]'
                : 'text-slate-400 hover:bg-[#11172A]'
            }`}
          >
            <CreditCard size={18} className={activeTab === 'payments' ? 'text-[#7C5CFF]' : 'text-slate-400'} />
            Plans & Billing
          </button>
        </div>

        {/* --- RIGHT: MAIN CONTENT AREA --- */}
        <div className="flex-1 bg-[#0b1126] border border-slate-900 rounded-2xl p-6 md:p-8 shadow-2xl">
          
          {/* RENDER TAB 1: USER PROFILE */}
          {activeTab === 'profile' && (
            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-white tracking-wide">Personal Profile Information</h2>
                <p className="text-sm text-slate-400 mt-1">Update your personal details, full name, and registered primary administrator email address.</p>
              </div>

              {/* Profile Picture Management Section */}
              <div className="flex items-center gap-5 pt-2">
                <div className="relative group">
      
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="w-20 h-20 rounded-full object-cover border border-slate-800"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400">
                      <User size={36} />
                    </div>
                  )}
                  
                  {/* Small Camera Overlay Button */}
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="absolute bottom-0 right-0 p-1.5 bg-[#7C5CFF] hover:bg-indigo-500 rounded-full text-white shadow-md transition"
                  >
                    <Camera size={14} />
                  </button>
                </div>

                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-md">
                    Admin Account
                  </span>
                  
                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                  />
                  
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition pt-1"
                  >
                    <Upload size={14} />
                    Upload New Photo
                  </button>
                  <p className="text-[11px] text-slate-500">JPG or PNG format, maximum 2MB. Avatar is synchronized with the primary authentication server.</p>
                </div>
              </div>

              {/* Input Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Full Name</label>
                  <input
                    type="text"
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#070b19] border border-slate-800/80 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-400 tracking-wide uppercase">Account Email</label>
                  <input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#070b19] border border-slate-800/80 rounded-xl text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>
              </div>

              {/* Form Bottom Area */}
              <div className="pt-6 border-t border-slate-900/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-xs text-slate-500">Storage is synchronized locally in memory.</p>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-medium text-sm rounded-xl transition shadow-lg shadow-indigo-500/10"
                >
                  <Save size={16} />
                  Save Changes
                </button>
              </div>
            </form>
          )}

          {/* RENDER TAB 2: NOTIFICATIONS & REPORTS (CALLING SEPARATE COMPONENT) */}
          {activeTab === 'notifications' && <NotificationSettings />}

          {/* RENDER TAB 3: SECURITY SETTINGS (CALLING SEPARATE COMPONENT) */}
          {activeTab === 'security' && <SecuritySettings />}

          {/* RENDER TAB 4: PLANS & BILLING (CALLING SEPARATE COMPONENT) */}
          {activeTab === 'payments' && <PaymentSettings />}

        </div>
      </div>
    </div>
  );
}