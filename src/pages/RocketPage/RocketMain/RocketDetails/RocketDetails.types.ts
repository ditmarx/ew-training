import { RocketConfiguration } from 'src/api/rockets/types';

type RocketDetailsProps = {
    rocket: RocketConfiguration,
};

export default RocketDetailsProps;

type ColumnType = {
    title: string;
    dataKey: 'family' | 'specifications' | 'payload';
    svgIcon: JSX.Element;
};

export type TableType = ColumnType[];

type ChipsItemType = {
    text: string;
    gradient: boolean;
};

type DetailsItemType = {
    term: string;
    value: string | number | null;
    units?: string;
};

export type DetailsDataType = {
    chips: ChipsItemType[];
    family: DetailsItemType[];
    specifications: DetailsItemType[];
    payload: DetailsItemType[];
};
