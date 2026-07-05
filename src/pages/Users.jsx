import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Filter, UserPlus, Pencil, Trash2, Mail, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. Data Mock (20 Users)
const mockUsers = [
  { id: 'USR-001', name: 'Budi Santoso', email: 'budi.santoso@saasflow.com', role: 'ADMIN', roleColor: 'text-red-400 bg-red-500/10 border-red-500/20', joinDate: '2025-01-15', usage: 124.5, maxUsage: 200, status: 'Active', avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=4F7CFF&color=fff" },
  { id: 'USR-002', name: 'Siti Rahma', email: 'siti.rahma@gmail.com', role: 'MANAGER', roleColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20', joinDate: '2025-01-20', usage: 98.2, maxUsage: 200, status: 'Active', avatar: "https://ui-avatars.com/api/?name=Siti+Rahma&background=4F7CFF&color=fff"},
  { id: 'USR-003', name: 'Adi Wijaya', email: 'adi.wijaya@outlook.com', role: 'MEMBER', roleColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20', joinDate: '2025-02-02', usage: 14.2, maxUsage: 200, status: 'Inactive', avatar: "https://ui-avatars.com/api/?name=Adi+Wijaya&background=4F7CFF&color=fff"},
  { id: 'USR-004', name: 'Dewi Lestari', email: 'dewi.lestari@techcorp.id', role: 'BILLING', roleColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20', joinDate: '2025-02-10', usage: 45.0, maxUsage: 200, status: 'Active', avatar: "https://ui-avatars.com/api/?name=Dewi+Lestari&background=4F7CFF&color=fff" },
  { id: 'USR-005', name: 'Rian Hidayat', email: 'rian.h@saasflow.com', role: 'MEMBER', roleColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20', joinDate: '2025-02-15', usage: 180.0, maxUsage: 200, status: 'Active', avatar: "https://ui-avatars.com/api/?name=Rian+Hidayat&background=4F7CFF&color=fff" },
  { id: 'USR-006', name: 'Anisa Fitri', email: 'anisa.f@gmail.com', role: 'MANAGER', roleColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20', joinDate: '2025-02-28', usage: 60.5, maxUsage: 200, status: 'Active', avatar:"https://ui-avatars.com/api/?name=Anisa+Fitri&background=4F7CFF&color=fff" },
  { id: 'USR-007', name: 'Bambang Utomo', email: 'bambang.u@outlook.com', role: 'MEMBER', roleColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20', joinDate: '2025-03-05', usage: 110.2, maxUsage: 200, status: 'Inactive', avatar:"https://ui-avatars.com/api/?name=Bambang+Utomo&background=4F7CFF&color=fff" },
  { id: 'USR-008', name: 'Citra Kirana', email: 'citra.k@techcorp.id', role: 'BILLING', roleColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20', joinDate: '2025-03-12', usage: 25.0, maxUsage: 200, status: 'Active', avatar: "https://ui-avatars.com/api/?name=Citra+Kirana&background=4F7CFF&color=fff" },
  { id: 'USR-009', name: 'Dedi Sugandi', email: 'dedi.s@saasflow.com', role: 'ADMIN', roleColor: 'text-red-400 bg-red-500/10 border-red-500/20', joinDate: '2025-03-19', usage: 155.4, maxUsage: 200, status: 'Active', avatar:"https://ui-avatars.com/api/?name=Dedi+Sugandi&background=4F7CFF&color=fff"},
  { id: 'USR-010', name: 'Eka Saputra', email: 'eka.s@gmail.com', role: 'MEMBER', roleColor: 'text-slate-400 bg-slate-500/10 border-slate-500/20', joinDate: '2025-03-25', usage: 5.2, maxUsage: 200, status: 'Inactive', avatar: "https://ui-avatars.com/api/?name=Eka+Saputra&background=4F7CFF&color=fff"},
  

  ...Array.from({ length: 10 }, (_, i) => {
    const userNumber = 11 + i;
    const userName = `User Demo ${userNumber}`;
    return {
      id: `USR-0${userNumber}`,
      name: userName,
      email: `demo${userNumber}@saasflow.com`,
      role: i % 2 === 0 ? 'MEMBER' : 'MANAGER',
      roleColor: i % 2 === 0 ? 'text-slate-400 bg-slate-500/10 border-slate-500/20' : 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      joinDate: '2025-04-01',
      usage: Math.floor(Math.random() * 150) + 10,
      maxUsage: 200,
      status: Math.random() > 0.3 ? 'Active' : 'Inactive',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(userName)}&background=4F7CFF&color=fff&bold=true`
    };
  })
];

export default function UserManagement() {
  // State Filter & Pagination
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Logika Filter Data
  const filteredUsers = useMemo(() => {
    return mockUsers.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) ||
                            user.email.toLowerCase().includes(search.toLowerCase()) ||
                            user.id.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === 'All' || user.role === roleFilter;
      const matchesStatus = statusFilter === 'All' || user.status === statusFilter;
      
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, roleFilter, statusFilter]);

  // Logika Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * itemsPerPage;
    const lastPageIndex = firstPageIndex + itemsPerPage;
    return filteredUsers.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredUsers]);


  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-100 p-6 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-wide text-white">Manage System Users</h1>
            <p className="text-sm text-slate-400 mt-1">View the complete member list, edit statuses, monitor data usage, and export detail</p>
          </div>
          
          {/* Mini Stats */}
          <div className="flex items-center gap-3">
            <div className="bg-[#0f162d] border border-slate-800 rounded-xl px-4 py-2 text-center min-w-[90px]">
              <span className="block text-[10px] text-slate-500 font-medium tracking-wider uppercase">Total</span>
              <span className="text-sm font-bold text-slate-200">20 Users</span>
            </div>
            <div className="bg-[#0f162d] border border-slate-800 rounded-xl px-4 py-2 text-center min-w-[90px]">
              <span className="block text-[10px] text-slate-500 font-medium tracking-wider uppercase">Active</span>
              <span className="text-sm font-bold text-emerald-400">14 Live</span>
            </div>
            <div className="bg-[#0f162d] border border-slate-800 rounded-xl px-4 py-2 text-center min-w-[100px]">
              <span className="block text-[10px] text-slate-500 font-medium tracking-wider uppercase">Pending</span>
              <span className="text-sm font-bold text-amber-500">3 Invitations</span>
            </div>
          </div>
        </div>

        {/* --- FILTER & ACTION BAR --- */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full lg:w-auto flex-1 max-w-3xl">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="text" 
                placeholder="Search for a name, email, or ID..."
                value={search}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0b1126] border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition"
              />
            </div>

            {/* Filter Role */}
            <div className="relative">
              <SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <select 
                value={roleFilter}
                onChange={(e) => { setRoleFilter(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0b1126] border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
              >
                <option value="All">Role: All</option>
                <option value="ADMIN">ADMIN</option>
                <option value="MANAGER">MANAGER</option>
                <option value="MEMBER">MEMBER</option>
                <option value="BILLING">BILLING</option>
              </select>
            </div>

            {/* Filter Status */}
            <div className="relative">
              <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <select 
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
                className="w-full pl-10 pr-4 py-2.5 bg-[#0b1126] border border-slate-800 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-indigo-500 appearance-none cursor-pointer"
              >
                <option value="All">Status: All</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Add Button */}
          <button className="w-full lg:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-medium text-sm rounded-xl transition shadow-lg shadow-indigo-500/10 whitespace-nowrap">
            <UserPlus className="w-4 h-4" />
            Add a New User
          </button>
        </div>

        {/* --- TABLE CONTAINER --- */}
        <div className="bg-[#0b1126] border border-slate-900 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-900/60 bg-[#0e1631]/40">
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider">ID & MEMBER</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider">EMAIL</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider">ROLE ACCESS</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider">JOIN DATE</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider">UTILIZATION (GB)</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider">STATUS</th>
                  <th className="p-4 text-xs font-semibold text-slate-500 tracking-wider text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/40">
                {currentTableData.map((user) => {
                  const usagePercentage = (user.usage / user.maxUsage) * 100;
                  return (
                    <tr key={user.id} className="hover:bg-[#121b3a]/30 transition-colors">
                      {/* Avatar & Name */}
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={user.avatar} 
                            alt={user.name} 
                            className="w-10 h-10 rounded-full object-cover border border-slate-800 shadow-inner"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=4F7CFF&color=fff&bold=true`;
                            }}
                          />
                          <div>
                            <div className="font-medium text-slate-200 text-sm">{user.name}</div>
                            <div className="text-[11px] text-slate-500 uppercase tracking-tight">{user.id}</div>
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="p-4 text-sm text-slate-300">
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-slate-500" />
                          <span>{user.email}</span>
                        </div>
                      </td>

                      {/* Role Badge */}
                      <td className="p-4">
                        <span className={`px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-md border ${user.roleColor}`}>
                          {user.role}
                        </span>
                      </td>

                      {/* Join Date */}
                      <td className="p-4 text-sm text-slate-400">{user.joinDate}</td>

                      {/* Progress Data Usage */}
                      <td className="p-4">
                        <div className="flex items-center gap-3 min-w-[140px]">
                          <div className="w-20 bg-slate-800 rounded-full h-1.5 overflow-hidden">
                            <div 
                              className="bg-blue-500 h-1.5 rounded-full" 
                              style={{ width: `${Math.min(usagePercentage, 100)}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-slate-300">{user.usage.toFixed(1)} GB</span>
                        </div>
                      </td>

                      {/* Status Badge */}
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'Active' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                            : 'bg-slate-800 text-slate-400 border border-slate-700/50'
                        }`}>
                          {user.status}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-1.5 text-slate-500 hover:text-slate-300 transition-colors">
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 text-slate-500 hover:text-rose-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                
                {/* Fallback kalau data kosong */}
                {currentTableData.length === 0 && (
                  <tr>
                    <td colSpan="7" className="text-center py-10 text-slate-500 text-sm">
                      User Not Found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* --- PAGINATION CONTROLS --- */}
          {totalPages > 1 && (
            <div className="px-4 py-4 border-t border-slate-900/60 bg-[#0e1631]/20 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Featuring <span className="text-slate-300 font-medium">{Math.min((currentPage - 1) * itemsPerPage + 1, filteredUsers.length)}</span> - <span className="text-slate-300 font-medium">{Math.min(currentPage * itemsPerPage, filteredUsers.length)}</span> from <span className="text-slate-300 font-medium">{filteredUsers.length}</span> user
              </span>
              
              <div className="flex items-center gap-1.5">
                {/* Prev Button */}
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 bg-[#0b1126] border border-slate-800 rounded-lg text-slate-400 hover:bg-slate-800/50 disabled:opacity-40 disabled:hover:bg-transparent transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Number Buttons */}
                {Array.from({ length: totalPages }, (_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setCurrentPage(pageNumber)}
                      className={`w-8 h-8 flex items-center justify-center text-xs font-semibold rounded-lg border transition ${
                        currentPage === pageNumber
                          ? 'bg-indigo-600 border-indigo-500 text-white shadow-md shadow-indigo-600/20'
                          : 'bg-[#0b1126] border-slate-800 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                {/* Next Button */}
                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 bg-[#0b1126] border border-slate-800 rounded-lg text-slate-400 hover:bg-slate-800/50 disabled:opacity-40 disabled:hover:bg-transparent transition"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}