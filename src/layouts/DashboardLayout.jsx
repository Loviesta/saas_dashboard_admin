import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#030712] lg:flex lg:h-screen lg:overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex flex-1 flex-col w-full lg:w-0 lg:max-w-full lg:h-full">

        {/* Header */}
        <Header />

        {/* Scroll Area */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}