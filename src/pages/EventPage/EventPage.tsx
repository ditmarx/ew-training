import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEventDetailsQuery } from 'src/api/events';
import { setPageTitle } from 'src/utils/setPageTitle';
import { PageLayout } from 'src/components/containers';
import EventHero from './EventHero';
import EventMain from './EventMain';

const EventPage = () => {
    const { id } = useParams();
    const { currentData: event, isError } = useGetEventDetailsQuery(id as string);

    useEffect(() => setPageTitle('Event', id, event?.name), [id, event]);

    return (
        <PageLayout
            queryError={isError}
            queryNoData={!event}
        >
            <EventHero event={event} />
            <EventMain event={event} />
        </PageLayout>
    );
};

export default EventPage;
