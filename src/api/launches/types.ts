import { RocketDetails } from '../rockets/types';

export type LaunchListDetailed = {
    count: number;
    next: string | null;
    previous: string | null;
    results: LaunchListItem[];
}

export type LaunchListItem = {
    id: string;
    url: string;
    launch_library_id: number | null;
    slug: string;
    name: string;
    img_url: string | null;
    status: {
        id: number;
        name: string;
    };
    net: string;
    window_end: string;
    window_start: string;
    inhold: boolean;
    tbdtime: boolean;
    tbddate: boolean;
    probability: number | null;
    holdreason: string | null;
    failreason: string | null;
    hashtag: string | null;
    rocket: RocketDetails;
    mission: LaunchMission;
    pad: LaunchPad;
    infoURLs: string[];
    vidURLs: string[];
    image_url: string | null;
    infographic_url: string | null;
}

type LaunchMission = {
    id: number;
    launch_library_id: number | null;
    name: string;
    description: string;
    type: string;
    orbit: string;
    orbit_abbrev: string;
}

type LaunchPad = {
    id: number;
    agency_id: number | null;
    name: string;
    info_url: string;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: {
        id: number;
        name: string;
        country_code: string;
    };
}

export type LaunchDetails = LaunchListItem;
