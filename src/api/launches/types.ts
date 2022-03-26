
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
