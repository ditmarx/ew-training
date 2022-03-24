import { LaunchDataFromApi } from '../../../../api';

type LaunchData = {
    id: LaunchDataFromApi['id'];
    imgUrl: string;
    date: LaunchDataFromApi['net'];
    title: LaunchDataFromApi['name'];
};

type LaunchCardProps = {
    data: LaunchData;
};

export default LaunchCardProps;
