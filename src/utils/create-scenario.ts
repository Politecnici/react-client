import type { ScenarioResponse } from "../types";

export const createScenario = async (
	numberOfVehicles: number,
	numberOfCustomers: number,
): Promise<ScenarioResponse> => {
	const url = `http://localhost:8080/scenario/create?numberOfVehicles=${numberOfVehicles}&numberOfCustomers=${numberOfCustomers}`;

	const response = await fetch(url, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Allow-Control-Allow-Origin": "*",
		},
		body: ""
	});

	if (!response.ok) {
		throw new Error("Failed to create scenario");
	}

	const data: ScenarioResponse = await response.json();
	return data;
};
