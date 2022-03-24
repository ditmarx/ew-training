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

export type LaunchDetailsFromApi = {
    id: string,
    name: string,
    net: string,
    pad: {
        latitude: string,
        longitude: string,
    },
    rocket: {
        configuration: {
            id: number,
            full_name: string,
            family: string,
            variant: string,
            description: string,
        },
    },
};
