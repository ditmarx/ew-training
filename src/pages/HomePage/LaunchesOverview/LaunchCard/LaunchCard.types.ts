import { LaunchDataFromApi } from 'api/types';

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
