import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import MetricCards from "../components/MetricCards";
import Charts from "../components/Charts";
import SlowQueries from "../components/SlowQueries";
import StorageHeatmap from "../components/StorageHeatmap";
import CpuMetric from "../components/cpuMetric";
import { useNavigate } from "react-router-dom";

const storageData = [
  { id: 'P-01-000000001', usage: 12 },
  { id: 'P-02', usage: 22 },
  { id: 'S-M1', usage: 76 },
  { id: 'S-Q4', usage: 92 },
];

const cpuMetricData = [
  { id: 'Instance-01', usage: 20, lastFiveIntervals: [30, 25, 90, 15, 20] },
  { id: 'Instance-02', usage: 35, lastFiveIntervals: [40, 38, 35, 65, 35] },
  { id: 'Instance-03', usage: 55, lastFiveIntervals: [10, 12, 95, 55, 60] },
  { id: 'Instance-04', usage: 40, lastFiveIntervals: [45, 42, 40, 38, 40] },
  { id: 'Instance-05', usage: 90, lastFiveIntervals: [78, 85, 90, 88, 92] },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="text-white flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          {/* <MetricCards />
          <Charts />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            <SlowQueries />
            <StorageHeatmap />
          </div> */}

          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-background-dark">
            <section className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <div className="xl:col-span-3 bg-panel-dark border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    Fleet Peak CPU
                  </span>
                  <span className="material-symbols-outlined text-critical-red opacity-50">
                    trending_up
                  </span>
                </div>
                <div className="my-2">
                  <span className="text-4xl font-mono font-black text-critical-red">
                    94.2%
                  </span>
                </div>
                <div className="text-[10px] flex items-center gap-2 text-slate-400">
                  <span className="text-critical-red font-bold">●</span>
                  PROD-DB-04 (West-1)
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-12 opacity-10">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <polyline
                      fill="none"
                      points="0,40 20,35 40,38 60,10 80,5 100,2"
                      stroke="#FF3131"
                      strokeWidth={4}
                    />
                  </svg>
                </div>
              </div>
              <div className="xl:col-span-3 bg-panel-dark border border-slate-800 p-4 flex flex-col justify-between relative overflow-hidden">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    Fleet Floor CPU
                  </span>
                  <span className="material-symbols-outlined text-success-neon opacity-50">
                    trending_down
                  </span>
                </div>
                <div className="my-2">
                  <span className="text-4xl font-mono font-black text-success-neon">
                    01.8%
                  </span>
                </div>
                <div className="text-[10px] flex items-center gap-2 text-slate-400">
                  <span className="text-success-neon font-bold">●</span>
                  STG-WORKER-12
                </div>
              </div>
              {/* <div className="xl:col-span-6 bg-panel-dark border border-slate-800 p-4">
                <div className="flex justify-between mb-3">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    CPU Distribution (Ranked)
                  </span>
                  <span className="text-[9px] font-mono text-slate-600">
                    20 Instances
                  </span>
                </div>
                <div className="flex gap-[2px] h-12">
                  <div
                    className="flex-1 bg-critical-red"
                    style={{ height: "94%" }}
                  />
                  <div
                    className="flex-1 bg-critical-red"
                    style={{ height: "88%" }}
                  />
                  <div
                    className="flex-1 bg-warning-amber"
                    style={{ height: "72%" }}
                  />
                  <div
                    className="flex-1 bg-warning-amber"
                    style={{ height: "65%" }}
                  />
                  <div className="flex-1 bg-primary" style={{ height: "54%" }} />
                  <div className="flex-1 bg-primary" style={{ height: "48%" }} />
                  <div className="flex-1 bg-primary" style={{ height: "45%" }} />
                  <div className="flex-1 bg-primary" style={{ height: "38%" }} />
                  <div className="flex-1 bg-primary" style={{ height: "32%" }} />
                  <div className="flex-1 bg-primary" style={{ height: "28%" }} />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "22%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "18%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "15%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "12%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "10%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "8%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "6%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "5%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "3%" }}
                  />
                  <div
                    className="flex-1 bg-success-neon/60"
                    style={{ height: "2%" }}
                  />
                </div>
                <div className="flex justify-between mt-1 text-[9px] font-mono text-slate-600 uppercase">
                  <span>Max Load</span>
                  <span>Idle</span>
                </div>
              </div> */}
            </section>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <section className="lg:col-span-8 flex flex-col gap-4">
                <div className="bg-panel-dark border border-slate-800 p-4 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        memory
                      </span>
                      Instance CPU Utilization
                    </h2>
                    <div className="flex gap-2 text-[10px]">
                      <span className="text-slate-500">View:</span>
                      <button className="text-primary font-bold">Grid</button>
                      <button className="text-slate-500 hover:text-slate-300">
                        List
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-3">
                    {cpuMetricData.map((instance, key) => (
                      <div
                        key={key}
                        onClick={() => navigate(`/cpuMetric/${instance.id}`)}
                        className={`bg-card-dark border border-slate-800 p-2 hover:border-slate-600 transition-colors border-l-2  ${instance.usage >= 75 ? 'border-l-critical-red' : instance.usage >= 50 ? 'border-l-warning-amber' : instance.usage >= 25 ? 'border-l-primary' : 'border-l-success-neon'} `}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono text-slate-400 truncate">
                            {instance.id}
                          </span>
                          <span className="text-[10px] font-bold text-success-neon">
                            {instance.usage}%
                          </span>
                        </div>
                        <div className="h-8 flex items-end gap-[1px]">
                          {instance.lastFiveIntervals.map((usage, index) => (
                            <div
                              key={index}
                              className={index == instance.lastFiveIntervals.length - 1 ? `flex-1 ${usage >= 75 ? 'bg-critical-red' : usage >= 50 ? 'bg-warning-amber' : usage >= 25 ? 'bg-primary' : 'bg-success-neon'}` : `flex-1 ${usage >= 75 ? 'bg-critical-red/50' : usage >= 50 ? 'bg-warning-amber/50' : usage >= 25 ? 'bg-primary/50' : 'bg-success-neon/50'}`}
                              style={{ height: `${usage}%` }}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="bg-card-dark border border-slate-800 p-2 border-l-2 border-l-critical-red">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          prod-db-04
                        </span>
                        <span className="text-[10px] font-bold text-critical-red">
                          94%
                        </span>
                      </div>
                      <div className="h-8 flex items-end gap-[1px]">
                        <div
                          className="flex-1 bg-critical-red/50"
                          style={{ height: "80%" }}
                        />
                        <div
                          className="flex-1 bg-critical-red/50"
                          style={{ height: "85%" }}
                        />
                        <div
                          className="flex-1 bg-critical-red/50"
                          style={{ height: "90%" }}
                        />
                        <div
                          className="flex-1 bg-critical-red/50"
                          style={{ height: "88%" }}
                        />
                        <div
                          className="flex-1 bg-critical-red"
                          style={{ height: "94%" }}
                        />
                      </div>
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] font-mono text-slate-400 truncate">
                          stg-mysql-01
                        </span>
                        <span className="text-[10px] font-bold text-warning-amber">
                          62%
                        </span>
                      </div>
                      <div className="h-8 flex items-end gap-[1px]">
                        <div
                          className="flex-1 bg-slate-700"
                          style={{ height: "20%" }}
                        />
                        <div
                          className="flex-1 bg-slate-700"
                          style={{ height: "30%" }}
                        />
                        <div
                          className="flex-1 bg-slate-700"
                          style={{ height: "40%" }}
                        />
                        <div
                          className="flex-1 bg-warning-amber"
                          style={{ height: "62%" }}
                        />
                        <div
                          className="flex-1 bg-warning-amber"
                          style={{ height: "58%" }}
                        />
                      </div>
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                    <div className="bg-card-dark border border-slate-800 p-2">
                      <div className="h-10 bg-slate-900/50 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
                <div className="bg-panel-dark border border-slate-800 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm">
                        database
                      </span>
                      Fleet Storage Heatmap (Table Space)
                    </h2>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <div className="size-2 bg-success-neon" />
                        <div className="size-2 bg-warning-amber" />
                        <div className="size-2 bg-critical-red" />
                      </div>
                      <span className="text-[9px] text-slate-500 uppercase font-bold">
                        Legend
                      </span>
                    </div>
                  </div>
                  <div className="heatmap-grid">
                    {storageData.map((node) => (
                      <div 
                      key={node.id}
                      className="aspect-square bg-success-neon/80 border border-slate-900 flex flex-col items-center justify-center p-1 group relative">
                        <span className="text-[8px] font-mono font-bold text-black opacity-60">
                          {node.id}
                        </span>
                        <span className="text-[9px] font-black text-black">{node.usage}%</span>
                      </div>))}
                    <div className="aspect-square bg-critical-red/90 border border-slate-900 flex flex-col items-center justify-center p-1">
                      <span className="text-[8px] font-mono font-bold text-black opacity-60">
                        S-Q4
                      </span>
                      <span className="text-[9px] font-black text-black">92%</span>
                    </div>
                    <div className="aspect-square bg-success-neon/60 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/60 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/40 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/40 border border-slate-900" />
                    <div className="aspect-square bg-warning-amber/40 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/20 border border-slate-900" />
                    <div className="aspect-square bg-success-neon/10 border border-slate-900" />
                  </div>
                </div>
              </section>
              <section className="lg:col-span-4 bg-panel-dark border border-slate-800 p-4 flex flex-col">
                <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-sm">
                    list_alt
                  </span>
                  Top Sessions by CPU
                </h2>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-300">SID: 4829 (Analytics)</span>
                      <span className="text-critical-red font-bold">78.4%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-critical-red"
                        style={{ width: "78.4%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-300">SID: 1022 (Reporting)</span>
                      <span className="text-warning-amber font-bold">42.1%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-warning-amber"
                        style={{ width: "42.1%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-300">SID: 9920 (Batch-Job)</span>
                      <span className="text-primary font-bold">18.5%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary"
                        style={{ width: "18.5%" }}
                      />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] font-mono">
                      <span className="text-slate-300">SID: 4122 (User-Auth)</span>
                      <span className="text-success-neon font-bold">4.2%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-success-neon"
                        style={{ width: "4.2%" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8 border-t border-slate-800 pt-4">
                  <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter mb-3">
                    Recent Queries
                  </h3>
                  <table className="w-full text-[10px] font-mono text-slate-400">
                    <tbody>
                      <tr className="border-b border-slate-800">
                        <td className="py-1">SELECT * FROM users...</td>
                        <td className="py-1 text-right text-slate-500">2ms</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-1">UPDATE inventory SET...</td>
                        <td className="py-1 text-right text-slate-500">14ms</td>
                      </tr>
                      <tr>
                        <td className="py-1">INSERT INTO logs VALU...</td>
                        <td className="py-1 text-right text-slate-500">1ms</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-panel-dark border border-slate-800 p-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Avg Latency
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono font-bold">12.4ms</span>
                  <span className="text-success-neon text-[10px] font-bold">
                    ↓ 2%
                  </span>
                </div>
              </div>
              <div className="bg-panel-dark border border-slate-800 p-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  I/O Wait
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono font-bold">0.4%</span>
                  <span className="text-slate-500 text-[10px]">Normal</span>
                </div>
              </div>
              <div className="bg-panel-dark border border-slate-800 p-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Active Transactions
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono font-bold">1,842</span>
                  <span className="text-warning-amber text-[10px] font-bold">
                    ↑ 12%
                  </span>
                </div>
              </div>
              <div className="bg-panel-dark border border-slate-800 p-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase">
                  Cache Hit Ratio
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-mono font-bold">99.2%</span>
                  <span className="text-success-neon text-[10px] font-bold">
                    Stable
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
