import { EventDataFromApi } from '../../../../api';

type EventData = {
    id: EventDataFromApi['id'];
    imgUrl: EventDataFromApi['feature_image'];
    date: EventDataFromApi['date'];
    title: EventDataFromApi['name'];
};

type EventCardProps = {
    data: EventData;
};

export default EventCardProps;
