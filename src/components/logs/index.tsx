import type { EventResponse } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { LogsItem } from "./item";

export type LogsCardProps = {
	eventData: EventResponse[];
};

export const LogsCard = (props: LogsCardProps) => {
	return (
		<Card className="col-span-3">
			<CardHeader>
				<CardTitle>Logs</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[calc(100vh-200px)] flex flex-col-reverse">
					{props.eventData?.map((event, index) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: nol
						<LogsItem key={index} eventData={event} />
					))}
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
