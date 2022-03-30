import { RocketConfiguration } from "src/api/rockets/types";
import { LaunchListItem } from "src/api/launches/types";
import { EventListItem } from "src/api/events/types";

export const setRocketPageTitle = (id?: string, rocket?: RocketConfiguration) => {
    if (rocket) {
        document.title = `Spaceflights | Rocket (${rocket.full_name})`;
    } else if (id) {
        document.title = `Spaceflights | Rocket (${id})`;
    } else {
        document.title = 'Spaceflights | Rocket';
    }
};

export const setLaunchPageTitle = (id?: string, launch?: LaunchListItem) => {
    if (launch) {
        document.title = `Spaceflights | Launch (${launch.name})`;
    } else if (id) {
        document.title = `Spaceflights | Launch (${id})`;
    } else {
        document.title = 'Spaceflights | Launch';
    }
};

export const setEventPageTitle = (id?: string, event?: EventListItem) => {
    if (event) {
        document.title = `Spaceflights | Event (${event.name})`;
    } else if (id) {
        document.title = `Spaceflights | Event (${id})`;
    } else {
        document.title = 'Spaceflights | Event';
    }
};

export const setHomePageTitle = () => {
    document.title = 'Spaceflights App';
};
