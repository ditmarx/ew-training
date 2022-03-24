import { EventDataFromApi } from 'api/types';

type EventData = {
    id: EventDataFromApi['id'];
    imgUrl: EventDataFromApi['feature_image'];
    date: EventDataFromApi['date'];
    title: EventDataFromApi['name'];
};

type EventCardProps = {
    event: EventData;
};

export default EventCardProps;
