const CELLS = Array.from({ length: 50 });

export default function StorageHeatmap() {
  return (
   <div className="text-white bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-base font-bold">Storage Heatmap</h2>
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase">
                <span>Low</span>
                <div className="flex h-2 w-24 rounded-full overflow-hidden">
                  <div className="flex-1 bg-accent-mint" />
                  <div className="flex-1 bg-primary" />
                  <div className="flex-1 bg-accent-amber" />
                  <div className="flex-1 bg-red-600" />
                </div>
                <span>High</span>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2">
              {/* Heatmap Cells (simulated data) */}
              {/* Healthy nodes */}
              <div
                className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer"
                title="Node A1: 12%"
              />
              <div className="aspect-square bg-accent-mint/60 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/30 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/40 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/20 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              {/* Middle nodes */}
              <div className="aspect-square bg-primary/40 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/60 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/50 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-amber/40 rounded-sm border border-accent-amber/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/40 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-amber/60 rounded-sm border border-accent-amber/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/40 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/30 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              {/* Hot nodes */}
              <div className="aspect-square bg-accent-amber/70 rounded-sm border border-accent-amber/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-red-600/60 rounded-sm border border-red-600/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-amber/40 rounded-sm border border-accent-amber/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/40 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/30 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/20 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-primary/40 rounded-sm border border-primary/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
              <div className="aspect-square bg-accent-mint/40 rounded-sm border border-accent-mint/20 hover:scale-110 transition-transform cursor-pointer" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-border-dark/20 border border-slate-100 dark:border-border-dark/50">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                  Total Cluster Size
                </p>
                <p className="text-sm font-bold">2.4 PB</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-border-dark/20 border border-slate-100 dark:border-border-dark/50">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">
                  Average Utilization
                </p>
                <p className="text-sm font-bold text-accent-mint">34.2%</p>
              </div>
            </div>
          </div>
  );
}
