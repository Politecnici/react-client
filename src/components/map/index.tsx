// biome-ignore lint/suspicious/noShadowRestrictedNames:
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Styles from "./styles";

export const MapCard = () => {
	const apiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY || "";

	return (
		<Card className="col-span-4">
			<CardHeader>
				<CardTitle>Live Map</CardTitle>
			</CardHeader>
			<CardContent>
				<APIProvider apiKey={apiKey}>
					<Map
						style={{ height: "60vh" }}
						defaultCenter={{ lat: 48.13743, lng: 11.57549 }}
						defaultZoom={12}
						gestureHandling={"greedy"}
						disableDefaultUI={true}
						mapTypeId={"roadmap"}
						styles={Styles}
					/>
				</APIProvider>
			</CardContent>
		</Card>
	);
};
