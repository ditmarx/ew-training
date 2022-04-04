import { FC } from 'react';
import { MainSection } from 'src/components/containers';
import { MapEmbed, YoutubeEmbed } from 'src/components/common';
import LaunchInfo from './LaunchInfo';
import RocketInfo from './RocketInfo';
import { getYoutubeIdFromUrl, getLaunchMapCenter } from 'src/utils/helper';
import LaunchMainProps from './LaunchMain.types';

const LaunchMain: FC<LaunchMainProps> = ({ launch }) => {
    if (!launch) return null;
    return (
        <MainSection>
            <YoutubeEmbed id={getYoutubeIdFromUrl(null)} />
            <LaunchInfo />
            <RocketInfo rocket={launch.rocket.configuration} />
            <MapEmbed center={getLaunchMapCenter(launch)} />
        </MainSection>
    );
};

export default LaunchMain;
