
import CpuMetric from "./cpuMetric";

export default function MetricCards() {
  return (

    <div>
      <div>
        <CpuMetric />
      </div>
      <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* CPU */}
     <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  CPU Usage
                </p>
                <h3 className="text-3xl font-bold mt-1">42.8%</h3>
              </div>
              <div className="text-accent-amber flex items-center gap-1 text-xs font-bold bg-accent-amber/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-sm">
                  trending_up
                </span>
                +2.5%
              </div>
            </div>
            <div className="h-16 w-full mt-2">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 400 60"
              >
                <path
                  d="M0,50 Q40,10 80,45 T160,30 T240,55 T320,15 T400,40"
                  fill="none"
                  stroke="#1337ec"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <path
                  d="M0,50 Q40,10 80,45 T160,30 T240,55 T320,15 T400,40 V60 H0 Z"
                  fill="url(#cpu-grad)"
                />
                <defs>
                  <linearGradient id="cpu-grad" x1={0} x2={0} y1={0} y2={1}>
                    <stop offset="0%" stopColor="#1337ec" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1337ec" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

      {/* Memory */}
     <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 flex items-center gap-6">
            <div className="relative w-24 h-24 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  className="text-slate-100 dark:text-border-dark"
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  stroke="currentColor"
                  strokeWidth={8}
                />
                <circle
                  cx={50}
                  cy={50}
                  fill="transparent"
                  r={40}
                  stroke="#0bda65"
                  strokeDasharray="251.2"
                  strokeDashoffset={55}
                  strokeLinecap="round"
                  strokeWidth={8}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className=" text-xl font-bold">78%</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                Memory Usage
              </p>
              <div className="mt-1 flex flex-col">
                <span className="text-white text-xl font-bold">12.4 GB / 16 GB</span>
                <span className="text-accent-mint text-xs font-bold mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    check_circle
                  </span>
                  Stable Performance
                </span>
              </div>
            </div>
          </div>

      {/* IOPS */}
     <div className="bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark p-6 flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  IOPS (Read/Write)
                </p>
                <h3 className="text-3xl font-bold mt-1">12.4k</h3>
              </div>
              <div className="text-accent-mint flex items-center gap-1 text-xs font-bold bg-accent-mint/10 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-sm">
                  trending_down
                </span>
                -0.8%
              </div>
            </div>
            <div className="flex items-end gap-1.5 h-16 w-full pt-4">
              <div className="flex-1 bg-primary/40 h-1/2 rounded-t-sm" />
              <div className="flex-1 bg-primary/40 h-2/3 rounded-t-sm" />
              <div className="flex-1 bg-primary/60 h-3/4 rounded-t-sm" />
              <div className="flex-1 bg-primary/40 h-1/2 rounded-t-sm" />
              <div className="flex-1 bg-primary/40 h-2/3 rounded-t-sm" />
              <div className="flex-1 bg-primary/80 h-full rounded-t-sm" />
              <div className="flex-1 bg-primary/40 h-3/4 rounded-t-sm" />
              <div className="flex-1 bg-primary/40 h-1/2 rounded-t-sm" />
              <div className="flex-1 bg-primary/40 h-2/3 rounded-t-sm" />
              <div className="flex-1 bg-primary/50 h-3/4 rounded-t-sm" />
            </div>
          </div>
    </div>
    </div>
  );
}
