export interface Vehicle {
    id: string;
    coordX: number;
    coordY: number;
    isAvailable: boolean;
    vehicleSpeed: number | null;
    customerId: string | null;
    remainingTravelTime: number | null;
    distanceTravelled: number | null;
    activeTime: number | null;
    numberOfTrips: number | null;
}

export interface Customer {
    id: string;
    coordX: number;
    coordY: number;
    destinationX: number;
    destinationY: number;
    awaitingService: boolean;
}

export interface ScenarioResponse {
    id: string;
    startTime: string | null;
    endTime: string | null;
    status: 'CREATED' | 'IN_PROGRESS' | 'COMPLETED';
    vehicles: Vehicle[];
    customers: Customer[];
}

export type EventType = 'pickup' | 'dropoff' | 'finish';

export interface EventResponse {
    vehicle: Vehicle;
    event_type: EventType;
}