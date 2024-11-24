import type { EventResponse } from "@/types";

export type LogsCardProps = {
	eventData: EventResponse;
};

const printLog = (props: EventResponse) => {
	if (props.event_type === "pickup") {
		return `Customer ${props.vehicle.customerId} picked up by vehicle ${props.vehicle.id}.`;
	}
	if (props.event_type === "dropoff") {
		return `Customer ${props.vehicle.customerId} arrived at destination.`;
	}
	if (props.event_type === "finish") {
		return "Scenario finished.";
	}
	return;
};

export const LogsItem = (props: LogsCardProps) => {
	return (
		<div>
			{props.eventData.vehicle && (
				<div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 mb-4">
					{printLog(props.eventData)}
				</div>
			)}
		</div>
	);
};
