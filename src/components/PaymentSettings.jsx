import React from 'react';

export default function PaymentSettings() {
  
  const invoices = [
    { id: 'INV-2026-006', date: 'June 24, 2026', amount: '$49.00' },
    { id: 'INV-2026-005', date: 'May 24, 2026', amount: '$49.00' },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold text-white tracking-wide">Service Plan & Billing Details</h2>
        <p className="text-sm text-slate-400 mt-1">Manage your active SaaS plan and download monthly invoices.</p>
      </div>

      {/* --- ACTIVE PLAN CARD --- */}
      <div className="bg-gradient-to-br from-[#12182d] to-[#0d132a] border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-md">
        <div className="space-y-2">
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded-md">
            Active
          </span>
          <h3 className="text-xl font-bold text-white tracking-wide">SaaSFlow Pro Enterprise</h3>
          <p className="text-xs text-slate-400">Complete plan with 99.98% SLA uptime and up to 10TB integration data.</p>
          <p className="text-xs text-slate-500 pt-2">
            Next payment due on <span className="text-slate-300 font-medium">July 24, 2026</span> via Visa (**** 4242)
          </p>
        </div>

        {/* Right side: Price & Button */}
        <div className="flex flex-col items-start md:items-end justify-between gap-4 shrink-0">
          <div className="text-white">
            <span className="text-3xl font-extrabold tracking-tight">$49</span>
            <span className="text-xs font-medium text-slate-400">/month</span>
          </div>
          <button 
            type="button"
            className="px-4 py-2.5 bg-[#17153a] hover:bg-opacity-80 border border-purple-500/30 rounded-xl text-xs font-semibold text-purple-300 transition"
          >
            Upgrade Plan
          </button>
        </div>
      </div>

      {/* --- INVOICE TABLE --- */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-white tracking-wide">Invoice & Transaction History</h3>
        
        <div className="w-full overflow-hidden border border-slate-900/60 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#070b19] border-b border-slate-900 text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                <th className="px-4 py-3">Invoice ID</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3 text-right">Download</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-900 text-xs text-slate-300">
              {invoices.map((invoice, i) => (
                <tr key={i} className="hover:bg-slate-900/20 transition">
                  <td className="px-4 py-4 font-mono font-medium text-slate-200">{invoice.id}</td>
                  <td className="px-4 py-4 text-slate-400">{invoice.date}</td>
                  <td className="px-4 py-4 font-semibold text-white">{invoice.amount}</td>
                  <td className="px-4 py-4 text-right">
                    <button 
                      type="button" 
                      className="text-[#4F7CFF] hover:text-indigo-400 font-medium transition"
                    >
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}