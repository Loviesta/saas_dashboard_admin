import React, { useState } from 'react';

export default function NotificationSettings() {

  const [emailAlert, setEmailAlert] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(false);
  const [pushNotif, setPushNotif] = useState(true);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-white tracking-wide">Notifications & Periodic Reports</h2>
        <p className="text-sm text-slate-400 mt-1">Manage how you receive system status updates and weekly analytical reports.</p>
      </div>

      {/* Feature Toggle List */}
      <div className="space-y-5 pt-2">
        
        {/* Item 1 */}
        <div className="flex items-center justify-between gap-6 pb-2">
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-slate-200">New Registration Email Alerts</h3>
            <p className="text-xs text-slate-400">Send an instant email notification when a new user registers.</p>
          </div>
          <button
            type="button"
            onClick={() => setEmailAlert(!emailAlert)}
            className={`w-11 h-6 shrink-0 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              emailAlert ? 'bg-[#4F7CFF]' : 'bg-slate-700'
            }`}
          >
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${emailAlert ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Item 2 */}
        <div className="flex items-center justify-between gap-6 pb-2">
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-slate-200">Weekly Summary Reports</h3>
            <p className="text-xs text-slate-400">Send a weekly summary covering MRR growth and registration ratios.</p>
          </div>
          <button
            type="button"
            onClick={() => setWeeklyReport(!weeklyReport)}
            className={`w-11 h-6 shrink-0 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              weeklyReport ? 'bg-[#4F7CFF]' : 'bg-slate-700'
            }`}
          >
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${weeklyReport ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

        {/* Item 3 */}
        <div className="flex items-center justify-between gap-6 pb-2">
          <div className="space-y-0.5">
            <h3 className="text-sm font-semibold text-slate-200">Browser Push Notifications</h3>
            <p className="text-xs text-slate-400">Display browser toast alerts when server failure anomalies are detected.</p>
          </div>
          <button
            type="button"
            onClick={() => setPushNotif(!pushNotif)}
            className={`w-11 h-6 shrink-0 flex items-center rounded-full p-0.5 transition-colors duration-200 focus:outline-none ${
              pushNotif ? 'bg-[#4F7CFF]' : 'bg-slate-700'
            }`}
          >
            <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${pushNotif ? 'translate-x-5' : 'translate-x-0'}`} />
          </button>
        </div>

      </div>
    </div>
  );
}