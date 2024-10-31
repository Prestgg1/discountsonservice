
export interface SubscriptionsType {
    id: number;
    type: string;
    features: Feature;
    durations: Duration[];
}
export interface Description {
    az: string;
    en: string;
    [key: string]: string;
}
export interface Feature {
    az: string[];
    en: string[];
}
export interface Duration {
    price: number;
    duration: number;
}
export interface Subscription {
    id: number;
    name: string;
    image: string;
    slug: string;
    description: Description;
    createdAt: string;
    updatedAt: string;
}

export type Subscriptions = Subscription[];

