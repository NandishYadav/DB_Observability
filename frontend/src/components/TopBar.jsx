export default function TopBar() {
    return (
       <header className="text-white h-16 flex items-center justify-between px-8 border-b border-slate-200 dark:border-border-dark bg-white/50 dark:bg-background-dark/50 backdrop-blur-md z-10">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold tracking-tight">
              Database Metrics
            </h2>
            <span className="px-2 py-0.5 rounded bg-accent-mint/10 text-accent-mint text-[10px] font-bold uppercase tracking-wider">
              System Healthy
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-border-dark p-1 rounded-lg">
            <button className="px-3 py-1 text-xs font-medium rounded dark:text-white bg-white dark:bg-slate-700 shadow-sm">
              Last 5m
            </button>
            <button className="px-3 py-1 text-xs font-medium rounded text-slate-500 hover:text-slate-900 dark:hover:text-white">
              Last 1h
            </button>
            <button className="px-3 py-1 text-xs font-medium rounded text-slate-500 hover:text-slate-900 dark:hover:text-white">
              Last 6h
            </button>
            <button className="px-3 py-1 text-xs font-medium rounded text-slate-500 hover:text-slate-900 dark:hover:text-white">
              Last 24h
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              className="w-64 pl-10 pr-4 py-2 bg-slate-100 dark:bg-border-dark border-none rounded-lg text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-500"
              placeholder="Search clusters..."
              type="text"
            />
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg bg-slate-100 dark:bg-border-dark text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined text-xl">refresh</span>
            </button>
            <button className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </header>
    );
}
