export default function Charts() {
  return (
    <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-bold">
                Query Latency &amp; Transactions
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Real-time throughput vs response time across cluster
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-slate-600 dark:text-slate-300">
                  Latency (ms)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent-mint" />
                <span className="text-slate-600 dark:text-slate-300">
                  TPS (x100)
                </span>
              </div>
            </div>
          </div>
          <div className="h-80 w-full relative">
            {/* Y-axis Labels */}
            <div className="absolute left-0 top-0 bottom-8 flex flex-col justify-between text-[10px] text-slate-400 font-bold pr-2 border-r border-slate-100 dark:border-border-dark">
              <span>100ms</span>
              <span>75ms</span>
              <span>50ms</span>
              <span>25ms</span>
              <span>0ms</span>
            </div>
            {/* Chart Area */}
            <div className="ml-10 h-full flex flex-col">
              <div className="flex-1 relative">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between py-1">
                  <div className="w-full border-t border-slate-100 dark:border-border-dark/50" />
                  <div className="w-full border-t border-slate-100 dark:border-border-dark/50" />
                  <div className="w-full border-t border-slate-100 dark:border-border-dark/50" />
                  <div className="w-full border-t border-slate-100 dark:border-border-dark/50" />
                </div>
                {/* Latency Line */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 1000 100"
                >
                  <path
                    d="M0,80 L50,75 L100,78 L150,70 L200,85 L250,60 L300,55 L350,58 L400,30 L450,25 L500,40 L550,45 L600,42 L650,48 L700,55 L750,52 L800,60 L850,58 L900,55 L950,50 L1000,52"
                    fill="none"
                    stroke="#1337ec"
                    strokeWidth={2}
                  />
                  <path
                    d="M0,60 L50,62 L100,58 L150,65 L200,60 L250,68 L300,65 L350,70 L400,65 L450,60 L500,62 L550,65 L600,70 L650,75 L700,72 L750,68 L800,65 L850,62 L900,60 L950,58 L1000,60"
                    fill="none"
                    stroke="#0bda65"
                    strokeWidth={2}
                  />
                </svg>
                {/* Crosshair example */}
                <div className="absolute left-2/5 top-0 bottom-0 w-[1px] bg-primary/30 hidden md:block group">
                  <div className="absolute top-1/4 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background-dark" />
                </div>
              </div>
              {/* X-axis Labels */}
              <div className="h-8 flex justify-between items-end text-[10px] text-slate-400 font-bold">
                <span>10:00</span>
                <span>10:10</span>
                <span>10:20</span>
                <span>10:30</span>
                <span>10:40</span>
                <span>10:50</span>
                <span>11:00</span>
              </div>
            </div>
          </div>
        </div>
  );
}
