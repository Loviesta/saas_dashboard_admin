import React from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Target, Clock, Activity, Monitor, Smartphone, Tablet, TrendingUp } from 'lucide-react';

const Analytics = () => {
  // Data Persentase Asal Muasal Traffic
  const visitorChannels = [
    { label: 'Direct', value: 35, color: 'from-[#4F7CFF] to-[#3B66E0]' },
    { label: 'Organic Search', value: 40, color: 'from-[#7C5CFF] to-[#6344E6]' },
    { label: 'Referrals', value: 15, color: 'from-[#987cff] to-[#8063E6]' },
    { label: 'Social', value: 10, color: 'from-[#b6a1ff] to-[#9D87E6]' },
  ];

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* --- TOP STATS ROW (3 Kartu Utama dengan Efek Spotlight) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Conversion Rate (CVR)" value="3.42%" delta="+0.54% since last month" icon={Target} index={0} />
          <StatCard title="Average Duration" value="4m 32s" delta="+12s since last week" icon={Clock} index={1} />
          <StatCard title="Bounce Rate" value="42.15%" delta="-2.3% since last week" icon={Activity} index={2} />
        </div>

        {/* --- MAIN CONTENT (CHART & DEVICES) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* KIRI: Saluran Akuisisi Traffic (Menggunakan Spotlight Wrapper) */}
          <SpotlightCard className="lg:col-span-2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Traffic Acquisition Channels(Visitor Channels)</h2>
              <p className="text-sm text-slate-400 mt-1">Displaying the percentage contribution of the system's visitor traffic sources.</p>
            </div>
            
            <div className="relative w-full h-64 mt-8 flex items-end justify-around border-b border-slate-800/80 pb-2">
              <div className="absolute left-0 right-0 bottom-[10%] border-b border-dashed border-slate-800/40 pointer-events-none"></div>
              <div className="absolute left-0 right-0 bottom-[25%] border-b border-dashed border-slate-800/40 pointer-events-none"></div>
              <div className="absolute left-0 right-0 bottom-[50%] border-b border-dashed border-slate-800/40 pointer-events-none"></div>
              <div className="absolute left-0 right-0 bottom-[75%] border-b border-dashed border-slate-800/40 pointer-events-none"></div>

              {visitorChannels.map((channel, i) => (
                <div key={i} className="flex flex-col items-center justify-end h-full z-10 w-20 group">
                  <span className="text-xs font-bold text-slate-300 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {channel.value}%
                  </span>
                  
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: `${channel.value}%` }}
                    transition={{
                      duration: 1,
                      type: "spring",
                      stiffness: 60,
                      delay: i * 0.15,
                    }}
                    className={`w-12 rounded-t-xl bg-gradient-to-t ${channel.color} shadow-lg shadow-indigo-500/5`} 
                  />
                  
                  <span className="text-xs font-medium text-slate-400 mt-3 whitespace-nowrap">
                    {channel.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between px-4 pt-3 text-[11px] font-medium text-slate-500">
              <span>0%</span>
              <span>10%</span>
              <span>20%</span>
              <span>30%</span>
              <span>40%</span>
            </div>
          </SpotlightCard>

          {/* KANAN: Distribusi Perangkat & Informasi Mini */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            
            {/* Card Distribusi Perangkat */}
            <SpotlightCard className="p-6 flex-1 justify-center flex flex-col">
              <h2 className="text-lg font-semibold text-white">Device Distribution (Devices)</h2>
              <p className="text-sm text-slate-400 mt-1 mb-6">Analysis of the percentage of client platforms used by users.</p>
              
              <div className="space-y-5">
                <DeviceBar label="Desktop" value={68} icon={Monitor} color="from-[#4F7CFF] to-[#3B66E0]" index={0} />
                <DeviceBar label="Mobile" value={27} icon={Smartphone} color="from-[#7C5CFF] to-[#6344E6]" index={1} />
                <DeviceBar label="Tablet" value={5} icon={Tablet} color="from-slate-700 to-slate-800" index={2} />
              </div>
            </SpotlightCard>

            {/* Card Tren Informasi Mini */}
            <SpotlightCard glowColor="rgba(16, 185, 129, 0.15)" className="p-5">
              <div className="flex items-center gap-2 mb-2 text-emerald-400">
                <TrendingUp size={16} />
                <span className="text-xs font-bold tracking-wider uppercase">The Mobile Trend Is On The Rise</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Registration via the platform <span className="text-slate-200 font-semibold">Mobile</span> increased by <span className="text-emerald-400 font-semibold">8%</span> compared to last month. Optimizing for a  *mobile-friendly* display is highly recommended.
              </p>
            </SpotlightCard>
          </div>

        </div>

      </div>
    </div>
  );
};

// --- WRAPPER UTAMA: MENGHITUNG KOORDINAT KURSOR MOUSE UNTUK EFEK SPOTLIGHT GLOW ---
function SpotlightCard({ children, className = "", glowColor = "rgba(79, 124, 255, 0.18)" }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -4 }}
      className={`group relative overflow-hidden rounded-2xl border border-slate-900 bg-[#0b1126] cursor-pointer ${className}`}
    >

      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${glowColor},
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Konten Card */}
      <div className="relative z-10 h-full w-full">{children}</div>
    </motion.div>
  );
}

// --- SUB-KOMPONEN KARTU KECIL
function StatCard({ title, value, delta, icon: Icon, index }) {
  const isNegative = delta.startsWith('-');
  return (
    <SpotlightCard>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-slate-400">{title}</span>
          <div className="p-2 bg-slate-900/60 border border-slate-800/40 rounded-xl text-slate-300">
            <Icon size={18} />
          </div>
        </div>
        <div className="text-3xl font-bold tracking-tight text-white mb-1">{value}</div>
        <div className={`text-xs font-medium ${isNegative ? 'text-rose-400' : 'text-emerald-400'}`}>
          {delta}
        </div>
      </div>
    </SpotlightCard>
  );
}

// --- SUB-KOMPONEN PROGESS BAR PERANGKAT ---
function DeviceBar({ label, value, icon: Icon, color, index }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2.5 text-slate-300">
          <Icon size={16} className="text-slate-400" />
          <span className="font-medium">{label}</span>
        </div>
        <span className="font-bold text-white">{value}%</span>
      </div>
      <div className="w-full h-2.5 bg-slate-900 border border-slate-800/30 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{
            duration: 1,
            delay: index * 0.2,
          }}
          className={`h-full bg-gradient-to-r ${color} rounded-full`}
        />
      </div>
    </div>
  );
}

export default Analytics;