import { useEffect, useState } from "react";
import { LogsCard } from "./components/logs";
import { MapCard } from "./components/map";
import { ScenarioCreate } from "./components/scenario/create";
import type { EventResponse } from "./types";

function App() {
	const [eventData, setEventData] = useState<EventResponse[]>([]);

	useEffect(() => {
		const eventSource = new EventSource("http://localhost:8000/stream");

		eventSource.onmessage = (event) => {
			const data: EventResponse = JSON.parse(event.data);
			setEventData((eventData) => [...eventData, data]);
		};

		return () => eventSource.close();
	}, []);

	return (
		<div className="flex-1 space-y-4 p-8 pt-6">
			<div className="flex items-center justify-between space-y-2">
				<h2 className="text-3xl font-bold tracking-tight">
					T-Systems RoboTaxi Dashboard
				</h2>
				<ScenarioCreate />
			</div>
			<div className="space-y-4">
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<LogsCard eventData={eventData} />
					<MapCard />
				</div>
			</div>
		</div>
	);
}

export default App;
