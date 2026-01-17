const DATA = [
  {
    query: "SELECT * FROM orders...",
    node: "us-east-1a",
    latency: "1.2s",
    load: "85%",
    status: "WARNING",
  },
  {
    query: "UPDATE users SET last_login...",
    node: "us-east-1b",
    latency: "450ms",
    load: "12%",
    status: "OPTIMAL",
  },
  {
    query: "DELETE FROM cache WHERE...",
    node: "us-west-2c",
    latency: "890ms",
    load: "44%",
    status: "WARNING",
  },
  {
    query: "INSERT INTO products (name, price)...",
    node: "us-west-1a",
    latency: "1.5s",
    load: "90%",
    status: "CRITICAL",
  }
];

export default function SlowQueries() {
  return (
<div className="text-white bg-white dark:bg-card-dark rounded-xl border border-slate-200 dark:border-border-dark overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-border-dark flex justify-between items-center">
              <h2 className="text-base font-bold">Slowest Queries</h2>
              <button className="text-primary text-xs font-bold flex items-center gap-1 hover:underline">
                View Full Logs{" "}
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-slate-50 dark:bg-border-dark/30 text-slate-500 dark:text-slate-400">
                    <th className="px-6 py-3 font-bold uppercase text-[10px] tracking-widest">
                      Query ID
                    </th>
                    <th className="px-6 py-3 font-bold uppercase text-[10px] tracking-widest">
                      Latency
                    </th>
                    <th className="px-6 py-3 font-bold uppercase text-[10px] tracking-widest">
                      Load
                    </th>
                    <th className="px-6 py-3 font-bold uppercase text-[10px] tracking-widest">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-border-dark/50">
                {DATA.map((item, index) => (
                    <tr className="hover:bg-slate-50 dark:hover:bg-border-dark/20 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-xs font-mono">
                          {item.query}
                        </span>
                        <span className="text-[10px] text-slate-500">
                          Node: {item.node}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="font-bold">1.2s</span>
                        <div className="w-16 bg-slate-100 dark:bg-border-dark rounded-full h-1.5 overflow-hidden">
                          <div
                            className="bg-accent-amber h-full"
                            style={{ width: "85%" }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-medium">85%</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 rounded-md bg-accent-amber/10 text-accent-amber text-[10px] font-bold">
                       {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
  );
}
