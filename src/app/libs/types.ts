export interface SubscriptionsType {
    id: number,
    type: string,
    features: Feature;
    durations: Duration[];
}
export interface Feature {
    az: string[];
    en: string[];
}
export interface Duration {
    price: number;
    duration: number;
}