import { useState } from "react";
import { createScenario } from "../../utils/create-scenario";

export const StartButton = () => {
	const [numberOfVehicles, setNumberOfVehicles] = useState(0);
	const [numberOfCustomers, setNumberOfCustomers] = useState(0);
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);

	const handleClick = async () => {
		if (numberOfVehicles <= 0 || numberOfCustomers <= 0) {
			setError("Please enter valid numbers for vehicles and customers.");
			return;
		}

		try {
			setLoading(true);
			setError(null);

			const response = await createScenario(
				numberOfVehicles,
				numberOfCustomers,
			);
			console.log("Scenario created:", response);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			setError("An error occurred while creating the scenario.");
		}
	};

	return (
		<>
			<div>
				<input
					type="number"
					value={numberOfVehicles}
					onChange={(e) => setNumberOfVehicles(Number(e.target.value))}
					placeholder="Number of Vehicles"
				/>
			</div>
			<div>
				<input
					type="number"
					value={numberOfCustomers}
					onChange={(e) => setNumberOfCustomers(Number(e.target.value))}
					placeholder="Number of Customers"
				/>
			</div>
			<button type="button" onClick={handleClick} disabled={loading}>
				{loading ? "Loading..." : "Start Interaction"}
			</button>
			{error && <div style={{ color: "red" }}>{error}</div>}{" "}
		</>
	);
};
