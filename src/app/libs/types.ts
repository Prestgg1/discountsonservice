
export interface SubscriptionsType {
    id: number;
    type: string;
    features: Feature;
    subscriptionId:number;
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
    types:SubscriptionsType[];
    createdAt: string;
    updatedAt: string;
}

export type Subscriptions = Subscription[];

export interface LoginType{
    email:string;
    password:string
}
