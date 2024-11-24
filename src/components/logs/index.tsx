import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { LogsItem } from "./item";

export const LogsCard = () => {
	return (
		<Card className="col-span-3">
			<CardHeader>
				<CardTitle>Logs</CardTitle>
			</CardHeader>
			<CardContent>
				<ScrollArea className="h-[calc(100vh-200px)]">
					<LogsItem />
				</ScrollArea>
			</CardContent>
		</Card>
	);
};
