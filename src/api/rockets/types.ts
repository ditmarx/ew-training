export type RocketDetails = {
    configuration: RocketConfiguration;
    launcher_stage: RocketLauncherStage[];
    spacecraft_stage: RocketSpacecraftStage | null;
}

export type RocketConfiguration = {
    id: number;
    launch_library_id: number | null;
    url: string;
    name: string;
    description: string;
    family: string;
    full_name: string;
    launch_service_provider: LaunchServiceProvider;
    variant: string;
    alias: string;
    min_stage: number | null;
    max_stage: number | null;
    length: number | null;
    diameter: number | null;
    maiden_flight: string;
    launch_mass: number | null;
    leo_capacity: number | null;
    gto_capacity: number | null;
    to_thrust: number | null;
    apogee: number | null;
    vehicle_range: number | null;
    image_url: string;
    info_url: string;
    wiki_url: string;
}

type LaunchServiceProvider = {
    id: number;
    url: string;
    name: string;
    featured: boolean;
    type: string;
    country_code: string;
    abbrev: string;
    description: string;
    administrator: string;
    founding_year: string;
    launchers: string;
    spacecraft: string;
    launch_library_url: string;
    successful_launches: number;
    failed_launches: number;
    pending_launches: number;
    info_url: string;
    wiki_url: string;
    logo_url: string;
    image_url: string;
    nation_url: string;
}

type RocketLauncherStage = {
    type: string;
    reused: boolean | null;
    launcher_flight_number: number;
    launcher: StageLauncher;
    landing: StageLanding;
}

type StageLauncher = {
    id: number;
    url: string;
    details: string;
    flight_proven: boolean;
    serial_number: string;
    status: string;
    previous_flights: number;
    image_url: string;
}

type StageLanding = {
    attempt: boolean;
    success: boolean | null;
    description: string;
    location: {
        name: string;
        abbrev: string;
        description: string | null;
    };
    type: {
        name: string;
        abbrev: string;
        description: string;
    };
}

type RocketSpacecraftStage = {
    id: number;
    url: string;
    mission_end: string | null;
    destination: string;
    launch_crew: CrewMember[];
    onboard_crew: CrewMember[];
    landing_crew: CrewMember[];
    spacecraft: Spacecraft;
    docking_events: any[];
}

type CrewMember = {
    role: string;
    astronaut: Astronaut;
}

type Astronaut = {
    id: number;
    url: string;
    name: string;
    status: {
        id: number;
        name: string;
    };
    type: {
        id: number;
        name: string;
    };
    agency: {
        id: number;
        url: string;
        name: string;
        type: string;
    };
    date_of_birth: string | null;
    date_of_death: string | null;
    nationality: string;
    twitter: string;
    instagram: string;
    bio: string;
    profile_image: string;
    wiki: string;
}

type Spacecraft = {
    id: number;
    url: string;
    name: string;
    serial_number: string;
    status: {
        id: number;
        name: string;
    };
    description: string;
    spacecraft_config: SpacecraftConfig;
}

type SpacecraftConfig = {
    id: number;
    url: string;
    name: string;
    type: {
        id: number;
        name: string;
    };
    agency: {
        id: number;
        url: string;
        name: string;
        type: string;
    };
    in_use: boolean;
    capability: string;
    history: string;
    details: string;
    maiden_flight: string;
    height: number | null;
    diameter: number | null;
    human_rated: boolean;
    crew_capacity: number;
    payload_capacity: number | null;
    flight_life: string;
    image_url: string;
    nation_url: string | null;
    wiki_link: string;
    info_link: string;
}
