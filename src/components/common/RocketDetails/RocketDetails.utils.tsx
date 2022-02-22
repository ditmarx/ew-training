import { TableType } from './RocketDetails.types';
import { ReactComponent as SvgRocketFamily } from 'assets/rocket-family.svg';
import { ReactComponent as SvgRocketSpecs } from 'assets/rocket-specs.svg';
import { ReactComponent as SvgRocketPayload } from 'assets/rocket-payload.svg';

export const tableConfig: TableType = [
    {
        title: 'Family',
        dataKey: 'family',
        svgIcon: <SvgRocketFamily />,
    },
    {
        title: 'Specifications',
        dataKey: 'specifications',
        svgIcon: <SvgRocketSpecs />,
    },
    {
        title: 'Payload Capacity',
        dataKey: 'payload',
        svgIcon: <SvgRocketPayload />,
    },
];
