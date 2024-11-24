import type { ScenarioResponse } from "../../../types";

export const createScenario = async (
	numberOfVehicles: number,
	numberOfCustomers: number,
	simulationSpeed: number
): Promise<ScenarioResponse> => {
	const url = "http://localhost:8000/scenario/start";

	const response = await fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			"vehicles": numberOfVehicles,
			"customers": numberOfCustomers,
			"speed": simulationSpeed
		})
	});

	const data: ScenarioResponse = await response.json();
	return data;
};
