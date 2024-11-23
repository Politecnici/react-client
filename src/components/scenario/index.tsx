import { Card, CardContent, CardHeader } from "../ui/card";

export type ScenarioElementProps = {
	title: string;
};

export const ScenarioElement = (props: ScenarioElementProps) => {
	return (
		<Card>
			<CardHeader className="text-lg">{props.title}</CardHeader>
			<CardContent>Kek</CardContent>
		</Card>
	);
};
