export default function CpuMetric({ instanceId }) {

    return(
        <>
        <>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>CPU Metric - Time Series Focus {instanceId}---------</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .chart-grid-line {\n            stroke: rgba(255, 255, 255, 0.05);\n        }\n        .chart-line {\n            stroke: #1337ec;\n            filter: drop-shadow(0px 0px 8px rgba(19, 55, 236, 0.6));\n        }\n        .area-gradient {\n            fill: url(#chartGradient);\n        }\n    "
    }}
  />
  <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div className="layout-container flex h-full grow flex-col">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-10 py-3 bg-background-dark">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="size-6 text-primary">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_6_319)">
                  <path
                    d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_319">
                    <rect fill="white" height={48} width={48} />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">
              DB Observability Platform
            </h2>
          </div>
          <div className="flex items-center gap-9">
            <a
              className="text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-white/70 text-sm font-medium leading-normal hover:text-white transition-colors"
              href="#"
            >
              Metrics
            </a>
            <a
              className="text-white/70 text-sm font-medium leading-normal hover:text-white transition-colors"
              href="#"
            >
              Logs
            </a>
            <a
              className="text-white/70 text-sm font-medium leading-normal hover:text-white transition-colors"
              href="#"
            >
              Alerts
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-end gap-6">
          <label className="flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div
                className="text-[#9da1b9] flex border-none bg-white/5 items-center justify-center pl-4 rounded-l-lg"
                data-icon="Search"
              >
                <span className="material-symbols-outlined text-xl">
                  search
                </span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 border-none bg-white/5 text-white focus:ring-0 h-full placeholder:text-[#9da1b9] px-4 rounded-r-lg pl-2 text-sm font-normal"
                placeholder="Search resources..."
                defaultValue=""
              />
            </div>
          </label>
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-white/5 text-white hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-white/5 text-white hover:bg-white/10 transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full" />
            </button>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-white/10"
            data-alt="User profile avatar placeholder"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZJNEPef7-9eJRWop4Y_HUKh2WB5Qerz1EZ03vSSbRTsHGNk8hvnOx8hFl0vVtxBzUQljY7Dxq_rKwiH_JStmFmWzlzGDAbKXxYPVshBfwbOgvijYsLwYCPc_1PddN98MpPMY72280CF4N5q4PLt9lPQuxxcps4Qny9voNqUbZFjcwKbjC9iipjofVfCawKSIWC7dneZOVbr_PZ3EP4LjEq4lrUuvrlEAo22NlJhlqYtEVO8zT21lsjrcBIepd8WI6OhU1x9Lxeg13")'
            }}
          />
        </div>
      </header>
      <main className="flex-1 flex flex-col px-10 py-6 max-w-[1600px] mx-auto w-full gap-6">
        {/* Breadcrumbs & Header */}
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <a
              className="text-[#9da1b9] hover:text-white transition-colors"
              href="#"
            >
              Infrastructure
            </a>
            <span className="text-[#9da1b9]">/</span>
            <a
              className="text-[#9da1b9] hover:text-white transition-colors"
              href="#"
            >
              Cluster-01
            </a>
            <span className="text-[#9da1b9]">/</span>
            <span className="text-white">production-db-01</span>
          </div>
          <div className="flex flex-wrap justify-between items-end gap-3 mt-4">
            <div className="flex flex-col gap-1">
              <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                CPU Metric - Time Series
              </p>
              <p className="text-[#9da1b9] text-base font-normal leading-normal">
                Granular analysis of compute resources for production-db-01
                instance
              </p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-white/5 text-white text-sm font-bold hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined mr-2 text-lg">
                  calendar_today
                </span>
                <span>Last 30 Minutes</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined mr-2 text-lg">
                  download
                </span>
                <span>Export Data</span>
              </button>
            </div>
          </div>
        </div>
        {/* High-Density Metrics Area */}
        <div className="bg-white/[0.03] border border-white/10 rounded-xl flex flex-col md:flex-row overflow-hidden min-h-[500px]">
          {/* Main Chart Area */}
          <div className="flex-1 flex flex-col p-6 border-r border-white/10">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col">
                <h1 className="text-white text-[42px] font-extrabold leading-tight">
                  42.8%
                </h1>
                <p className="text-primary font-bold text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  CURRENT USAGE
                </p>
              </div>
              {/* Tabs / Time Range */}
              <div className="flex bg-white/5 p-1 rounded-lg">
                <button className="px-4 py-1.5 text-xs font-bold rounded-md text-[#9da1b9] hover:text-white transition-colors">
                  5m
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-md bg-white/10 text-white">
                  15m
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-md text-[#9da1b9] hover:text-white transition-colors">
                  1h
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-md text-[#9da1b9] hover:text-white transition-colors">
                  6h
                </button>
                <button className="px-4 py-1.5 text-xs font-bold rounded-md text-[#9da1b9] hover:text-white transition-colors">
                  24h
                </button>
              </div>
            </div>
            {/* Visual Time Series Chart Placeholder */}
            <div className="relative flex-1 w-full bg-[#0d0f1a] rounded-lg border border-white/5 overflow-hidden">
              {/* SVGs for chart mock */}
              <svg
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="none"
                viewBox="0 0 1000 400"
              >
                <defs>
                  <linearGradient
                    id="chartGradient"
                    x1={0}
                    x2={0}
                    y1={0}
                    y2={1}
                  >
                    <stop offset="0%" stopColor="#1337ec" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#1337ec" stopOpacity={0} />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={0}
                  x2={1000}
                  y1={100}
                  y2={100}
                />
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={0}
                  x2={1000}
                  y1={200}
                  y2={200}
                />
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={0}
                  x2={1000}
                  y1={300}
                  y2={300}
                />
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={200}
                  x2={200}
                  y1={0}
                  y2={400}
                />
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={400}
                  x2={400}
                  y1={0}
                  y2={400}
                />
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={600}
                  x2={600}
                  y1={0}
                  y2={400}
                />
                <line
                  className="chart-grid-line"
                  strokeWidth={1}
                  x1={800}
                  x2={800}
                  y1={0}
                  y2={400}
                />
                {/* Area Path */}
                <path
                  className="area-gradient"
                  d="M0,320 L50,300 L100,340 L150,280 L200,290 L250,150 L300,180 L350,120 L400,100 L450,220 L500,240 L550,190 L600,200 L650,50 L700,90 L750,140 L800,160 L850,120 L900,180 L950,210 L1000,200 V400 H0 Z"
                />
                {/* Line Path */}
                <path
                  className="chart-line"
                  d="M0,320 L50,300 L100,340 L150,280 L200,290 L250,150 L300,180 L350,120 L400,100 L450,220 L500,240 L550,190 L600,200 L650,50 L700,90 L750,140 L800,160 L850,120 L900,180 L950,210 L1000,200"
                  fill="none"
                  strokeWidth="2.5"
                />
                {/* Hover Point Indicator */}
                <circle
                  cx={650}
                  cy={50}
                  fill="#1337ec"
                  r={4}
                  stroke="white"
                  strokeWidth={2}
                />
                <line
                  stroke="#1337ec"
                  strokeDasharray="4,2"
                  x1={650}
                  x2={650}
                  y1={0}
                  y2={400}
                />
              </svg>
              {/* X & Y Labels */}
              <div className="absolute left-2 top-2 text-[10px] text-white/30 uppercase font-bold">
                Usage %
              </div>
              <div className="absolute right-2 bottom-2 text-[10px] text-white/30 uppercase font-bold">
                Time (UTC)
              </div>
            </div>
          </div>
          {/* Sidebar Panel */}
          <div className="w-full md:w-[300px] bg-white/[0.02] p-6 flex flex-col gap-8">
            {/* Range Summary */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-[#9da1b9] uppercase tracking-wider">
                Period Stats
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#9da1b9] uppercase">
                      Max Peak
                    </span>
                    <span className="text-xl font-bold text-white">88.2%</span>
                  </div>
                  <span className="material-symbols-outlined text-red-500">
                    expand_less
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#9da1b9] uppercase">
                      Min Value
                    </span>
                    <span className="text-xl font-bold text-white">12.4%</span>
                  </div>
                  <span className="material-symbols-outlined text-green-500">
                    expand_more
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-[#9da1b9] uppercase">
                      Avg Load
                    </span>
                    <span className="text-xl font-bold text-white">35.1%</span>
                  </div>
                  <span className="material-symbols-outlined text-primary">
                    analytics
                  </span>
                </div>
              </div>
            </div>
            {/* System Load Sparkline Section */}
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-bold text-[#9da1b9] uppercase tracking-wider">
                System Load Trend
              </h3>
              <div className="bg-white/5 rounded-lg p-4 flex flex-col gap-2 border border-white/5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold">Load Avg</span>
                  <span className="text-sm font-mono text-primary">1.44</span>
                </div>
                <div className="h-12 w-full mt-2">
                  {/* Sparkline Mock */}
                  <svg
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 40"
                  >
                    <path
                      d="M0,35 Q10,10 20,30 T40,20 T60,35 T80,15 T100,25"
                      fill="none"
                      stroke="#1337ec"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="text-[10px] text-white/40 mt-1 italic">
                  Aggregated across all 16 cores
                </p>
              </div>
            </div>
            {/* Additional Context */}
            <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-white/10">
              <div className="flex justify-between text-[11px]">
                <span className="text-[#9da1b9]">Uptime:</span>
                <span className="text-white">14d 2h 12m</span>
              </div>
              <div className="flex justify-between text-[11px]">
                <span className="text-[#9da1b9]">Last updated:</span>
                <span className="text-primary flex items-center gap-1">
                  <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                  2s ago
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Secondary Monitoring Row (Optional Additions for density) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">memory</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#9da1b9] uppercase">
                Memory Usage
              </p>
              <p className="text-xl font-bold">12.4 GB / 32 GB</p>
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-500">
              <span className="material-symbols-outlined">database</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#9da1b9] uppercase">
                I/O Wait
              </p>
              <p className="text-xl font-bold">0.8 ms</p>
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 p-5 rounded-xl flex items-center gap-4">
            <div className="size-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <div>
              <p className="text-xs font-bold text-[#9da1b9] uppercase">
                Active Queries
              </p>
              <p className="text-xl font-bold">142</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</>

        </>
    )
}