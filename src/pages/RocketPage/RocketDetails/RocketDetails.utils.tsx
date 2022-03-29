import { TableType, DetailsDataType } from './RocketDetails.types';
import { ReactComponent as SvgRocketFamily } from 'assets/rocket-family.svg';
import { ReactComponent as SvgRocketSpecs } from 'assets/rocket-specs.svg';
import { ReactComponent as SvgRocketPayload } from 'assets/rocket-payload.svg';
import { RocketConfiguration } from 'api/rockets/types';

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

export const getRocketStats = (rocket: RocketConfiguration): DetailsDataType => {
    return {
        chips: [
            {
                text: rocket.family.toUpperCase(),
                gradient: false,
            },
        ],
        family: [
            {
                term: 'Name',
                value: rocket.name,
            },
            {
                term: 'Family',
                value: rocket.family,
            },
            {
                term: 'Variant',
                value: rocket.variant,
            },
            {
                term: 'Full Name',
                value: rocket.full_name,
            },
            {
                term: 'Alias',
                value: rocket.alias,
            },
        ],
        specifications: [
            {
                term: 'Minimum Stage',
                value: rocket.min_stage,
            },
            {
                term: 'Max Stage',
                value: rocket.max_stage,
            },
            {
                term: 'Length',
                value: rocket.length,
                units: 'm',
            },
            {
                term: 'Diameter',
                value: rocket.diameter,
                units: 'm',
            },
            {
                term: 'Fairing Diameter',
                value: null,
            },
            {
                term: 'Launch Mass',
                value: rocket.launch_mass,
                units: 'T',
            },
            {
                term: 'Thrust',
                value: rocket.to_thrust,
                units: 'kN',
            },
            {
                term: 'Apogee (Sub-Orbital)',
                value: rocket.apogee,
                units: 'km',
            },
        ],
        payload: [
            {
                term: 'Launch Cost',
                value: null,
            },
            {
                term: 'Low Earth Orbit',
                value: rocket.leo_capacity,
                units: 'kg',
            },
            {
                term: 'Geostationary Transfer Orbit',
                value: rocket.gto_capacity,
                units: 'kg',
            },
            {
                term: 'Direct Geostationary',
                value: null,
            },
            {
                term: 'Sun-Synchronous Capacity',
                value: null,
            },
        ],
    };
}
