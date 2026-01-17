import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";
import MetricCards from "../components/MetricCards";
import Charts from "../components/Charts";
import SlowQueries from "../components/SlowQueries";
import StorageHeatmap from "../components/StorageHeatmap";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6">
          <MetricCards />
          <Charts />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
            <SlowQueries />
            <StorageHeatmap />
          </div>
        </div>
      </main>
    </div>
  );
}
