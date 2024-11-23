import { LogsCard } from "../logs-card";
import { MapCard } from "../map";
import { ScenarioCreate } from "../scenario/create";

export function Dashboard() {
	return (
		<>
			<div className="flex-1 space-y-4 p-8 pt-6">
				<div className="flex items-center justify-between space-y-2">
					<h2 className="text-3xl font-bold tracking-tight">
						T-Systems RoboTaxi Dashboard
					</h2>
					<ScenarioCreate />
				</div>
				<div className="space-y-4">
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
						<LogsCard />
						<MapCard />
					</div>
				</div>
			</div>
		</>
	);
}

export default Dashboard;
