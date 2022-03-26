export type EventsDataFromApi = {
    count: number;
    results: EventDataFromApi[];
};

export type EventDataFromApi = {
    id: number;
    name: string;
    date: string;
    feature_image: string;
};

export type EventDetailsFromApi = {
    id: number;
    name: string;
    date: string;
    description: string;
    video_url: string;
};
