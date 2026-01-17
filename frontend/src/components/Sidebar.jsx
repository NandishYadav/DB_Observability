export default function Sidebar() {
  return (
    <aside className="w-20 lg:w-64 flex flex-col bg-white dark:bg-[#111218] border-r border-slate-200 dark:border-border-dark transition-all">
      {/* Logo */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-symbols-outlined">database</span>
        </div>
        <div className="hidden lg:block">
          <h1 className="text-base font-bold">DB Observability</h1>
          <p className="text-xs text-slate-500">Admin Console</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 space-y-2">
        {[
          ["dashboard", "Dashboard", true],
          ["notifications", "Alerts"],
          ["explore", "Explorer"],
          ["query_stats", "Query Logs"],
        ].map(([icon, label, active]) => (
          <a
            key={label}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
              ${
                active
                  ? "bg-primary/10 text-primary"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-border-dark"
              }`}
            href="#"
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="hidden lg:block">{label}</span>
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200 dark:border-border-dark">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-400" />
          <div className="hidden lg:block">
            <p className="text-xs font-bold">Alex Morgan</p>
            <p className="text-[10px] text-slate-500 uppercase">DBA Lead</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
