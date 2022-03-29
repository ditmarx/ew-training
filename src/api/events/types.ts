export type EventList = {
    count: number;
    next: string | null;
    previous: string | null;
    results: EventListItem[];
}

export type EventListItem = {
    id: number;
    url: string;
    name: string;
    type: {
        id: number;
        name: string;
    };
    description: string;
    location: string;
    news_url: string | null;
    video_url: string | null;
    feature_image: string;
    date: string;
    launches: EventLaunch[];
    expeditions: EventExpedition[];
    spacestations: EventSpacestation[];
}

export type EventDetails = EventListItem;

type EventLaunch = {
    id: string;
    url: string;
    launch_library_id: number | null;
    slug: string;
    name: string;
    status: {
        id: number;
        name: string;
    };
    net: string;
    window_end: string;
    window_start: string;
    mission: string;
    mission_type: string;
    pad: string;
    location: string;
    landing: string | null;
    landing_success: number | null;
    launcher: string | null;
    orbit: string;
    image: string | null;
}

type EventSpacestation = {
    id: number;
    url: string;
    name: string;
    status: {
        id: number;
        name: string;
    };
    founded?: string;
    description?: string;
    orbit: string;
    image_url: string;
}

type EventExpedition = {
    id: number;
    url: string;
    name: string;
    start: string;
    end: string | null;
    spacestation: EventSpacestation;
}
