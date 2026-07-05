import React, { useState } from 'react';

export default function SecuritySettings() {
  const [twoFA, setTwoFA] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-white tracking-wide">Account Security Settings</h2>
        <p className="text-sm text-slate-400 mt-1">Enhance protection for your administrative portal against unauthorized access.</p>
      </div>

      {/* Main Content */}
      <div className="space-y-6 pt-2">
        
        {/* 2FA Toggle */}
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-slate-200">Two-Factor Authentication (2FA)</h3>
            <p className="text-xs text-slate-400">Use an authenticator app (Google/Microsoft Auth) for every portal login.</p>
          </div>
          <button
            type="button"
            onClick={() => setTwoFA(!twoFA)}
            className={`w-11 h-6 shrink-0 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              twoFA ? 'bg-[#4F7CFF]' : 'bg-slate-700'
            }`}
          >
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${twoFA ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Login Session Card */}
        <div className="bg-[#070b19] border border-slate-800/60 rounded-xl p-4 space-y-1">
          <h4 className="text-xs font-semibold text-white tracking-wider uppercase">Login Session Information</h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Current active session: <span className="text-slate-200 font-medium">Chrome on macOS (Jakarta, ID)</span>. Session automatically expires within the next 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
}