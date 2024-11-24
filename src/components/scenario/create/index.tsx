import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { createScenario } from "./create-scenario";

export const ScenarioCreate = () => {
	const [numberOfVehicles, setNumberOfVehicles] = useState(5);
	const [numberOfCustomers, setNumberOfCustomers] = useState(10);
	const [simulationSpeed, setSimulationSpeed] = useState(0.2);

	const handleClick = async () => {
		try {
			const response = await createScenario(
				numberOfVehicles,
				numberOfCustomers,
				simulationSpeed,
			);
			console.log("Scenario created:", response);
		} catch (error) {
			console.log("An error occurred while creating the scenario.");
		}
	};

	return (
		<div className="flex items-center space-x-2">
			<Drawer>
				<DrawerTrigger>
					<TooltipProvider delayDuration={0}>
						<Tooltip>
							<TooltipTrigger>
								<PlusIcon />
							</TooltipTrigger>
							<TooltipContent>Create a new Scenario</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>Create a new Scenario</DrawerTitle>
						<DrawerDescription>
							Insert your preferred information
						</DrawerDescription>
						<div className="py-6 flex flex-col gap-4">
							<Label htmlFor="vehicles">Number of Vehicles</Label>
							<Input
								type="number"
								name="vehicles"
								value={numberOfVehicles}
								onChange={(e) => setNumberOfVehicles(Number(e.target.value))}
							/>
							<Label htmlFor="customers">Number of Customers</Label>
							<Input
								type="number"
								name="customers"
								value={numberOfCustomers}
								onChange={(e) => setNumberOfCustomers(Number(e.target.value))}
							/>
							<Label htmlFor="speed">Simulation Speed</Label>
							<Input
								type="number"
								name="speed"
								value={simulationSpeed}
								onChange={(e) => setSimulationSpeed(Number(e.target.value))}
							/>
						</div>
					</DrawerHeader>
					<DrawerFooter>
						<Button variant="outline">Randomize</Button>
						<Button
							onClick={() => {
								handleClick();
							}}
						>
							Create
						</Button>
						<DrawerClose>
							<Button variant="outline" className="w-full">
								Cancel
							</Button>
						</DrawerClose>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</div>
	);
};
