import { FC } from 'react';
import { getYoutubeIdFromUrl } from 'src/utils/helper';
import { MainSection } from 'src/components/containers';
import { RecentEvents, YoutubeEmbed } from 'src/components/common';
import EventRelatedInfo from './EventRelatedInfo';
import EventMainProps from './EventMain.types';

const EventMain: FC<EventMainProps> = ({ event }) => {
    return (
        <MainSection>
            <YoutubeEmbed id={getYoutubeIdFromUrl(event.video_url)}/>
            <EventRelatedInfo />
            <RecentEvents />
        </MainSection>
    );
};

export default EventMain;
