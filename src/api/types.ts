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

export type LaunchesDataFromApi = {
    count: number;
    results: LaunchDataFromApi[];
};

export type LaunchDataFromApi = {
    id: string;
    image_url: string;
    name: string;
    net: string;
    rocket: {
        configuration: {
            image_url: string;
        }
    };
};
