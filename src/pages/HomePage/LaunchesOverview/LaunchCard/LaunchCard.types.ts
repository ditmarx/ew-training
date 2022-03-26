import { LaunchDataFromApi } from 'api/launches/types';

type LaunchData = {
    id: LaunchDataFromApi['id'];
    imgUrl: string;
    date: LaunchDataFromApi['net'];
    title: LaunchDataFromApi['name'];
};

type LaunchCardProps = {
    launch: LaunchData;
};

export default LaunchCardProps;
