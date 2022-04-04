import { LaunchListItem } from '../launches/types';

export const getLaunchImgUrl = (launch: LaunchListItem): string | undefined | null => {
    return (
        launch?.image_url ??
        launch?.rocket.configuration.image_url
    );
};
