import { DetailsDataType } from '../RocketDetails.types';

const rocketData: DetailsDataType = {
    chips: [
        { text: 'ACTIVE', gradient: true, },
        { text: 'RE-USABLE', gradient: true, },
        { text: 'FALCON', gradient: false, },
    ],
    family: [
        { term: 'Name', value: 'Falcon 9 Block 5', },
        { term: 'Family', value: 'Falcon', },
        { term: 'Variant', value: 'Block 5', },
        { term: 'Full Name', value: 'Falcon 9 Block 5', },
        { term: 'Alias', value: '-', },
    ],
    specifications: [
        { term: 'Minimum Stage', value: '1', },
        { term: 'Max Stage', value: '2', },
        { term: 'Length', value: '70.0 m', },
        { term: 'Diameter', value: '3.65 m', },
        { term: 'Fairing Diameter', value: '5.2 m', },
        { term: 'Launch Mass', value: '549 T', },
        { term: 'Thrust', value: '7607 kN', },
        { term: 'Apogee (Sub-Orbital)', value: '200 km', },
    ],
    payload: [
        { term: 'Launch Cost', value: '$52,000,000', },
        { term: 'Low Earth Orbit', value: '22800 kg', },
        { term: 'Geostationary Transfer Orbit', value: '8300 kg', },
        { term: 'Direct Geostationary', value: '-', },
        { term: 'Sun-Synchronous Capacity', value: '-', },
    ],
};

export default rocketData;
